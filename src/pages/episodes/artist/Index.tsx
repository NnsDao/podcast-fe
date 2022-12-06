import bg2 from '@/public/episodes/bg2.png';
import bg3 from '@/public/episodes/bg3.png';
import supported from '@/public/episodes/supported.png';

import { Stack } from '@mui/system';

export default function Artist() {
  return (
    <Stack direction={'column'} justifyContent="center" alignItems={'center'} bgcolor="#10062F" position={'relative'}>
      <Stack sx={{ position: 'relative', top: '300px' }}>
        <img src={bg2} alt="" width="1920px" height="618px" />
      </Stack>
      <Stack
        paddingX={'60px'}
        position={'absolute'}
        zIndex="2"
        paddingTop={'470px'}
        direction={'row'}
        justifyContent="center"
        spacing={2}
        alignItems={'center'}>
        <Stack
          sx={{
            fontSize: '20px',
            fontWeight: '900',
            color: '#fff',
            position: 'relative',
            top: '-170px',
          }}>
          <Stack paddingBottom={'38px'} textAlign="center">
            Women’s Rights
          </Stack>
          <Stack
            sx={{
              width: '344px',
              height: '418px',
              bgcolor: 'gray',
            }}>
            img
          </Stack>
        </Stack>
        <Stack
          sx={{
            fontSize: '20px',
            fontWeight: '900',
            color: '#fff',
            position: 'relative',
            top: '-260px',
          }}>
          <Stack paddingBottom={'38px'} textAlign="center">
            Women’s Rights
          </Stack>
          <Stack
            sx={{
              width: '344px',
              height: '418px',
              bgcolor: 'gray',
            }}>
            img
          </Stack>
        </Stack>
        <Stack
          sx={{
            fontSize: '20px',
            fontWeight: '900',
            color: '#fff',
            position: 'relative',
            top: '-100px',
          }}>
          <Stack paddingBottom={'38px'} textAlign="center">
            Women’s Rights
          </Stack>
          <Stack
            sx={{
              width: '344px',
              height: '418px',
              bgcolor: 'gray',
            }}>
            img
          </Stack>
        </Stack>
        <Stack
          sx={{
            fontSize: '20px',
            fontWeight: '900',
            color: '#fff',
            position: 'relative',
            top: '-160px',
          }}>
          <Stack paddingBottom={'38px'} textAlign="center">
            Women’s Rights
          </Stack>
          <Stack
            sx={{
              width: '344px',
              height: '418px',
              bgcolor: 'gray',
            }}>
            img
          </Stack>
        </Stack>
        <Stack
          sx={{
            fontSize: '20px',
            fontWeight: '900',
            color: '#fff',
            position: 'relative',
            top: '-60px',
          }}>
          <Stack paddingBottom={'38px'} textAlign="center">
            Women’s Rights
          </Stack>
          <Stack
            sx={{
              width: '344px',
              height: '418px',
              bgcolor: 'gray',
            }}>
            img
          </Stack>
        </Stack>
      </Stack>
      <Stack
        spacing={6}
        direction={'row'}
        justifyContent="center"
        alignItems={'center'}
        position="absolute"
        bottom={'-170px'}>
        <Stack
          sx={{
            fontSize: '20px',
            fontWeight: '900',
            color: '#10062F',
          }}>
          Supported by:
        </Stack>
        <Stack>
          <img src={supported} alt="" width="698px" height="48px" />
        </Stack>
      </Stack>
      <Stack
        sx={{
          position: 'absolute',
          bottom: '-340px',
        }}>
        <img src={bg3} alt="" width="223px" height="151px" />
      </Stack>
    </Stack>
  );
}
