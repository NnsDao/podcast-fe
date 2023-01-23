import { useCreate_base_info, useGet_podcast_base_info } from '@/api/podcast';
import Upload from '@/components/Upload';
import { useUserStore } from '@/hooks/userStore';
import { Button, Divider, Stack, TextField, Typography } from '@mui/material';
import { SetBaseInfoRes } from '@nnsdao/nnsdao-kit/src/podcast/types';
import React, { useEffect, useReducer } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

export default function CreactBaseInfo(props) {
  const cid = props.principal.toText();
  const [showType, setShowType] = React.useState('table');
  //@ts-ignore

  return (
    <React.Fragment>
      <ActiveContent></ActiveContent>
    </React.Fragment>
  );

  function ActiveContent() {
    const createAction = useCreate_base_info(cid);
    const navigator = useNavigate();
    const [userStore] = useUserStore();
    const { principal } = useParams();
    const getData = useGet_podcast_base_info(cid);

    const [form, setFormField] = useReducer(
      (state, { key, value }) => {
        return {
          ...state,
          [key]: value,
        };
      },
      {
        describe: '',
        cover_image: '',
        icon: '',
        name: '',
      } as const
    );
    useEffect(() => {
      if (getData.data) {
        const keys = Object.keys(getData.data);
        keys.map(item => {
          setFormField({ key: item, value: getData.data[item] });
        });
      }
    }, [getData.data]);
    return (
      <React.Fragment>
        <Stack spacing={2} width={'400px'} padding="20px 40px" justifyContent={'center'} alignItems={'center'}>
          <Stack alignItems={'center'}>
            <Upload src={form['icon']} setSrc={val => setFormField({ key: 'icon', value: val })}></Upload>
            <Typography variant="h6">icon</Typography>
          </Stack>
          <Stack alignItems={'center'}>
            <Upload src={form['cover_image']} setSrc={val => setFormField({ key: 'cover_image', value: val })}></Upload>
            <Typography variant="h6">cover_image</Typography>
          </Stack>
          <TextField
            variant="standard"
            required
            fullWidth
            id="name"
            label="Name"
            key="name"
            placeholder="Name"
            value={form.name}
            onChange={e => changeForm('name', e)}
          />
          {/* <Divider>Tags</Divider> */}
          <TextField
            variant="standard"
            required
            fullWidth
            id="describe"
            label="describe"
            key="describe"
            placeholder="Describe"
            value={form.describe}
            onChange={e => changeForm('describe', e)}
          />
          <Stack direction="row" spacing={1} justifyContent="flex-start" flexWrap="wrap"></Stack>
          <Divider sx={{ my: 4, border: 'none' }}></Divider>
          <Button sx={{ margin: '16px 0' }} size="large" fullWidth variant="contained" type="submit" onClick={confirm}>
            Confirm
          </Button>
        </Stack>
      </React.Fragment>
    );

    function checkField(key, value) {
      if (!value || !value?.length) {
        toast.error(`${key} field cannot be empty!`);
        return false;
      }
      return true;
    }

    function changeForm(key, e) {
      setFormField({ key, value: e.target.value });
    }

    async function confirm() {
      // validate
      const { describe, cover_image, icon, name } = form;
      // @ts-ignore

      const params: SetBaseInfoRes = {
        describe,
        cover_image,
        icon,
        name,
      };
      for (const key of Object.keys(params)) {
        if (!checkField(key, params[key])) {
          return;
        }
      }
      const toastID = toast.loading('Getting Create Information...');
      try {
        const data = await createAction.mutateAsync({
          ...params,
        });
        console.log(data, 9090909);

        toast.success('Create successfully');
        console.log('CreateAction onSuccess', data);
        setTimeout(() => {
          navigator(`Podcast/${principal}/Profile`);
        }, 0);
      } catch (error) {
        console.error('err', error);
        toast.error('Failed create', { id: toastID });
      } finally {
        toast.dismiss(toastID);
      }
    }
  }
}
