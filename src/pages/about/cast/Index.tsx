import img1 from '@/public/episodes/img1.png';
import img2 from '@/public/episodes/img2.png';
import img3 from '@/public/episodes/img3.png';
import img4 from '@/public/episodes/img4.png';
import img5 from '@/public/episodes/img5.png';
import img6 from '@/public/episodes/img6.png';
import img7 from '@/public/episodes/img7.png';
import img8 from '@/public/episodes/img8.png';
import { Button } from '@mui/material';
import { Stack } from '@mui/system';
import Style from './index.module.css';

export default function Cast() {
  return (
    <Stack
      direction={'row'}
      justifyContent="center"
      alignItems={'center'}
      paddingY="120px"
      bgcolor="#10062F"
      paddingBottom={'220px'}>
      <Stack position="relative">
        <img src={img1} className={Style.img1} alt="" />
        <img src={img2} className={Style.img2} alt="" />
        <img src={img3} className={Style.img3} alt="" />
        <img src={img4} className={Style.img4} alt="" />
      </Stack>
      <Stack direction={'column'} justifyContent="center" alignItems={'center'}>
        <Stack
          sx={{
            width: '812px',
            fontSize: '106px',
            fontFamily: 'Trebuchet-BoldItalic',
            color: '#FFFFFF',
            textAlign: 'center',
          }}>
          About <br />
          Looncast
        </Stack>
        <Stack
          sx={{
            paddingY: '50px',
            width: '915px',
            fontSize: '24px',
            fontFamily: 'Arial-Black',
            fontWeight: '900',
            color: '#FFFFFF',
            textAlign: 'center',
          }}>
          A better connection between creators, protocols, and communities, enables a more authentic or digital user
          experience with the native nature of podcasting and global collaboration and coordination.
        </Stack>

        <Stack direction={'row'} spacing={10}>
          <Stack
            sx={{
              position: 'relative',
              width: '247px',
              height: '52px',
              background: 'linear-gradient(90deg, rgba(209, 48, 179, 1), rgba(58, 79, 231, 1)) ',
              zIndex: '1',
              borderRadius: '26px',
            }}>
            <Button
              sx={{
                position: 'absolute',
                top: '2.5px',
                left: '2.5px',
                color: '#fff',
                fontSize: '20px',
                fontWeight: 900,
                paddingY: '6px',
                paddingX: '20px',
                borderRadius: '25px',
                zIndex: '20',
                bgcolor: '#10062F',
                whiteSpace: 'nowrap',
                ':hover': {
                  bgcolor: '#10062F',
                },
              }}>
              BECOME SPONSOR
            </Button>
          </Stack>
          <Stack
            sx={{
              position: 'relative',
              width: '170px',
              height: '52px',
              background: 'linear-gradient( rgba(250, 217, 97, 1), rgba(247, 107, 28, 1)) ',
              zIndex: '1',
              borderRadius: '26px',
            }}>
            <Button
              sx={{
                position: 'absolute',
                top: '2.5px',
                left: '2.5px',
                color: '#fff',
                fontSize: '20px',
                fontWeight: 900,
                paddingY: '6px',
                paddingX: '20px',
                borderRadius: '25px',
                zIndex: '20',
                bgcolor: '#10062F',
                whiteSpace: 'nowrap',
                ':hover': {
                  bgcolor: '#10062F',
                },
              }}>
              SUBSCRIBE
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack position="relative">
        <img src={img5} className={Style.img5} alt="" />
        <img src={img6} className={Style.img6} alt="" />
        <img src={img7} className={Style.img7} alt="" />
        <img src={img8} className={Style.img8} alt="" />
      </Stack>
    </Stack>
  );
}
