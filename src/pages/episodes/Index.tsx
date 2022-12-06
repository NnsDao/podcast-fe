import { Stack } from '@mui/system';
import Artist from './artist/Index';
import Introduce from './introduce/Index';
import Listeners from './listeners/Index';
import Membership from './membership/Index';
import Product from './product/Index';
import Recent from './recent/Index';
import Sponsor from './sponsor/Index';

export default function Episodes() {
  return (
    <Stack>
      <Introduce></Introduce>
      <Artist></Artist>
      <Product></Product>
      <Listeners></Listeners>
      <Membership></Membership>
      <Recent></Recent>
      <Sponsor></Sponsor>
    </Stack>
  );
}
