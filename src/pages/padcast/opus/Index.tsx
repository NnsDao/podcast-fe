import { useCreate_podcast_canister, usePodcast_canister } from '@/api/manage';
import LoginWrapper from '@/components/Login/Login';
import { useUserStore } from '@/hooks/userStore';
import { Principal } from '@dfinity/principal';
import { Divider, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
export default function Opus() {
  const createAction = useCreate_podcast_canister();
  const [userStore, dispatch] = useUserStore();
  const isLogin = userStore.isLogin;
  const [isShowDialog, setIsShowDialog] = useState(false);
  const PodcastCanister = usePodcast_canister();
  const list = PodcastCanister?.data;
  console.log(list, 'list');
  list ? toast.success('Getting Podcast Canister!') : null;

  const navigate = useNavigate();
  const toPodcast = (item: Principal) => {
    navigate(`/Podcast/${item.toText()}`, { replace: true });
  };
  useEffect(() => {
    // getPodcastCanister();
  }, []);
  return (
    <Stack className="full" sx={{ width: '100%' }}>
      <Stack direction={'row'} justifyContent="space-between" alignItems={'center'} className="py-8  items-center">
        <Stack sx={{ fontWeight: '900', fontSize: '22px' }}>Opus</Stack>
      </Stack>
      <Divider variant="middle" sx={{ marginY: '30px' }} />
      <Stack direction={'row'} justifyContent="start" sx={{ padding: '10px' }}></Stack>
      <LoginWrapper isShow={isShowDialog} closeDialog={() => setIsShowDialog(false)} />
    </Stack>
  );
}
