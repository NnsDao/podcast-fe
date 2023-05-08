import Grid from '@mui/material/esm/Unstable_Grid2';
import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Index';
import PodTopBar from './components/PodTopBar';
import TopBar from './components/TopBar';

import { useUserStore } from './hooks/userStore';
import AppRouter from './router';

export default function App() {
  const [userInfo, dispatch] = useUserStore();
  const { pathname } = useLocation();

  const isShow = () => {
    if (pathname.includes('Podcast')) {
      return false;
    }
  };
  return (
    <Grid spacing={0} minHeight={'100vh'}>
      <Grid xs={10} lg={10} justifyContent="center" container bgcolor="#10062F">
        {isShow() === undefined ? <TopBar></TopBar> : null ? <TopBar></TopBar> : <PodTopBar></PodTopBar>}
      </Grid>
      <Grid xs={12} lg={12}>
        <AppRouter></AppRouter>
        <Outlet></Outlet>
      </Grid>
      <Grid xs={10} lg={10} justifyContent="center" container bgcolor="#10062F">
        {isShow() === undefined ? <Footer></Footer> : null ? <Footer></Footer> : null}
      </Grid>
    </Grid>
  );
}
