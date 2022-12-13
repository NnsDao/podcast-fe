import listeners from '@/public/episodes/listeners.png';
import { Stack } from '@mui/system';

import cosmos from '@/public/about/cosmos.png';
import overcast from '@/public/about/overcast.png';
import podcast from '@/public/about/podcast.png';
import bg15 from '@/public/episodes/bg15.png';
export default function OurSponsor() {
  const data = [];
  return (
    <Stack direction={'row'} justifyContent="center" alignItems={'center'} bgcolor="#10062F" position="relative">
      <Stack
        sx={{
          position: 'absolute',
          right: '351px',
          top: '-20px',
        }}>
        <img src={bg15} alt="" width={'195px'} height={'186px'} />
      </Stack>
      <img src={listeners} alt="" width={'1920px'} height={'1086px'} />
      <Stack
        justifyContent={'start'}
        sx={{
          width: '100%',
          position: 'absolute',
          top: '200px',
        }}>
        <Stack
          sx={{
            fontSize: '80px',
            fontFamily: 'Trebuchet-BoldItalic',
            color: '#10062F',
            lineHeight: '93px',
            textAlign: 'center',
          }}>
          Our Sponsor
        </Stack>
        <Stack
          sx={{
            paddingTop: '40px',
            paddingBottom: '100px',
            fontSize: '24px',
            fontFamily: 'Arial-Black',
            fontWeight: '900',
            color: '#10062F',
            lineHeight: '33px',
            textAlign: 'center',
          }}>
          Our current official sponsor
        </Stack>
        <Stack
          direction={'row'}
          flexWrap="nowrap"
          overflow={'auto'}
          sx={{
            paddingLeft: '212px',
          }}>
          <Stack
            sx={{
              minWidth: '581px',
              width: '581px',
              background: ' #FFFFFF',
              border: '3px dashed #DD8BEB',
              padding: '69px 56px ',
              marginRight: '22px',
              whiteSpace: '',
              fontSize: '18px',
              fontFamily: 'ArialMT',
              color: ' #10062F',
            }}>
            <Stack justifyContent={'center'} alignItems="center">
              <img src={overcast} alt="" width={'173px'} height={'50px'} />
            </Stack>
            <Stack
              direction={'row'}
              alignItems="center"
              marginY={'43px'}
              height="1px"
              width={'100%'}
              bgcolor="#979797"></Stack>
            <Stack>
              Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in sed sodales in mauris molestie.
              Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.
            </Stack>
          </Stack>
          <Stack
            sx={{
              minWidth: '581px',
              width: '581px',
              background: ' #FFFFFF',
              border: '3px dashed #DD8BEB',
              padding: '69px 56px ',
              marginRight: '22px',
              whiteSpace: '',
              fontSize: '18px',
              fontFamily: 'ArialMT',
              color: ' #10062F',
            }}>
            <Stack justifyContent={'center'} alignItems="center">
              <img src={podcast} alt="" width={'254px'} height={'50px'} />
            </Stack>
            <Stack
              direction={'row'}
              alignItems="center"
              marginY={'43px'}
              height="1px"
              width={'100%'}
              bgcolor="#979797"></Stack>
            <Stack>
              Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in sed sodales in mauris molestie.
              Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.
            </Stack>
          </Stack>{' '}
          <Stack
            sx={{
              minWidth: '581px',
              width: '581px',
              background: ' #FFFFFF',
              border: '3px dashed #DD8BEB',
              padding: '69px 56px ',
              marginRight: '22px',
              whiteSpace: '',
              fontSize: '18px',
              fontFamily: 'ArialMT',
              color: ' #10062F',
            }}>
            <Stack justifyContent={'center'} alignItems="center">
              <img src={cosmos} alt="" width={'143px'} height={'40px'} />
            </Stack>
            <Stack
              direction={'row'}
              alignItems="center"
              marginY={'43px'}
              height="1px"
              width={'100%'}
              bgcolor="#979797"></Stack>
            <Stack>
              Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in sed sodales in mauris molestie.
              Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
