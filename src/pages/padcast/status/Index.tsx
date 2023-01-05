import { Divider } from '@mui/material';
import { Stack } from '@mui/system';
import List from './list/Index';
export default function Status() {
  return (
    <Stack className="full" sx={{ width: '100%' }}>
      <Stack direction={'row'} justifyContent="space-between" alignItems={'center'} className="py-8  items-center">
        <Stack sx={{ fontWeight: '900', fontSize: '22px' }}>Status</Stack>
      </Stack>
      <Divider variant="middle" sx={{ marginY: '30px' }} />
      <Stack direction={'row'} justifyContent="start" sx={{ padding: '10px' }}></Stack>
      <List></List>
    </Stack>
  );
}
