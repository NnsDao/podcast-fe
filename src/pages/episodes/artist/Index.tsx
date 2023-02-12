import bg2 from '@/public/episodes/bg2.png';
import bg3 from '@/public/episodes/bg3.png';
import photo1 from '@/public/episodes/photo1.png';
import photo2 from '@/public/episodes/photo2.png';
import photo3 from '@/public/episodes/photo3.png';
import photo4 from '@/public/episodes/photo4.png';
import photo5 from '@/public/episodes/photo5.png';
import supported from '@/public/episodes/supported.png';
import { Stack } from '@mui/system';

export default function Artist() {
  return (
    <Stack direction={'column'} justifyContent="center" alignItems={'center'} bgcolor="#10062F" position={'relative'}>
      <Stack sx={{ position: 'relative', top: '250px' }}>
        <img src={bg2} alt="" width="100%" />
      </Stack>
      <Stack
        width={'100%'}
        paddingX={'60px'}
        position="absolute"
        zIndex="2"
        paddingTop={'400px'}
        direction={'row'}
        justifyContent="center"
        spacing={3}
        alignItems={'center'}>
        <Stack
          sx={{
            width: '17vw',
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
              background: ' no-repeat center/cover url(/src/static/imgs/home/bg.png)',
            }}></Stack>
          <img src={photo1} alt="" />
        </Stack>
        <Stack
          sx={{
            fontSize: '20px',
            fontWeight: '900',
            color: '#fff',
            position: 'relative',
            width: '17vw',
            top: '-260px',
          }}>
          <Stack paddingBottom={'38px'} textAlign="center">
            Blockchain
          </Stack>
          <Stack
            sx={{
              bgcolor: 'gray',
            }}>
            <img src={photo2} alt="" />
          </Stack>
        </Stack>
        <Stack
          sx={{
            fontSize: '20px',
            fontWeight: '900',
            color: '#fff',
            width: '17vw',
            position: 'relative',
            top: '-100px',
          }}>
          <Stack paddingBottom={'38px'} textAlign="center">
            Business
          </Stack>
          <Stack
            sx={{
              bgcolor: 'gray',
            }}>
            <img src={photo3} alt="" />
          </Stack>
        </Stack>
        <Stack
          sx={{
            fontSize: '20px',
            fontWeight: '900',
            width: '17vw',
            color: '#fff',
            position: 'relative',
            top: '-160px',
          }}>
          <Stack paddingBottom={'38px'} textAlign="center">
            Education
          </Stack>
          <Stack
            sx={{
              bgcolor: 'gray',
            }}>
            <img src={photo4} alt="" />
          </Stack>
        </Stack>
        <Stack
          sx={{
            fontSize: '20px',
            width: '17vw',
            fontWeight: '900',
            color: '#fff',
            position: 'relative',
            top: '-60px',
          }}>
          <Stack paddingBottom={'38px'} textAlign="center">
            Society
          </Stack>
          <Stack
            sx={{
              bgcolor: 'gray',
            }}>
            <img src={photo5} alt="" />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        spacing={6}
        direction={'row'}
        justifyContent="center"
        alignItems={'center'}
        position="absolute"
        bottom={'-140px'}
        width={'1000px'}>
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
          bottom: '-290px',
        }}>
        <img src={bg3} alt="" width="223px" height="151px" />
      </Stack>
    </Stack>
  );
}
