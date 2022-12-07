import Grid from '@mui/material/Unstable_Grid2';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Index';
import TopBar from './components/TopBar';
import { useUserStore } from './hooks/userStore';
import AppRouter from './router';

export default function App() {
  const [userInfo, dispatch] = useUserStore();

  return (
    <Grid spacing={0} minHeight={'100vh'}>
      <Grid xs={10} lg={10} justifyContent="center" container bgcolor="#10062F">
        <TopBar></TopBar>
      </Grid>
      <Grid xs={12} lg={12}>
        <AppRouter></AppRouter>
        <Outlet></Outlet>
      </Grid>
      <Grid xs={10} lg={10} justifyContent="center" container bgcolor="#10062F">
        <Footer></Footer>
      </Grid>
    </Grid>
  );
}
