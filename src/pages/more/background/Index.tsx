import bg110 from '@/public/episodes/bg110.png';
import { Stack } from '@mui/system';

export default function Background() {
  return (
    <Stack
      bgcolor="#10062F"
      direction={'column'}
      justifyContent="center"
      spacing={3}
      sx={{
        fontSize: '18px',
        fontFamily: 'ArialMT',
        color: '#DDECFF',
        padding: '100px',
      }}>
      <Stack
        sx={{
          fontSize: '50px',
          fontFamily: 'Trebuchet-BoldItalic, Trebuchet',
          fontWeight: 'normal',
          lineHeight: '65px',
          paddingTop: '140px',
          textAlign: 'center',
          padding: '100px',
        }}>
        Looncast for our podcast background room
      </Stack>
      <Stack direction={'row'} justifyContent="space-around" spacing={12} fontSize={'20px'}>
        <Stack width={'603px'}>
          <Stack>
            Connect your ideas and export your stories, consectetur adipiscing elit.
            <br />
            <br />
            Looncast is designed to be a complete podcast hosting solution, including a feature-rich, responsive website
            so your listeners can use podcatcher to listen to your show closer to natively.
            <br />
          </Stack>
        </Stack>
        <Stack width={'603px'}>
          <Stack>
            Sovereign data belongs to individuals, and users can own their data and choose to deploy it on different
            Layer1 while also accelerating podcast access and saving money with features such as edge computing on the
            blockchain.
          </Stack>
        </Stack>
      </Stack>
      <Stack padding={'100px'} justifyContent="center" alignItems={'center'}>
        <img src={bg110} width="100%" height={'513px'} alt="" />
      </Stack>
    </Stack>
  );
}
