import listeners from '@/public/episodes/listeners.png';
import { Stack } from '@mui/system';

import bg15 from '@/public/episodes/bg15.png';

export default function OurListeners() {
  const data = [];
  return (
    <Stack
      direction={'row'}
      justifyContent="center"
      alignItems={'center'}
      bgcolor="#10062F"
      position="relative"
      paddingBottom={'200px'}>
      <Stack
        sx={{
          position: 'absolute',
          right: '351px',
          top: '-20px',
        }}>
        <img src={bg15} alt="" width={'195px'} height={'186px'} />
      </Stack>
      <img src={listeners} alt="" width={'1920px'} height={'1286px'} />
      <Stack
        justifyContent={'start'}
        sx={{
          paddingX: '100px',
          width: '100%',
          position: 'absolute',
          top: '200px',
        }}>
        <Stack
          sx={{
            fontSize: '80px',
            fontFamily: 'Trebuchet-BoldItalic',
            color: '#10062F',
            lineHeight: '93px',
            textAlign: 'center',
          }}>
          What our listeners say
        </Stack>
        <Stack
          sx={{
            paddingTop: '40px',
            paddingBottom: '100px',
            fontSize: '24px',
            fontFamily: 'Arial-Black',
            fontWeight: '900',
            color: '#10062F',
            lineHeight: '33px',
            textAlign: 'center',
          }}>
          Their experience throughout every platform
        </Stack>
        <Stack direction={'row'} justifyContent="center" alignItems={'center'}>
          <img src="" alt="" width="1496px" height="699px" />
        </Stack>
      </Stack>
    </Stack>
  );
}
