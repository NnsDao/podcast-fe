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
      }}>
      <Stack
        sx={{
          fontSize: '56px',
          fontFamily: 'Trebuchet-BoldItalic, Trebuchet',
          fontWeight: 'normal',
          lineHeight: '65px',
          paddingTop: '140px',
          textAlign: 'center',
          paddingBottom: '90px',
        }}>
        Doodle for our podcast background room
      </Stack>
      <Stack direction={'row'} justifyContent="center" spacing={10} fontSize={'26px'}>
        <Stack width={'643px'}>
          <Stack>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam pellentesque at bibendum euismod tellus duis
            cursus dignissim odio. Sit vulputate et integer in.
            <br />
            <br />
            Sit vel, senectus iaculis morbi. Amet interdum imperdiet laoreet morbi tincidunt fermentum, libero. Ante
            enim eget viverra at porttitor accumsan. Orci non here
            <br />
          </Stack>
        </Stack>
        <Stack width={'643px'}>
          <Stack>
            Quis dictum cursus faucibus mattis dignissim. Pellentes
            <br />
            que purus in sed sodales in mauris molestie. Eleifend est cons
            <br />
            ctetur interdum eu in auctor. Gravida leo et.
          </Stack>
        </Stack>
      </Stack>
      <Stack paddingTop={'200px'} justifyContent="center" alignItems={'center'}>
        <img src={bg110} width="1338px" height={'513px'} alt="" />
      </Stack>
    </Stack>
  );
}
