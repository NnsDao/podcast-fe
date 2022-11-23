import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/system';
import { Outlet } from 'react-router-dom';
import './App.css';
import LeftSidePanel from './components/leftSide/LeftSidePanel';
import { useUserStore } from './hooks/userStore';
import AppRouter from './router';

export default function App() {
  const [userInfo, dispatch] = useUserStore();

  return (
    <Grid container spacing={0} minHeight={'100vh'}>
      <Grid xs={2} lg={1} alignItems="stretch" sx={{ textAlign: 'center' }}>
        <LeftSidePanel />
      </Grid>
      <Grid xs={10} lg={11}>
        <Container maxWidth="xl">
          <AppRouter></AppRouter>
          <Outlet></Outlet>
        </Container>
      </Grid>
    </Grid>
  );
}
