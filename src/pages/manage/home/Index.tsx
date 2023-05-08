import { get_address, useCreate_podcast_canister, usePodcast_canister } from '@/api/manage';
import LoadingWrapper from '@/components/LoadingWrapper';
import LoginWrapper from '@/components/Login/Login';
import { useUserStore } from '@/hooks/userStore';
import { Principal } from '@dfinity/principal';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Stack,
} from '@mui/material';
import { payWithICP } from '@nnsdao/nnsdao-kit/helper/pay';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Profile from './profile/Index';
export default function Home() {
  const createAction = useCreate_podcast_canister();
  const [userStore, dispatch] = useUserStore();
  const isLogin = userStore.isLogin;
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const List = LoadingWrapper(Wrapper, () => usePodcast_canister());

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  async function newSite() {
    handleClose();
    if (!isLogin) {
      toast.error('Login first please!');
      setIsShowDialog(true);
      return;
    }
    const toastID = toast.loading('Getting Payment Information...');
    try {
      const address = await get_address().catch(() => null);
      const amount = BigInt(0.5 * 1e8);
      if (!address) {
        toast.error(`Failed address`);
        return;
      }
      toast.loading('Paying...', { id: toastID });
      // transfer
      const blockHeight = await payWithICP(amount, address);
      console.log('blockHeight', blockHeight);
      // params.block_height = BigInt(blockHeight);
      // create
      toast.loading('Initialize Canister...', { id: toastID });
      //@ts-ignore
      createAction.mutate(null, {
        onSuccess(data, variables) {
          toast.success('Create Podcast Successfully!');
        },
        onError(error) {
          toast.error(String(error));
        },
      });
    } catch (error) {
      console.error('err', error);
      toast.error('Failed create', { id: toastID });
    } finally {
      toast.dismiss(toastID);
    }
  }

  return (
    <Stack className="full" sx={{ width: '100%' }}>
      <Stack direction={'row'} justifyContent="space-between" alignItems={'center'} className="py-8  items-center">
        <Stack sx={{ fontWeight: '900', fontSize: '22px' }}>Home</Stack>
        <Button variant="outlined" color="secondary" onClick={() => handleClickOpen()}>
          + New Podcasts
        </Button>
      </Stack>
      <Divider variant="middle" sx={{ marginY: '30px' }} />
      <List></List>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{'Instructions for creating a personal blog'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Creating a personal blog requires a fee of 0.5 ICP for creating a new canister.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={newSite} autoFocus>
            Agree Pay
          </Button>
        </DialogActions>
      </Dialog>
      <LoginWrapper isShow={isShowDialog} closeDialog={() => setIsShowDialog(false)} />
    </Stack>
  );
}
function Wrapper(props) {
  const data = props.data;
  const navigate = useNavigate();

  const toPodcast = (item: Principal) => {
    navigate(`/Podcast/${item.toText()}`, { replace: true });
  };
  return (
    <Stack direction={'row'} justifyContent="start" sx={{ padding: '10px' }} spacing={2}>
      {data.map(item => (
        <Profile key={item} principal={item}></Profile>
      ))}
    </Stack>
  );
}
