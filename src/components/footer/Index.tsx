import footer1 from '@/public/footer/footer1.png';
import footer2 from '@/public/footer/footer2.png';
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
        color: '#DDECFF',
      }}>
      <Stack>
        <img src={footer1} alt="" width={'125px'} />
        <Stack paddingTop={'33px'}>
          The Decentralization Podcasts Protocol
          <br /> & Ep NFT for Creators.
        </Stack>
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
            <Link color="inherit" underline="none" variant="body2" href="/more">
              Features
            </Link>
          </Stack>
          <Stack>
            {' '}
            <Link color="inherit" underline="none" variant="body2" href="/blog">
              Discover
            </Link>
          </Stack>
        </Stack>
        <Stack>
          <Stack>
            {' '}
            <Link color="inherit" underline="none" variant="body2" href="https://twitter.com/Looncasts">
              Twitter
            </Link>
          </Stack>
          {/* <Stack paddingY="45px">Pricing</Stack> */}
          {/* <Stack>Blog</Stack> */}
        </Stack>
      </Stack>
      <Stack>
        <Stack paddingBottom={'30px'}>Listen to episodes on your favorite platform:</Stack>
        <img src={footer2} alt="" width={'558px'} height={'50px'} />
      </Stack>
    </Stack>
  );
}
