import bg110 from '@/public/episodes/bg110.png';
import bg8 from '@/public/episodes/bg8.png';
import bg9 from '@/public/episodes/bg9.png';
import { Stack } from '@mui/system';

export default function Product() {
  return (
    <Stack
      direction={'column'}
      justifyContent="center"
      alignItems={'center'}
      bgcolor="#10062F"
      paddingTop={'500px'}
      paddingBottom={'70px'}>
      <Stack
        direction={'column'}
        justifyContent="center"
        alignItems={'center'}
        sx={{
          width: '1162px',
          height: '207px',
          fontSize: '80px',
          color: '#FFFFFF',
          fontFamily: 'Trebuchet-BoldItalic',
        }}>
        <Stack>Talk. Listen. Get inspired </Stack>
        <Stack>by every minute of it.</Stack>
      </Stack>
      <Stack
        width={'100%'}
        direction={'row'}
        justifyContent="space-around"
        alignItems={'center'}
        bgcolor="#10062F"
        paddingTop="220px"
        sx={{
          fontSize: '18px',
          fontWeight: '900',
          color: '#FFFFFF',
          textAlign: 'center',
          lineHeight: '38px',
        }}>
        <Stack direction={'column'} justifyContent="center" alignItems={'center'}>
          <img src={bg8} alt="" width={'130px'} height={'160px'} />
          <Stack paddingTop={'60px'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Curabitur ac ultrices odio.
          </Stack>
        </Stack>
        <Stack direction={'column'} justifyContent="center" alignItems={'center'}>
          <img src={bg9} alt="" width={'130px'} height={'160px'} />
          <Stack paddingTop={'60px'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Curabitur ac ultrices odio.{' '}
          </Stack>
        </Stack>
      </Stack>
      <Stack paddingTop={'200px'}>
        <img src={bg110} width="1338px" height={'513px'} alt="" />
      </Stack>
    </Stack>
  );
}
