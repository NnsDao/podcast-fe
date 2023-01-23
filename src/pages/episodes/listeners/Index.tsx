import listeners from '@/public/episodes/listeners.png';
import { Stack } from '@mui/system';

import bg15 from '@/public/episodes/bg15.png';
import { Avatar } from '@mui/material';

export default function Listeners() {
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
      <img src={listeners} alt="" width={'100%'} height={'1086px'} />
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
          What our listeners say
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
          Their experience throughout every platform
        </Stack>
        <Stack
          direction={'row'}
          flexWrap="nowrap"
          overflow={'auto'}
          sx={{
            paddingLeft: '212px',
          }}>
          {Array.from([1, 2, 3, 5, 8, 8]).map(item => (
            <Stack
              key={item + 1}
              sx={{
                minWidth: '581px',
                background: ' #FFFFFF',
                border: '3px dashed #DD8BEB',
                padding: '145px 48px 35px 47px',
                marginRight: '22px',
                whiteSpace: '',
                fontSize: '24px',
                fontFamily: 'Arial-Black',
                fontWeight: '900',
                color: ' #10062F',
                lineHeight: '33px',
              }}>
              <Stack>
                Lorem ipsum dolor sit amet
                <br /> consectet piscing elit, sed do
                <br /> eiusmod tempor incidi ut labore et
                <br /> dolore magna aliqua.
              </Stack>
              <Stack direction={'row'} alignItems="center" paddingTop={'25px'}>
                <Avatar></Avatar>

                <Stack sx={{ marginLeft: '20px', fontSize: '18px', fontWeight: '500' }}>John Smith,</Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
