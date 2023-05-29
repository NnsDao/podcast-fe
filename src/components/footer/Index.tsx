import applePodcast from '@/public/footer/apple-podcast.svg';
import footer1 from '@/public/footer/footer1.png';
import googlePodcast from '@/public/footer/google-podcast.svg';
import overcast from '@/public/footer/overcast.svg';
import spotify from '@/public/footer/spotify.svg';
import telegram from '@/public/social/telegram.svg';
import twitter from '@/public/social/twitter.svg';
import Link from '@mui/material/Link';
import { Stack } from '@mui/system';
export default function Footer() {
  return (
    <Stack
      direction={'row'}
      justifyContent="space-between"
      alignItems={'center'}
      paddingY="165px"
      padding="100px"
      width={'100%'}
      sx={{
        fontSize: '16px',
        color: '#fff',
        background: '#11062f',
      }}>
      <Stack>
        <Stack sx={{ marginTop: '10px' }} direction={'row'} justifyContent="space-between" alignItems={'center'}>
          <img src={footer1} alt="" width={'125px'} />
          <Stack sx={{ marginLeft: '35px', marginTop: '45px' }}>
            The Decentralization Podcasts Protocol
            <br /> & Ep NFT for Creators.
            <br />
          </Stack>
        </Stack>
        <Stack paddingTop={'33px'}>Looncast ©️ 2023</Stack>
      </Stack>
      <Stack direction={'row'} spacing={15}>
        <Stack>
          <Stack paddingBottom={3}>
            {' '}
            <Link color="inherit" underline="none" variant="body2" href="/">
              Home
            </Link>
          </Stack>
          <Stack paddingBottom={3}>
            {' '}
            <Link color="inherit" underline="none" variant="body2" href="/Features">
              Features
            </Link>
          </Stack>
          <Stack>
            {' '}
            <Link color="inherit" underline="none" variant="body2" href="/Discover">
              Discover
            </Link>
          </Stack>
        </Stack>
        <Stack>
          <Stack>Community</Stack>
          <Stack direction={'row'} padding={'15px'}>
            {' '}
            <Link
              color="inherit"
              underline="none"
              variant="body2"
              marginRight={'10px'}
              href="https://twitter.com/Looncasts">
              <img src={twitter} alt="" width={'35px'} height={'35px'} />
            </Link>
            <Link color="inherit" underline="none" variant="body2" href="#">
              <img src={telegram} alt="" width={'35px'} height={'35px'} />
            </Link>
          </Stack>
        </Stack>
      </Stack>

      <Stack>
        <Stack paddingBottom={'30px'}>Listen to episodes on your favorite platform:</Stack>
        <Stack direction={'row'} alignItems={'center'} spacing={2}>
          <img src={googlePodcast} alt="" width={'35px'} height={'35px'} />
          <img src={applePodcast} alt="" width={'35px'} height={'35px'} />
          <img src={overcast} alt="" width={'35px'} height={'35px'} />
          <img src={spotify} alt="" width={'35px'} height={'35px'} />
        </Stack>
      </Stack>
    </Stack>
  );
}
