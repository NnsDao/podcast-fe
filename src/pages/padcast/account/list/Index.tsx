import { useAdd_owner, useChange_admin, useDelete_owner, useGet_admin, useGet_owner } from '@/api/podcast';
import { Principal } from '@dfinity/principal';
import { Avatar, Button, Card, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Stack } from '@mui/system';
import React, { useReducer } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import LoadingWrapper from '../../../../components/LoadingWrapper';

export default function List() {
  const { cid } = useParams();
  const [showType, setShowType] = React.useState('table');
  const AdminList = LoadingWrapper(UserCard, () => useGet_admin());
  const OwnerList = LoadingWrapper(UserCard, () => useGet_owner());
  const deleteAction = useDelete_owner();
  const changeAdminAction = useChange_admin();
  const addOwnerAction = useAdd_owner();
  return (
    <React.Fragment>
      <AddOwner></AddOwner>
      <AdminList text="Admin"></AdminList>
      <OwnerList text="Owner"></OwnerList>
    </React.Fragment>
  );

  function UserCard(props) {
    console.log(props.text);
    const data: Array<Principal> = props.data;
    const changeAdminAction = item => {
      const toastId = toast.loading('updating...');
      deleteAction.mutate(item, {
        onSuccess(data, variables) {
          toast.success('Change Successfully!', { id: toastId });
        },
        onError(error) {
          toast.error(String(error), { id: toastId });
        },
      });
    };
    const deleteAdmin = item => {
      const toastId = toast.loading('updating...');
      deleteAction.mutate(item, {
        onSuccess(data, variables) {
          toast.success('Delete Successfully!', { id: toastId });
        },
        onError(error) {
          toast.error(String(error), { id: toastId });
        },
      });
    };
    return (
      <Grid
        container
        my={{ sm: 2, md: 4 }}
        columns={showType == 'linear' ? { xs: 11, sm: 4, md: 4 } : undefined}
        spacing={{ sm: 2 }}
        alignItems="stretch">
        {data.map(item => {
          return (
            <Grid xs={11} sm={5} md={5}>
              <Card elevation={1} sx={{ height: '100%' }}>
                <Stack p={{ sm: 1, lg: 2 }} spacing={{ sm: 1 }} justifyContent="center" alignItems={'center'}>
                  <Avatar sizes="medium"></Avatar>
                  <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                    {props.text}:{item.toText()}
                  </Typography>
                  <Button onClick={() => deleteAdmin(item)}>Delete</Button>
                </Stack>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  }
  function AddOwner(props) {
    function changeForm(key, e) {
      console.log(key, e);
      setFormField({ key, value: e.target.value });
    }

    const [form, setFormField] = useReducer(
      (state, { key, value }) => {
        return {
          ...state,
          [key]: value,
        };
      },
      {
        AddOwner: '',
      }
    );

    async function AddOwner() {
      try {
        const toastID = toast.loading('Getting AddOwner Information...');
        // console.log('confirm', params);
        const { AddOwner } = form;
        await addOwnerAction.mutateAsync(await AddOwner.toPrincipal());
      } catch (error) {
        console.error('err', error);
        toast.error('Failed create');
      } finally {
        toast.dismiss('err');
      }
    }
    return (
      <Grid
        container
        my={{ sm: 2, md: 4 }}
        columns={showType == 'linear' ? { xs: 11, sm: 4, md: 4 } : undefined}
        spacing={{ sm: 2 }}
        alignItems="stretch">
        <Grid xs={11} sm={5} md={5}>
          <Card elevation={1} sx={{ height: '100%' }}>
            <Stack p={{ sm: 1, lg: 2 }} spacing={{ sm: 1 }} justifyContent="center" alignItems={'center'}>
              <TextField
                variant="standard"
                required
                id="AddOwner"
                label="AddOwner"
                key="AddOwner"
                placeholder="AddOwner"
                value={form.AddOwner}
                onChange={e => changeForm('AddOwner', e)}
              />
              <Button onClick={() => AddOwner()}>AddOwner</Button>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
