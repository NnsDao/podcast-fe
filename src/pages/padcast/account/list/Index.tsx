import { useAdd_owner, useChange_admin, useDelete_owner, useGet_admin, useGet_owner } from '@/api/podcast';
import { Principal } from '@dfinity/principal';
import { Avatar, Button, Card, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/esm/Unstable_Grid2';
import { Stack } from '@mui/system';
import React, { useReducer } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import LoadingWrapper from '../../../../components/LoadingWrapper';

export default function List() {
  const { cid } = useParams();
  const { principal } = useParams();

  const [showType, setShowType] = React.useState('table');
  const AdminList = LoadingWrapper(UserCard, () => useGet_admin(principal as string));
  const OwnerList = LoadingWrapper(UserCard, () => useGet_owner(principal as string));
  const deleteAction = useDelete_owner(principal as string);
  const changeAdminAction = useChange_admin(principal as string);
  const addOwnerAction = useAdd_owner(principal as string);
  return (
    <React.Fragment>
      <AddOwner></AddOwner>
      <AdminList text="Admin"></AdminList>
      <OwnerList text="Guests"></OwnerList>
    </React.Fragment>
  );

  function UserCard(props) {
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
        {data
          ? data?.map(item => {
              return (
                <Grid xs={11} sm={5} md={5} key={item.toText()}>
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
            })
          : null}
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
        Guests: '',
      }
    );

    async function AddOwnerAction() {
      const toastID = toast.loading('Getting Add Guests...');
      try {
        // console.log('confirm', params);
        const { AddOwner } = form;
        await addOwnerAction.mutateAsync(await Principal.fromText(AddOwner));
        toast.success('Successfully!');
      } catch (error) {
        console.error('err', error);
        toast.error('Failed create');
      } finally {
        toast.dismiss(toastID);
      }
    }

    async function ChangeAdminAction() {
      const toastID = toast.loading('Getting Change Owner...');
      try {
        // console.log('confirm', params);
        const { ChangeOwner } = form;
        console.log(ChangeOwner, 'ChangeOwner debug');

        await changeAdminAction.mutateAsync(await Principal.fromText(ChangeOwner));
        toast.success('Successfully!');
      } catch (error) {
        console.error('err', error);
        if (error != null) {
          toast.error('Failed create');
        } else {
          toast.success('Successfully!');
        }
      } finally {
        toast.dismiss(toastID);
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
                fullWidth
                variant="standard"
                required
                id="AddOwner"
                label="Add Guests"
                key="AddOwner"
                placeholder="Add Guests"
                value={form.AddOwner}
                onChange={e => changeForm('AddOwner', e)}
              />
              <Button onClick={() => AddOwnerAction()}>Add Guests</Button>
            </Stack>

            <Stack p={{ sm: 1, lg: 2 }} spacing={{ sm: 1 }} justifyContent="center" alignItems={'center'}>
              <TextField
                fullWidth
                variant="standard"
                required
                id="ChangeOwner"
                label="Change Owner"
                key="ChangeOwner"
                placeholder="Change Owner"
                value={form.ChangeOwner}
                onChange={e => changeForm('ChangeOwner', e)}
              />
              <Button onClick={() => ChangeAdminAction()}>Change Owner</Button>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
