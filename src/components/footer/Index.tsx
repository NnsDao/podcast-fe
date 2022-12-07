import footer1 from '@/public/footer/footer1.png';
import footer2 from '@/public/footer/footer2.png';
import { Stack } from '@mui/system';
export default function Footer() {
  return (
    <Stack
      direction={'row'}
      justifyContent="center"
      alignItems={'center'}
      paddingY="165px"
      sx={{
        fontSize: '16px',
        color: '#DDECFF',
      }}
      spacing={30}>
      <Stack>
        <img src={footer1} alt="" width={'204px'} height={'135px'} />
        <Stack paddingTop={'33px'}>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit.
        </Stack>
      </Stack>
      <Stack direction={'row'} spacing={15}>
        <Stack>
          <Stack>About</Stack>
          <Stack paddingY="45px">Testimonials</Stack>
          <Stack>Features</Stack>
        </Stack>
        <Stack>
          <Stack>Episodes</Stack>
          <Stack paddingY="45px">Pricing</Stack>
          <Stack>Blog</Stack>
        </Stack>
      </Stack>
      <Stack>
        <Stack paddingBottom={'90px'}>Listen to episodes on your fav platform:</Stack>
        <img src={footer2} alt="" width={'558px'} height={'50px'} />
      </Stack>
    </Stack>
  );
}
