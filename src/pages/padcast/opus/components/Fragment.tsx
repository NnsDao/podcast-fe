import { useUpdate_podcast } from '@/api/podcast';
import Upload from '@/components/Upload';
import { useUserStore } from '@/hooks/userStore';
import { Button, Chip, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

export default function Fragment(props) {
  return (
    <Stack width={'500px'} paddingX="30px">
      <Stack sx={{ paddingY: '20px', fontSize: '20px', fontWeight: 900 }}>
        {'Fill out the form to create a podcast'}
      </Stack>
      <ActiveContent close={props.close} form={props.form}></ActiveContent>
    </Stack>
  );
}
function ActiveContent(props) {
  const { principal } = useParams();

  const updateAction = useUpdate_podcast(principal as string);
  const navigator = useNavigate();
  const [userStore, dispatch] = useUserStore();
  const principalId = userStore.principalId;
  console.log(props, 'props');

  const [form, setFormField] = React.useReducer(
    (state, { key, value }) => {
      return {
        ...state,
        [key]: value,
      };
    },
    {
      ...props.form[1],
    }
  );

  return (
    <React.Fragment>
      <Stack spacing={2} justifyContent={'center'} alignItems={'center'}>
        <Stack alignItems={'center'}>
          <Upload src={form['cover_image']} setSrc={val => setFormField({ key: 'cover_image', value: val })}></Upload>
          <Typography variant="h6">Cover_image</Typography>
        </Stack>
        <Stack alignItems={'center'}>
          <Upload src={form['show_note']} setSrc={val => setFormField({ key: 'show_note', value: val })}></Upload>
          <Typography variant="h6">Podcast</Typography>
        </Stack>
        <TextField
          variant="standard"
          required
          fullWidth
          id="title"
          label="Title"
          key="title"
          placeholder="title"
          value={form.title}
          onChange={e => changeForm('title', e)}
        />
        <TextField
          variant="standard"
          required
          fullWidth
          id="sub_title"
          label="Sub_title"
          key="sub_title"
          placeholder="sub_title"
          value={form.sub_title}
          onChange={e => changeForm('sub_title', e)}
        />
        <TextField
          required
          variant="standard"
          id="tag"
          fullWidth
          label="Tag"
          placeholder="Please create a tag."
          onKeyDown={e => onEnterTag(e)}
        />
        <Stack direction="row" spacing={1} justifyContent="flex-start" flexWrap="wrap">
          {form?.tag?.map((tag, index) => {
            return (
              <Chip color="secondary" label={tag} key={`${index}-${tag}`} onDelete={() => deleteLabel(tag)}></Chip>
            );
          })}
        </Stack>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Object?.keys(form?.language)[0]}
            label="Age"
            onChange={e => changeForm('language', e)}>
            <MenuItem value={'Korean'}>Korean</MenuItem>
            <MenuItem value={'Japanese'}>Japanese</MenuItem>
            <MenuItem value={'Chinese'}>Chinese</MenuItem>
            <MenuItem value={'Arabic'}>Arabic</MenuItem>
            <MenuItem value={'English'}>English</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Save only</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={form.status}
            label="Status"
            onChange={e => changeForm('status', e)}>
            <MenuItem value={'false'}>Save only</MenuItem>
            <MenuItem value={'true'}>Save and publish</MenuItem>
          </Select>
        </FormControl>
        <TextField
          variant="standard"
          required
          fullWidth
          id="describe"
          label="Describe"
          key="describe"
          placeholder="describe"
          value={form.describe}
          onChange={e => changeForm('describe', e)}
        />
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
    setFormField({ key: 'tag', value: form.tag.filter(item => item !== tag) });
  }
  function changeForm(key, e) {
    if (key == 'language') {
      const obj = new Object();
      obj[e.target.value] = 'null';
      setFormField({ key, value: obj });
    }
    if (key == 'status') {
      setFormField({ key, value: e.target === 0 ? false : true });
    } else {
      setFormField({ key, value: e.target.value });
    }
    setFormField({ key: 'update_at', value: BigInt(new Date().getTime()) });
  }
  function onEnterTag(e) {
    if (e.code === 'Enter') {
      onTagChange(e);
    }
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
  async function confirm() {
    const params = {
      ...form,
    };
    debugger;
    props.close();

    // for (const key of Object.keys(params)) {
    //   if (!checkField(key, params[key])) {
    //     return;
    //   }
    // }
    const toastID = toast.loading('Getting update podcast...');
    try {
      const arg_0 = props.form[0];
      const arg_1 = { ...params };
      console.log(arg_0, arg_1);
      console.log('==============================');
      //@ts-ignore
      const data = await updateAction.mutateAsync({ arg_0: props.form[0], arg_1: { ...params } });
      console.log(data);
      toast.success('update onSuccess');
    } catch (error) {
      console.error('err', error);
      toast.error('Failed update', { id: toastID });
    } finally {
      props.close();
      toast.dismiss(toastID);
    }
  }
}
