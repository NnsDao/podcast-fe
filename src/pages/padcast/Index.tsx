import { Box, Container, Stack } from '@mui/system';
import { Outlet } from 'react-router-dom';
import NavLeft from './components/navLeft/Index';

export default function Podcast() {
  return (
    <Stack direction={'row'}>
      <Box sx={{ minHeight: '100vh', borderRight: '0.2px solid ', borderColor: ' rgba(0, 0, 0, 0.12)' }}>
        <NavLeft />
      </Box>
      <Box sx={{ marginLeft: '240px', minHeight: '100vh', background: '#fff', padding: '50px' }} flexGrow="1">
        <Container maxWidth="xl">
          <Outlet></Outlet>
        </Container>
      </Box>
    </Stack>
  );
}
