import didImg from '@/public/example/did-service.svg';
import web3Img from '@/public/example/web2-web3.png';
import { Stack } from '@mui/system';

export default function Example() {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      bgcolor="#10062F"
      fontSize={'18px'}
      fontFamily="ArialMT"
      color="#FFFFFF"
      paddingX={'100px'}
      lineHeight="31px">
      <Stack paddingRight="100px">
        <Stack
          sx={{
            fontSize: '40px',
            fontFamily: 'Trebuchet-BoldItalic, Trebuchet',
            color: '#FFFFFF',
            lineHeight: '63px',
          }}>
          Web3 on Looncast:
        </Stack>
        <Stack paddingTop={'91px'} paddingBottom={'80px'}>
          Looncast is to help you better produce and distribute podcasts, all you need to do is to record your audio and
          upload it to Looncast, it will help you submit your show to the web2&web3 platform, backend data analysis, Rss
          service, and Podcast membership service.
          <br />
        </Stack>
        <Stack paddingBottom={'34px'}>
          <img src={web3Img} alt="looncast" width={' 539px'} height="440px" />
        </Stack>
        <Stack textAlign={'center'}>Web2 and web3-based podcast bridges.</Stack>
      </Stack>
      <Stack>
        <Stack
          sx={{
            fontSize: '40px',
            fontFamily: 'Trebuchet-BoldItalic, Trebuchet',
            color: '#FFFFFF',
            lineHeight: '63px',
          }}>
          DID on Looncast:
        </Stack>
        <Stack paddingTop={'91px'} paddingBottom={'80px'}>
          Claim your podcast brand unique identity
          <br />
          <br />
          Privacy-first, web, and mobile dApp with DID-based membership and login options, cryptocurrency-based sponsor,
          and subscriptions. connect your users using web3 Wallet.
          <br />
        </Stack>
        <Stack paddingBottom={'34px'}>
          <img src={didImg} alt="did" width={' 539px'} height="440px" />
        </Stack>
        <Stack textAlign={'center'}>Every podcast creator's identity is a tradable asset.</Stack>
      </Stack>
    </Stack>
  );
}
