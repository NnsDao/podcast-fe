import { useCreate_podcast_canister, usePodcast_canister } from '@/api/manage';
import { useUserStore } from '@/hooks/userStore';
import { Principal } from '@dfinity/principal';
import { Divider, Stack } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Program from './program/Index';
export default function Opus() {
  const createAction = useCreate_podcast_canister();
  const [userStore, dispatch] = useUserStore();
  const isLogin = userStore.isLogin;
  const PodcastCanister = usePodcast_canister();
  const list = PodcastCanister?.data;
  console.log(list, 'list');

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
      <Program></Program>
    </Stack>
  );
}
