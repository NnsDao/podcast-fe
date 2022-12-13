import Grid from '@mui/material/Unstable_Grid2';
import Cast from './cast/Index';
import Founder from './founder/Index';
import History from './history/Index';
import Info from './info/Index';
import OurListeners from './ourListeners/Index';
import OurSponsor from './ourSponsor/Index';
import Touch from './touch/Index';

export default function About() {
  return (
    <Grid>
      <Cast></Cast>
      <Info></Info>
      <OurListeners></OurListeners>
      <History></History>
      <Founder></Founder>
      <OurSponsor></OurSponsor>
      <Touch></Touch>
    </Grid>
  );
}
