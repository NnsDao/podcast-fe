import Grid from '@mui/material/esm/Unstable_Grid2';
import { Outlet } from 'react-router-dom';
import NavLeft from './components/navLeft/Index';

export default function Manage() {
  return (
    <Grid container marginX={{ lg: '150px', md: '50px' }} my={{ xl: 6, sm: 2 }} spacing={{ md: 6, sm: 2, xs: 1 }}>
      <Grid md={1} sm={1.8} justifySelf="flex-start" sx={{ position: 'relative' }} minWidth={200}>
        <NavLeft />
      </Grid>
      <Grid md={11} sm={9} flexShrink={1} ml={{ sm: 1, md: 8 }} sx={{ minHeight: '900px' }} alignItems="stretch">
        <Outlet></Outlet>
      </Grid>
    </Grid>
  );
}
