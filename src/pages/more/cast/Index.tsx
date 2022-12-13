import img1 from '@/public/episodes/img1.png';
import img2 from '@/public/episodes/img2.png';
import img3 from '@/public/episodes/img3.png';
import img4 from '@/public/episodes/img4.png';
import img5 from '@/public/episodes/img5.png';
import img6 from '@/public/episodes/img6.png';
import img7 from '@/public/episodes/img7.png';
import img8 from '@/public/episodes/img8.png';
import { Stack } from '@mui/system';
import Style from './index.module.css';

export default function Cast() {
  return (
    <Stack
      direction={'row'}
      justifyContent="center"
      alignItems={'center'}
      paddingY="220px"
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
          Doodle Artwork
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
