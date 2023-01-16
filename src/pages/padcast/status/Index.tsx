import { Divider } from '@mui/material';
import { Stack } from '@mui/system';
import Grid from '@mui/system/Unstable_Grid/Grid';
import List from './list/Index';
export default function Status() {
  return (
    <Grid sm={12}>
      <Stack direction={'row'} justifyContent="space-between" alignItems={'center'} className="py-8  items-center">
        <Stack sx={{ fontWeight: '900', fontSize: '22px' }}>Status</Stack>
      </Stack>
      <Divider variant="middle" sx={{ marginY: '30px' }} />
      <Stack direction={'row'} justifyContent="start" sx={{ padding: '10px' }}></Stack>
      <Grid container sm={12}>
        <List></List>
      </Grid>
    </Grid>
  );
}
