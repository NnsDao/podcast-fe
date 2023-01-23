import { useCreate_podcast } from '@/api/podcast';
import Upload from '@/components/Upload';
import { useUserStore } from '@/hooks/userStore';
import { Principal } from '@dfinity/principal';
import { Chip, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Stack } from '@mui/system';
import * as React from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NewPodcast() {
  const [open, setOpen] = React.useState(false);
  const createAction = useCreate_podcast();
  const [userStore, dispatch] = useUserStore();
  const principalId = userStore.principalId;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [form, setFormField] = React.useReducer(
    (state, { key, value }) => {
      return {
        ...state,
        [key]: value,
      };
    },
    {
      tag: [],
      categories: { Default: null },
      status: false,
      describe: '',
      title: '',
      //@ts-ignore
      hosts: principalId ? [].push(Principal.fromText(principalId)) : [],
      cover_image:
        'https://storageapi.fleek.co/6c0adc4a-04ee-4662-907b-7ecff2fcc16c-bucket/147fc0647218540000000000?hash=bafybeigfo56yj67weic5gorkfzwcve3ykh37bimeq2zg7pzowmp6ocmltq',
      link: '',
      create_at: BigInt(new Date().getTime()),
      language: { English: null },
      update_at: BigInt(new Date().getTime()),
      show_note:
        'https://storageapi.fleek.co/6c0adc4a-04ee-4662-907b-7ecff2fcc16c-bucket/147fc0647218540000000000?hash=bafybeigfo56yj67weic5gorkfzwcve3ykh37bimeq2zg7pzowmp6ocmltq',
      guests: [],
      sub_title: '',
    } as const
  );
  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        + New Podcast
      </Button>

      <Dialog open={open} maxWidth={'xl'} TransitionComponent={Transition} onClose={handleClose}>
        <Fragment close={handleClose} from={form}></Fragment>
        {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={newPodcast}>NewPodcast</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}

function Fragment(props) {
  const { cid } = useParams();
  return (
    <Stack width={'500px'} paddingX="30px">
      <Stack sx={{ paddingY: '20px', fontSize: '20px', fontWeight: 900 }}>
        {'Fill out the form to create a podcast'}
      </Stack>
      <ActiveContent close={props.close}></ActiveContent>
    </Stack>
  );
}
function ActiveContent(props) {
  const createAction = useCreate_podcast();
  const navigator = useNavigate();
  const [userStore, dispatch] = useUserStore();
  const principalId = userStore.principalId;
  console.log(principalId);

  const [form, setFormField] = React.useReducer(
    (state, { key, value }) => {
      return {
        ...state,
        [key]: value,
      };
    },
    {
      tag: [],
      categories: { Default: null },
      status: false,
      describe: '',
      title: '',
      hosts: [Principal.fromText(principalId)],
      cover_image:
        'https://storageapi.fleek.co/6c0adc4a-04ee-4662-907b-7ecff2fcc16c-bucket/147fc0647218540000000000?hash=bafybeigfo56yj67weic5gorkfzwcve3ykh37bimeq2zg7pzowmp6ocmltq',
      link: '',
      create_at: BigInt(new Date().getTime()),
      language: { English: null },
      update_at: BigInt(new Date().getTime()),
      show_note:
        'https://storageapi.fleek.co/6c0adc4a-04ee-4662-907b-7ecff2fcc16c-bucket/147fc0647218540000000000?hash=bafybeigfo56yj67weic5gorkfzwcve3ykh37bimeq2zg7pzowmp6ocmltq',
      guests: [],
      sub_title: '',
    } as const
  );

  return (
    <React.Fragment>
      <Stack spacing={2} justifyContent={'center'} alignItems={'center'}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Stack paddingRight={'30px'}>
            <Upload src={form['cover_image']} setSrc={val => setFormField({ key: 'cover_image', value: val })}></Upload>
            <Typography variant="h6">Cover_image</Typography>
          </Stack>
          <Stack>
            <Upload src={form['show_note']} setSrc={val => setFormField({ key: 'show_note', value: val })}></Upload>
            <Typography variant="h6">Podcast</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack alignItems={'center'}>
        <Stack padding="10px"></Stack>
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
        <Stack padding="10px"></Stack>

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
        <Stack padding="10px"></Stack>

        <TextField
          required
          variant="standard"
          id="tag"
          fullWidth
          label="Tag"
          placeholder="Please create a tag."
          onKeyDown={e => onEnterTag(e)}
        />
        <Stack padding="10px"></Stack>

        <Stack direction="row" spacing={1} justifyContent="flex-start" flexWrap="wrap">
          {form.tag.map((tag, index) => {
            return (
              <Chip color="secondary" label={tag} key={`${index}-${tag}`} onDelete={() => deleteLabel(tag)}></Chip>
            );
          })}
        </Stack>
        <Stack padding="10px"></Stack>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Object.keys(form?.language)[0]}
            label="Age"
            onChange={e => changeForm('language', e)}>
            <MenuItem value={'Korean'}>Korean</MenuItem>
            <MenuItem value={'Japanese'}>Japanese</MenuItem>
            <MenuItem value={'Chinese'}>Chinese</MenuItem>
            <MenuItem value={'Arabic'}>Arabic</MenuItem>
            <MenuItem value={'English'}>English</MenuItem>
          </Select>
        </FormControl>
        <Stack padding="10px"></Stack>

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
        <Stack padding="10px"></Stack>

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
        <Stack padding="10px"></Stack>

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

    // for (const key of Object.keys(params)) {
    //   if (!checkField(key, params[key])) {
    //     return;
    //   }
    // }
    console.log(params, 'params');

    const toastID = toast.loading('Getting Create Podcast...');
    try {
      const data = await createAction.mutateAsync({
        ...params,
      });
      console.log(data);
      props.close();
      toast.success('Create onSuccess');
    } catch (error) {
      console.error('err', error);
      toast.error('Failed create', { id: toastID });
    } finally {
      toast.dismiss(toastID);
    }
  }
}
