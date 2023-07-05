import { useStart_podcast, useStop_podcast, useUpgrade_podcast } from '@/api/manage';
import { useDeposit } from '@/api/podcast';
import { useUserStore } from '@/hooks/userStore';
import { Principal } from '@dfinity/principal';
import DeleteIcon from '@mui/icons-material/Delete';
import StopIcon from '@mui/icons-material/Stop';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Stack,
  TextField,
} from '@mui/material';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { useReducer, useState } from 'react';
import toast from 'react-hot-toast';

import { useParams } from 'react-router-dom';
import List from './list/Index';

export default function Status() {
  const { cid } = useParams();
  const { principal } = useParams();
  const [open, setOpen] = useState(false);
  const [openStart, setOpenStart] = useState(false);
  const [openStop, setOpenStop] = useState(false);
  const [userStore, dispatch] = useUserStore();
  const isLogin = userStore.isLogin;
  const [isShowDialog, setIsShowDialog] = useState(false);

  const upgradePodcastAction = useUpgrade_podcast(Principal.fromText(principal as string));
  const startPodcastAction = useStart_podcast(Principal.fromText(principal as string));
  const stopPodcastAction = useStop_podcast(Principal.fromText(principal as string));
  const AddDepositAction = useDeposit(principal as string);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function newUpgrade() {
    handleClose();
    if (!isLogin) {
      toast.error('Login first please!');
      setIsShowDialog(true);
      return;
    }

    const toastID = toast.loading('Upgrade new wasm code...');

    try {
      //@ts-ignore
      const data = await upgradePodcastAction.mutateAsync();
      console.log(data);
      toast.success('Successfully!');
    } catch (error) {
      console.error('err', error);
      toast.error('Failed create');
    } finally {
      toast.dismiss(toastID);
    }
  }

  const handleClickOpenStart = () => {
    setOpenStart(true);
  };

  const handleCloseStart = () => {
    setOpenStart(false);
  };

  async function newUpgradeStart() {
    handleCloseStart();
    if (!isLogin) {
      toast.error('Login first please!');
      setIsShowDialog(true);
      return;
    }

    const toastID = toast.loading('Start canister code...');

    try {
      //@ts-ignore
      const data = await startPodcastAction.mutateAsync();
      console.log(data);
      toast.success('Successfully!');
    } catch (error) {
      console.error('err', error);
      toast.error('Failed create');
    } finally {
      toast.dismiss(toastID);
    }
  }

  const handleClickOpenStop = () => {
    setOpenStop(true);
  };

  const handleCloseStop = () => {
    setOpenStop(false);
  };

  async function newUpgradeStop() {
    handleCloseStop();
    if (!isLogin) {
      toast.error('Login first please!');
      setIsShowDialog(true);
      return;
    }

    const toastID = toast.loading('Stop canister code...');

    try {
      //@ts-ignore
      const data = await stopPodcastAction.mutateAsync();
      console.log(data);
      toast.success('Successfully!');
    } catch (error) {
      console.error('err', error);
      toast.error('Failed create');
    } finally {
      toast.dismiss(toastID);
    }
  }

  // todo delete stop

  return (
    <Grid sm={12}>
      <Stack direction={'row'} justifyContent="space-between" alignItems={'center'} className="py-8  items-center">
        <Stack sx={{ fontWeight: '900', fontSize: '22px' }}>Status</Stack>
      </Stack>
      <Divider variant="middle" sx={{ marginY: '30px' }} />

      <AddCycle></AddCycle>

      <Grid container sm={12}>
        <List></List>
      </Grid>

      <Stack direction={'row'} className="py-8 items-center">
        <Stack sx={{ fontWeight: '900', fontSize: '22px', marginRight: '20px' }}>Mangage</Stack>
        <Button
          sx={{ fontWeight: '500', marginRight: '20px' }}
          variant="outlined"
          color="secondary"
          onClick={() => handleClickOpen()}>
          <UpgradeIcon /> Upgrade Podcast
        </Button>

        <Button
          sx={{ fontWeight: '500', marginRight: '20px' }}
          variant="outlined"
          color="secondary"
          onClick={() => handleClickOpenStop()}>
          <StopIcon /> Stop Podcast
        </Button>

        <Button
          sx={{ fontWeight: '500', marginRight: '20px' }}
          variant="outlined"
          color="secondary"
          onClick={() => handleClickOpenStart()}>
          <DeleteIcon /> Start Podcast
        </Button>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{'upgrade for new podcast'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">upgrade maybe lost old data.</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={newUpgrade} autoFocus>
              Agree Upgrade
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={openStop}
          onClose={handleCloseStop}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{'stop for new podcast'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">stop maybe lost old data.</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseStop}>Disagree</Button>
            <Button onClick={newUpgradeStop} autoFocus>
              Agree Stop
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={openStart}
          onClose={handleCloseStart}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{'start for new podcast'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">start canister old data.</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseStart}>Disagree</Button>
            <Button onClick={newUpgradeStart} autoFocus>
              Agree Start
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </Grid>
  );

  function AddCycle(props) {
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

    async function AddCycleAction() {
      const toastID = toast.loading('Getting Add cycle...');
      try {
        const { AddCycle } = form;
        //@ts-ignore
        const data = await AddDepositAction.mutateAsync({
          arg_0: await Principal.fromText(principal as string),
          arg_1: BigInt(AddCycle),
        });
        console.log(data);
        toast.success('Successfully!');
      } catch (error) {
        console.error('err', error);
        toast.error('Failed create');
      } finally {
        toast.dismiss(toastID);
      }
    }

    return (
      <Grid xs={11} sm={5} md={5}>
        <Card elevation={1} sx={{ height: '100%' }}>
          <Stack p={{ sm: 1, lg: 2 }} spacing={{ sm: 1 }} justifyContent="center" alignItems={'center'}>
            <TextField
              fullWidth
              variant="standard"
              required
              id="AddCycle"
              label="Add cycle"
              key="AddCycle"
              placeholder="Add cycle"
              value={form.AddCycle}
              onChange={e => changeForm('AddCycle', e)}
            />
            <Button onClick={() => AddCycleAction()}>deposit cycle</Button>
          </Stack>
        </Card>
      </Grid>
    );
  }
}
