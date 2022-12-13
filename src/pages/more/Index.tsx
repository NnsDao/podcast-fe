import Grid from '@mui/material/Unstable_Grid2';
import Background from './background/Index';
import Cast from './cast/Index';
import Example from './example/Index';
import Listeners from './listeners/Index';

export default function About() {
  return (
    <Grid>
      <Cast></Cast>
      <img src="" alt="" width={'1919px'} height="1100px" />
      <Background></Background>
      <Example></Example>
      <Listeners></Listeners>
    </Grid>
  );
}
