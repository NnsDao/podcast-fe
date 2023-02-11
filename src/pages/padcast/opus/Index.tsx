import { usePodcast_canister } from '@/api/manage';
import { useUserStore } from '@/hooks/userStore';
import { Stack } from '@mui/material';
import NewPodcast from './newPodcast/Index';
import Program from './program/Index';
export default function Opus() {
  const [userStore, dispatch] = useUserStore();
  const PodcastCanister = usePodcast_canister();
  const list = PodcastCanister?.data;
  console.log(list, 'list');

  return (
    <Stack className="full" sx={{ width: '100%' }}>
      <Stack direction={'row'} justifyContent="space-between" alignItems={'center'} className="py-8  items-center">
        <Stack sx={{ fontWeight: '900', fontSize: '22px' }}>Episodes</Stack>
        <NewPodcast></NewPodcast>
      </Stack>
      {/* <Divider variant="middle" sx={{ marginY: '30px' }} /> */}
      <Stack direction={'row'} justifyContent="start" sx={{ padding: '10px' }}></Stack>
      <Program></Program>
    </Stack>
  );
}
