import { useUserStore } from '@/hooks/userStore';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Token() {
  const [userStore, dispatch] = useUserStore();

  let principalId = userStore.principalId;

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} justifyContent="start">
          <Item>User Principal: {principalId ? principalId : ''}</Item>
        </Grid>
      </Grid>
      <Stack direction={'row'} sx={{ marginTop: '10px' }}>
        ICP Balance:0
      </Stack>
      <Stack direction={'row'} sx={{ marginTop: '10px' }}>
        Loon Balance:0
      </Stack>
    </Box>
  );
}
