import Grid from '@mui/material/esm/Unstable_Grid2';
import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Index';
import TopBar from './components/TopBar';
import { useUserStore } from './hooks/userStore';
import AppRouter from './router';

export default function App() {
  const [userInfo, dispatch] = useUserStore();
  const { pathname } = useLocation();
  const isShow = () => {
    if (pathname === '/manage' || pathname.includes('Podcast')) {
      return false;
    }
  };
  console.log(pathname);
  return (
    <Grid spacing={0} minHeight={'100vh'}>
      <Grid xs={10} lg={10} justifyContent="center" container bgcolor="#10062F">
        {isShow() ? <TopBar></TopBar> : null}
      </Grid>
      <Grid xs={12} lg={12}>
        <AppRouter></AppRouter>
        <Outlet></Outlet>
      </Grid>
      <Grid xs={10} lg={10} justifyContent="center" container bgcolor="#10062F">
        {isShow() ? <Footer></Footer> : null}
      </Grid>
    </Grid>
  );
}
