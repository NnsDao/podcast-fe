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
      paddingBottom={'181px'}
      className={Style.sponsorWrapper}>
      <Stack className={Style.title}>Become our sponsor</Stack>
      <Stack className={Style.info} paddingY="60px">
        Get exclusive episodes, merch and more
      </Stack>
      <Stack direction={'row'} spacing={3}>
        <Stack padding={'71px 73px 70px 64px'} bgcolor="#F6F4F0" borderRadius="8px">
          <Stack className={Style.Member}>Member</Stack>
          <Stack className={Style.info}>
            Lorem ipsum dolor sit amet consectetcing <br />
            elit, sed do eiusmod tempor.
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
                SUBSCRIBE
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
              <Stack>$9.99</Stack>
              <Stack>/month</Stack>
            </Stack>
          </Stack>
        </Stack>{' '}
        <Stack padding={'71px 73px 70px 64px'} bgcolor="#F6F4F0" borderRadius="8px">
          <Stack className={Style.Member}>Member</Stack>
          <Stack className={Style.info}>
            Lorem ipsum dolor sit amet consectetcing <br />
            elit, sed do eiusmod tempor.
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
                SUBSCRIBE
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
              <Stack>$9.99</Stack>
              <Stack>/month</Stack>
            </Stack>
          </Stack>
        </Stack>{' '}
        <Stack padding={'71px 73px 70px 64px'} bgcolor="#F6F4F0" borderRadius="8px">
          <Stack className={Style.Member}>Member</Stack>
          <Stack className={Style.info}>
            Lorem ipsum dolor sit amet consectetcing <br />
            elit, sed do eiusmod tempor.
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
                SUBSCRIBE
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
              <Stack>$9.99</Stack>
              <Stack>/month</Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack></Stack>
    </Stack>
  );
}
