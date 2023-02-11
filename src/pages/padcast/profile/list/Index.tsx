import { useGet_podcast_base_info, useUpdate_base_info } from '@/api/podcast';
import Upload from '@/components/Upload';
import { useUserStore } from '@/hooks/userStore';
import { Button, Divider, Stack, TextField, Typography } from '@mui/material';
import { SetBaseInfoRes } from '@nnsdao/nnsdao-kit/src/podcast/types';
import React, { useEffect, useReducer, useRef } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

export default function Fragment() {
  const { principal } = useParams();
  const [showType, setShowType] = React.useState('table');
  //@ts-ignore

  return (
    <React.Fragment>
      <ActiveContent></ActiveContent>
    </React.Fragment>
  );

  function ActiveContent() {
    const { principal } = useParams();
    const ChangeAction = useUpdate_base_info(principal as string);
    const navigator = useNavigate();
    const [userStore] = useUserStore();
    const editorRef = useRef([]);
    const getData = useGet_podcast_base_info(principal as string);
    let [form, setFormField] = useReducer(
      (state, { key, value }) => {
        console.log(key, value, '99999999999999999999999');
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
    const change = (key, val) => {
      console.log(key, val, 'key,val');
      changeForm(key, val);
    };
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
        <Stack spacing={2} padding="20px 400px" justifyContent={'center'}>
          <Stack width={'400px'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography variant="h6">icon</Typography>
            <Upload
              // src={getData?.data?.icon ? getData?.data?.icon : form['icon']}
              src={form['icon']}
              setSrc={val => setFormField({ key: 'icon', value: val })}></Upload>
          </Stack>
          <Divider variant="middle" sx={{ marginY: '30px' }} />

          <Stack
            width={'400px'}
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            paddingBottom={'50px'}>
            <Typography variant="h6">cover_image</Typography>
            <Upload
              src={form['cover_image']}
              // src={getData?.data?.cover_image ? getData?.data?.cover_image : form['cover_image']}
              setSrc={val => setFormField({ key: 'cover_image', value: val })}></Upload>
          </Stack>

          <TextField
            variant="standard"
            required
            id="name"
            label="Name"
            key="name"
            placeholder="Name"
            // value={getData?.data?.name ? getData?.data?.name : form['name']}
            value={form['name']}
            onChange={e => change('name', e)}
          />
          <TextField
            variant="standard"
            required
            id="describe"
            label="describe"
            key="describe"
            placeholder="Describe"
            // value={getData?.data?.describe ? getData?.data?.describe : form['describe']}
            value={form['describe']}
            onChange={e => changeForm('describe', e)}
          />
          <Stack direction="row" spacing={1} justifyContent="flex-start" flexWrap="wrap">
            {/* {form.tag.map((tag, index) => {
              return (
                <Chip color="secondary" label={tag} key={`${index}-${tag}`} onDelete={() => deleteLabel(tag)}></Chip>
              );
            })} */}
          </Stack>

          <Divider sx={{ my: 4, border: 'none' }}></Divider>
          <Stack alignItems={'end'}>
            <Button
              sx={{ marginRight: '20px', width: '100px' }}
              size="large"
              variant="contained"
              type="submit"
              onClick={Save}>
              Save
            </Button>
          </Stack>
        </Stack>
      </React.Fragment>
    );

    function changeForm(key, e) {
      setFormField({ key, value: e.target.value });
      setFormField({ key, value: e.target.value });
    }

    function onTagChange(e) {
      const value = e.target.value;
      let newList = form.tag.concat(value?.split(/\s+/).filter(val => val));
      if (newList.length > 3) {
        toast.error('No more then 3 tags!');
        newList = newList.slice(0, 3);
      }
      e.target.value = '';
      setFormField({ key: 'tag', value: newList });
    }
    function checkField(key, value) {
      if (!value || !value?.length) {
        toast.error(`${key} field cannot be empty!`);
        return false;
      }
      return true;
    }
    async function Save() {
      const { describe, cover_image, icon, name } = form;
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
      const toastID = toast.loading('Getting Change Information...');
      try {
        const data = await ChangeAction.mutateAsync({
          ...params,
        });
        setTimeout(() => {
          // navigator(`/Podcast/${principal}/Information`);
          toast.success('Change onSuccess');
        }, 100);
      } catch (error) {
        console.error('err', error);
        toast.error('Failed create', { id: toastID });
      } finally {
        toast.dismiss(toastID);
      }
    }
  }
}
