import { useCreate_base_info, useGet_podcast_base_info } from '@/api/podcast';
import Upload from '@/components/Upload';
import { useUserStore } from '@/hooks/userStore';
import { Button, Divider, Stack, TextField, Typography } from '@mui/material';
import { SetBaseInfoRes } from '@nnsdao/nnsdao-kit/src/podcast/types';
import React, { useEffect, useReducer } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

export default function Fragment() {
  const { cid } = useParams();
  const [showType, setShowType] = React.useState('table');
  //@ts-ignore
  const { principal } = useParams();

  return (
    <React.Fragment>
      <ActiveContent></ActiveContent>
    </React.Fragment>
  );

  function ActiveContent() {
    const navigator = useNavigate();
    const [userStore] = useUserStore();
    const { principal } = useParams();
    const createAction = useCreate_base_info(principal as string);
    const getData = useGet_podcast_base_info(principal as string);

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
        <Stack spacing={2} paddingX="200px" justifyContent={'center'} alignItems={'center'}>
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
    function deleteLabel(tag) {
      console.log('delete tag', tag);
      setFormField({ key: 'tag', value: form.tag.filter(item => item !== tag) });
    }

    function changeForm(key, e) {
      setFormField({ key, value: e.target.value });
    }
    function onEnterTag(e) {
      if (e.code === 'Enter') {
        onTagChange(e);
      }
    }
    function onTagChange(e) {
      // changeForm('tag', e);
      const value = e.target.value;
      let newList = form.tag.concat(value?.split(/\s+/).filter(val => val));
      if (newList.length > 3) {
        toast.error('No more then 3 tags!');
        newList = newList.slice(0, 3);
      }
      e.target.value = '';
      setFormField({ key: 'tag', value: newList });
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

        console.log('createAction onSuccess', data);
        setTimeout(() => {
          navigator(`Podcast/${principal}/Information`);
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
