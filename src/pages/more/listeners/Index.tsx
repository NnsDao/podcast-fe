import listeners from '@/public/episodes/listeners.png';
import { Stack } from '@mui/system';

import bg15 from '@/public/episodes/bg15.png';
import Style from './index.module.css';

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
      <img src={listeners} alt="" width={'1920px'} height={'1286px'} />
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
          Article and News
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
          News, tips, tricks and more
        </Stack>
        <Stack
          direction={'row'}
          justifyContent="center"
          alignItems={'center'}
          spacing={2}
          sx={{
            width: '100%',
            position: 'relative',
          }}>
          <Stack className={Style.articleItemWrapper}>
            <Stack className={Style.img}>
              <img src="" alt="" width="684px" height="392px" />
            </Stack>
            <Stack className={Style.articleItemTitle}>PODCAST</Stack>
            <Stack className={Style.articleItemsubhead}>Setup your own podcast</Stack>
            <Stack className={Style.articleIteminfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              <br /> ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco
              laboris...
            </Stack>
            <Stack className={Style.articleItemline}></Stack>
            <Stack direction={'row'} justifyContent="space-between" alignContent={'center'} paddingTop="20px">
              <Stack direction={'row'}>
                <Stack className={Style.recentWrapper1Tag}>covid-19</Stack>
                <Stack className={Style.recentWrapper1Tag}>health</Stack>
              </Stack>
              <Stack className={Style.data}>Sep 14, 2021</Stack>
            </Stack>
          </Stack>
          <Stack className={Style.articleItemWrapper2}>
            <Stack className={Style.img}>
              <img src="" alt="" width="684px" height="392px" />
            </Stack>
            <Stack className={Style.articleItemTitle2}>TIPS & TRICK</Stack>
            <Stack className={Style.articleItemsubhead2}>Doodle artwork </Stack>
            <Stack className={Style.articleIteminfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br />
              ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...
            </Stack>
            <Stack className={Style.articleItemline}></Stack>
            <Stack direction={'row'} justifyContent="space-between" alignContent={'center'} paddingTop="20px">
              <Stack direction={'row'}>
                <Stack className={Style.recentWrapper1Tag}>covid-19</Stack>
                <Stack className={Style.recentWrapper1Tag}>health</Stack>
              </Stack>
              <Stack className={Style.data}>Sep 14, 2021</Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
