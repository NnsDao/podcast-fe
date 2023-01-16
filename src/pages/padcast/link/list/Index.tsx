import { useGet_social_link, useSet_social_link } from '@/api/podcast';
import { Button, Stack, TextField } from '@mui/material';
import { Card } from '@mui/material/esm';
import Grid from '@mui/material/esm/Unstable_Grid2';
import { SocialLink } from '@nnsdao/nnsdao-kit/src/podcast/types';
import React from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import LoadingWrapper from '../../../../components/LoadingWrapper';
export default function List() {
  const { cid } = useParams();
  const [showType, setShowType] = React.useState('table');
  const SubList = LoadingWrapper(CardBox, () => useGet_social_link());

  return <SubList></SubList>;
}
function CardBox(props) {
  const data: SocialLink = props.data;
  const updateAction = useSet_social_link();
  const { twitter, instagram, blog, email, distrikt, dmail, dscvr, telegram, github, openchat } = data;
  const [form, setFormField] = React.useReducer(
    (state, { key, value }) => {
      return {
        ...state,
        [key]: value,
      };
    },
    {
      twitter: twitter ? twitter : '',
      blog: blog ? blog : '',
      instagram: instagram ? instagram : '',
      email: email ? email : '',
      distrikt: distrikt ? distrikt : '',
      dmail: dmail ? dmail : '',
      dscvr: dscvr ? dscvr : '',
      telegram: telegram ? telegram : '',
      github: github ? github : '',
      openchat: openchat ? openchat : '',
    }
  );
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
  const sours = {};

  return (
    <Grid container my={{ sm: 2, md: 4 }} spacing={{ sm: 2 }} justifyContent="center" alignItems="stretch">
      <Grid xs={11} sm={5} md={5}>
        <Stack p={{ sm: 1, lg: 2 }} spacing={{ sm: 1 }} justifyContent="center" alignItems={'center'}>
          <Card sx={{ width: '100%' }} elevation={1}>
            <Stack sx={{ height: '80px', padding: '20px' }} justifyContent={'center'} alignItems={'center'}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="twitter"
                label="Twitter"
                key="twitter"
                placeholder="Twitter"
                value={form.twitter}
                onChange={e => changeForm('twitter', e)}
              />
            </Stack>
          </Card>
          <Card sx={{ width: '100%' }} elevation={1}>
            <Stack sx={{ height: '80px', padding: '20px' }} justifyContent={'center'} alignItems={'center'}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="blog"
                label="blog"
                key="blog"
                placeholder="blog"
                value={form.blog}
                onChange={e => changeForm('blog', e)}
              />
            </Stack>
          </Card>
          <Card sx={{ width: '100%' }} elevation={1}>
            <Stack sx={{ height: '80px', padding: '20px' }} justifyContent={'center'} alignItems={'center'}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="instagram"
                label="instagram"
                key="instagram"
                placeholder="instagram"
                value={form.instagram}
                onChange={e => changeForm('instagram', e)}
              />
            </Stack>
          </Card>
          <Card sx={{ width: '100%' }} elevation={1}>
            <Stack sx={{ height: '80px', padding: '20px' }} justifyContent={'center'} alignItems={'center'}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="email"
                label="email"
                key="email"
                placeholder="email"
                value={form.email}
                onChange={e => changeForm('email', e)}
              />
            </Stack>
          </Card>
          <Card sx={{ width: '100%' }} elevation={1}>
            <Stack sx={{ height: '80px', padding: '20px' }} justifyContent={'center'} alignItems={'center'}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="distrikt"
                label="distrikt"
                key="distrikt"
                placeholder="distrikt"
                value={form.distrikt}
                onChange={e => changeForm('distrikt', e)}
              />{' '}
            </Stack>
          </Card>
          <Card sx={{ width: '100%' }} elevation={1}>
            <Stack sx={{ height: '80px', padding: '20px' }} justifyContent={'center'} alignItems={'center'}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="dmail"
                label="dmail"
                key="dmail"
                placeholder="dmail"
                value={form.dmail}
                onChange={e => changeForm('dmail', e)}
              />
            </Stack>
          </Card>
          <Card sx={{ width: '100%' }} elevation={1}>
            <Stack sx={{ height: '80px', padding: '20px' }} justifyContent={'center'} alignItems={'center'}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="dscvr"
                label="dscvr"
                key="dscvr"
                placeholder="dscvr"
                value={form.dscvr}
                onChange={e => changeForm('dscvr', e)}
              />
            </Stack>
          </Card>
          <Card sx={{ width: '100%' }} elevation={1}>
            <Stack sx={{ height: '80px', padding: '20px' }} justifyContent={'center'} alignItems={'center'}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="telegram"
                label="telegram"
                key="telegram"
                placeholder="telegram"
                value={form.telegram}
                onChange={e => changeForm('telegram', e)}
              />
            </Stack>
          </Card>
          <Card sx={{ width: '100%' }} elevation={1}>
            <Stack sx={{ height: '80px', padding: '20px' }} justifyContent={'center'} alignItems={'center'}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="github"
                label="github"
                key="github"
                placeholder="github"
                value={form.github}
                onChange={e => changeForm('github', e)}
              />
            </Stack>
          </Card>
          <Card sx={{ width: '100%' }} elevation={1}>
            <Stack sx={{ height: '80px', padding: '20px' }} justifyContent={'center'} alignItems={'center'}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="openchat"
                label="openchat"
                key="openchat"
                placeholder="openchat"
                value={form.openchat}
                onChange={e => changeForm('openchat', e)}
              />
            </Stack>
          </Card>
        </Stack>
        <Button sx={{ margin: '16px 0' }} size="large" fullWidth variant="contained" type="submit" onClick={confirm}>
          Confirm
        </Button>
      </Grid>
    </Grid>
  );
  async function confirm() {
    const params = {
      ...form,
    };

    // for (const key of Object.keys(params)) {
    //   if (!checkField(key, params[key])) {
    //     return;
    //   }
    // }
    const toastID = toast.loading('Getting Update Link...');
    try {
      const data = await updateAction.mutateAsync({
        ...params,
      });
      console.log(data);
      toast.success('Update onSuccess');
    } catch (error) {
      console.error('err', error);
      toast.error('Failed update', { id: toastID });
    } finally {
      toast.dismiss(toastID);
    }
  }
}
