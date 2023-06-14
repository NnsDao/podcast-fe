import bgSponsor from '@/public/episodes/bgSponsor.png';
import { Button } from '@mui/material';
import { Box, Stack } from '@mui/system';
import Style from './index.module.css';

export default function Sponsor() {
  return (
    <Stack
      direction={'column'}
      justifyContent="center"
      alignItems={'center'}
      bgcolor="#10062F"
      position="relative"
      paddingTop={'146px'}
      paddingBottom={'281px'}
      className={Style.sponsorWrapper}>
      <Stack className={Style.title}>Become our sponsor</Stack>
      <Stack className={Style.info} paddingY="60px">
        Get exclusive episodes, merch and more
      </Stack>
      <Stack direction={'row'} paddingX="100px" spacing={5}>
        <Stack padding={'50px 73px 30px 50px'} bgcolor="#F6F4F0" borderRadius="8px">
          <Stack className={Style.Member}>Claim Collect</Stack>
          <Stack className={Style.info}>NFTs Holder have access to individual creators' audio listening rights.</Stack>
          <Stack direction={'row'} alignItems="center" justifyContent="space-between">
            <Button>
              <Box
                sx={{
                  bgcolor: 'black',
                  borderRadius: '8px',
                  fontSize: '18px',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  width: '177px',
                  height: '54px',
                  textAlign: 'center',
                  lineHeight: '54px',
                  zIndex: '2',
                }}>
                Sponsor
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: '11px',
                  left: '12px',
                  width: '177px',
                  height: '54px',
                  bgcolor: '#7EBAD3',
                  borderRadius: '8px',
                  zIndex: '1',
                }}></Box>
            </Button>
            <Stack>
              <Stack>0 ICP</Stack>
              <Stack>/mint</Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack padding={'50px 73px 30px 50px'} bgcolor="#F6F4F0" borderRadius="8px">
          <Stack className={Style.Member}>Creators NFT</Stack>
          <Stack className={Style.info}>
            A DAO formed by individuals and institutions and released under the NFT mark, <br />
            the holder benefits from the rights in this DAOs.
          </Stack>
          <Stack direction={'row'} alignItems="center" justifyContent="space-between">
            <Button>
              <Box
                sx={{
                  bgcolor: 'black',
                  borderRadius: '8px',
                  fontSize: '18px',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  width: '177px',
                  height: '54px',
                  textAlign: 'center',
                  lineHeight: '54px',
                  zIndex: '2',
                }}>
                Sponsor
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: '11px',
                  left: '12px',
                  width: '177px',
                  height: '54px',
                  bgcolor: '#7EBAD3',
                  borderRadius: '8px',
                  zIndex: '1',
                }}></Box>
            </Button>
            <Stack>
              <Stack>5 ICP</Stack>
              <Stack>/mint</Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack padding={'50px 73px 30px 50px'} bgcolor="#F6F4F0" borderRadius="8px">
          <Stack className={Style.Member}>Looncast Club</Stack>
          <Stack className={Style.info}>
            Genesis members. IRL activity.
            <br />
            <br />A universal NFTs created by the platform, makes it possible for users,
            <br />
            to listen to all podcasts on the platform.
          </Stack>
          <Stack direction={'row'} alignItems="center" justifyContent="space-between">
            <Button>
              <Box
                sx={{
                  bgcolor: 'black',
                  borderRadius: '8px',
                  fontSize: '18px',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  width: '177px',
                  height: '54px',
                  textAlign: 'center',
                  lineHeight: '54px',
                  zIndex: '2',
                }}>
                Sponsor
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: '11px',
                  left: '12px',
                  width: '177px',
                  height: '54px',
                  bgcolor: '#7EBAD3',
                  borderRadius: '8px',
                  zIndex: '1',
                }}></Box>
            </Button>
            <Stack>
              <Stack>100 ICP</Stack>
              <Stack>/mint</Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack direction={'row'} paddingX="100px" spacing={5} paddingTop="40px">
        <Stack padding={'50px 110px 30px 50px'} bgcolor="#F6F4F0" borderRadius="8px">
          <Stack className={Style.included}>What’s included:</Stack>
          <Stack className={Style.Merch}>• Exclusive part Content</Stack>
          <Stack className={Style.Community}>• Join the Community</Stack>
          <Stack className={Style.Access}>• Livestreaming Access</Stack>
        </Stack>
        <Stack padding={'50px 110px 30px 50px'} bgcolor="#F6F4F0" borderRadius="8px">
          <Stack className={Style.included}>What’s included:</Stack>
          <Stack className={Style.Merch}>• Exclusive Content</Stack>
          <Stack className={Style.Content}>• 5% Discount on Merch </Stack>
          <Stack className={Style.Community}>• Join the Community</Stack>
          <Stack className={Style.Access}>• Livestreaming Access</Stack>
        </Stack>
        <Stack padding={'50px 110px 30px 50px'} bgcolor="#F6F4F0" borderRadius="8px">
          <Stack className={Style.included}>What’s included:</Stack>
          <Stack className={Style.Merch}>• Exclusive Content</Stack>
          <Stack className={Style.Merch}>• 15% Discount on Merch </Stack>
          <Stack className={Style.Community}>• Join the Creator Club</Stack>
          <Stack className={Style.Access}>• Livestreaming Access</Stack>
          <Stack className={Style.Content}>• gain platform interest</Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          position: 'absolute',
          right: '113px',
          bottom: '80px',
        }}>
        <img src={bgSponsor} alt="" width={'715px'} height={'519px'} />
      </Stack>
    </Stack>
  );
}
