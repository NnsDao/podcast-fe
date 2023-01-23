import Grid from '@mui/material/esm/Unstable_Grid2';
import { Outlet } from 'react-router-dom';
import NavLeft from './components/navLeft/Index';

export default function Podcast() {
  return (
    <Grid
      container
      marginLeft={{ lg: '80px', md: '50px' }}
      my={{ lg: '50px', xl: 6, sm: 2 }}
      spacing={{ md: 6, sm: 2, xs: 1 }}>
      <Grid md={1} sm={1.8} justifySelf="flex-start" sx={{ position: 'relative' }} width={160}>
        <NavLeft />
      </Grid>
      <Grid md={12} sm={9} sx={{ minHeight: '900px' }} flexShrink={1} ml={{ sm: 1, md: 8 }} alignItems="stretch">
        <Outlet></Outlet>
      </Grid>
    </Grid>
  );
}
