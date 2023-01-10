import { useCreate_podcast } from '@/api/podcast';
import Upload from '@/components/Upload';
import { useUserStore } from '@/hooks/userStore';
import { Principal } from '@dfinity/principal';
import { Chip, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Stack } from '@mui/system';
import { PodcastIterm } from '@nnsdao/nnsdao-kit/src/podcast/types';
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

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        + New Podcast
      </Button>
      <Dialog
        open={open}
        maxWidth={'xl'}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{'Fill out the form to create a podcast'}</DialogTitle>
        <Fragment></Fragment>
        {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={newPodcast}>NewPodcast</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
function Fragment() {
  const { cid } = useParams();
  return (
    <React.Fragment>
      <ActiveContent></ActiveContent>
    </React.Fragment>
  );
}
function ActiveContent() {
  const createAction = useCreate_podcast();
  const navigator = useNavigate();
  const [userStore, dispatch] = useUserStore();
  const principalId = userStore.principalId;
  // const getData = useGet_podcast_base_info();

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
      status: true,
      describe: '',
      title: '',
      //@ts-ignore
      hosts: principalId ? [].push(Principal.fromText(principalId)) : [],
      cover_image:
        'https://storageapi.fleek.co/6c0adc4a-04ee-4662-907b-7ecff2fcc16c-bucket/2409cabd1050bc0000000000?hash=bafybeiae2xem3uue4h4jbvbaurck2rmk4txqwpehsrgm53b7mqmzyxlulm',
      link: '',
      create_at: BigInt(new Date().getTime()),
      language: { Chinese: null },
      update_at: BigInt(0),
      show_note:
        'https://storageapi.fleek.co/6c0adc4a-04ee-4662-907b-7ecff2fcc16c-bucket/193f022a711cf30000000000?hash=bafybeigfo56yj67weic5gorkfzwcve3ykh37bimeq2zg7pzowmp6ocmltq',
      guests: [],
      sub_title: '',
    } as const
  );

  // React.useEffect(() => {
  //   if (getData.data) {
  //     const keys = Object.keys(getData.data);
  //     keys.map(item => {
  //       setFormField({ key: item, value: getData.data[item] });
  //     });
  //   }
  // }, [getData.data]);
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
          {form.tag.map((tag, index) => {
            return (
              <Chip color="secondary" label={tag} key={`${index}-${tag}`} onDelete={() => deleteLabel(tag)}></Chip>
            );
          })}
        </Stack>

        <TextField
          variant="standard"
          required
          fullWidth
          id="language"
          label="Language"
          key="language"
          placeholder="language"
          value={form.language}
          onChange={e => changeForm('language', e)}
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

    const params: PodcastIterm = {
      ...form,
    };
    console.log(params, 'params');
    params as PodcastIterm;
    // for (const key of Object.keys(params)) {
    //   if (!checkField(key, params[key])) {
    //     return;
    //   }
    // }
    const toastID = toast.loading('Getting Create Podcast...');
    try {
      const data = await createAction.mutateAsync({
        ...params,
      });
      toast.success('Create onSuccess');
      console.log('Create onSuccess', data);
    } catch (error) {
      console.error('err', error);
      toast.error('Failed create', { id: toastID });
    } finally {
      toast.dismiss(toastID);
    }
  }
}
