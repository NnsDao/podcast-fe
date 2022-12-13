import { Stack } from '@mui/system';

export default function Info() {
  return (
    <Stack
      bgcolor="#10062F"
      direction={'row'}
      justifyContent="center"
      spacing={3}
      sx={{
        fontSize: '18px',
        fontFamily: 'ArialMT',
        color: '#10062F',
      }}>
      <Stack sx={{ padding: '149px', background: '#F6F4F0', borderRadius: '8px' }}>
        <Stack
          direction={'row'}
          sx={{
            fontSize: '84px',
            fontFamily: 'Arial-Black',
            fontWeight: '900',
            color: '#E02020',
          }}>
          <Stack>76</Stack> <Stack color={'#10062F'}>K</Stack>
        </Stack>
        <Stack paddingTop={'48px'} color={'#6E6E6E'}>
          Community Members
        </Stack>
      </Stack>
      <Stack direction={'column'} sx={{ padding: '149px', background: '#F4E9AF', borderRadius: '8px' }}>
        <Stack
          direction={'row'}
          sx={{
            fontSize: '84px',
            fontFamily: 'Arial-Black',
            fontWeight: '900',
            color: '#E02020',
          }}>
          <Stack>76</Stack> <Stack color={'#10062F'}>K</Stack>
        </Stack>
        <Stack paddingTop={'48px'} color={'#6E6E6E'}>
          Podcast Subscribers
        </Stack>
      </Stack>{' '}
      <Stack direction={'column'} sx={{ padding: '149px', background: '#F6F4F0', borderRadius: '8px' }}>
        <Stack
          direction={'row'}
          sx={{
            fontSize: '84px',
            fontFamily: 'Arial-Black',
            fontWeight: '900',
            color: '#E02020',
          }}>
          <Stack>76</Stack> <Stack color={'#10062F'}>K</Stack>
        </Stack>
        <Stack paddingTop={'48px'} color={'#6E6E6E'}>
          Daily Listeners
        </Stack>
      </Stack>
    </Stack>
  );
}
