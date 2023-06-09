import { useGet_owner, useUpdate_podcast } from '@/api/podcast';
import Upload from '@/components/Upload';
import { useUserStore } from '@/hooks/userStore';
import { Principal } from '@dfinity/principal';
import {
  Button,
  Checkbox,
  Chip,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

export default function Fragment(props) {
  return (
    <Stack width={'600px'} paddingX="30px">
      <Stack sx={{ paddingY: '20px', fontSize: '20px', fontWeight: 900 }}>
        {'Fill out the form to create a podcast'}
      </Stack>
      <ActiveContent close={props.close} form={props.form}></ActiveContent>
    </Stack>
  );
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function ActiveContent(props) {
  const { principal } = useParams();

  const updateAction = useUpdate_podcast(principal as string);
  const navigator = useNavigate();
  const [userStore, dispatch] = useUserStore();
  const principalId = userStore.principalId;
  const OwnerList = useGet_owner(principal as string);

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

  const handleChange = e => {
    const value = e.target.value;

    // setPersonName(
    //   // On autofill we get a stringified value.
    //   typeof value === 'string' ? value.split(',') : value,
    // );
    // let newList = form.guests;
    // e.target.value = '';
    setFormField({ key: 'guests', value: value });
  };
  return (
    <React.Fragment>
      <Stack spacing={2} justifyContent={'center'} alignItems={'center'}>
        <Stack alignItems={'center'}>
          <Upload src={form['cover_image']} setSrc={val => setFormField({ key: 'cover_image', value: val })}></Upload>
          <Typography variant="h6">Cover_image</Typography>
        </Stack>
        <Stack alignItems={'center'}>
          <Upload src={form['show_note']} setSrc={val => setFormField({ key: 'show_note', value: val })}></Upload>
          <Typography variant="h5">Episodes</Typography>
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

        <Stack>
          <InputLabel id="demo-multiple-checkbox-label">Guests</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            fullWidth
            value={form?.guests}
            onChange={handleChange}
            MenuProps={MenuProps}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={selected => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map(item => (
                  <Chip key={item.toString()} label={item.toString()} />
                ))}
              </Box>
            )}>
            {OwnerList?.data?.map(item => (
              <MenuItem key={item.toString()} value={item.toString()}>
                <Checkbox checked={form?.guests?.toString().indexOf(item.toString()) > -1} />
                <ListItemText primary={item.toString()} />
              </MenuItem>
            ))}
          </Select>
        </Stack>
        {/* 
        <TextField
          required
          variant="standard"
          id="Guests"
          fullWidth
          label="Guests"
          placeholder="Please Add a Guests Principal TextField."
          onKeyDown={e => onEnterGuests(e)}
        />
        <Stack direction="row" spacing={1} justifyContent="flex-start" flexWrap="wrap">
          {form?.guests?.map((guests, index) => {
            return (
              <Chip
                color="secondary"
                label={
                  guests.toText().slice(0, 6) +
                  '...' +
                  guests.toText().slice(guests.toText().length - 6, guests.toText().length)
                }
                key={`${index}-${guests}`}
                onDelete={() => deleteGuestsLabel(guests)}></Chip>
            );
          })}
        </Stack> */}

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
          rows={4}
          multiline
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
  function labelTemp(e) {
    if (typeof e == 'string') {
      return e;
    } else {
      return;
    }
  }

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
  function onEnterGuests(e) {
    if (e.code === 'Enter') {
      onGuestsChange(e);
    }
  }
  function onGuestsChange(e) {
    const value = e.target.value;
    let newList = form.guests.concat(value?.split(/\s+/).filter(val => val));

    setFormField({ key: 'guests', value: newList });
  }
  function deleteGuestsLabel(guests) {
    setFormField({ key: 'guests', value: form.guests.filter(item => item !== guests) });
  }

  async function confirm() {
    let temp = [];
    if (form.guests.length > 0) {
      const { guests } = form;
      temp = guests.map(item => {
        if (!item._isPrincipal) {
          return Principal.fromText(item);
        } else {
          return item;
        }
      });
      console.log(guests);
    }
    const params = {
      ...form,
      guests: [...temp],
    };
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
      //@ts-ignore
      const data = await updateAction.mutateAsync({ arg_0, arg_1 });
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
