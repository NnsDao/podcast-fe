import { Stack } from '@mui/system';
import Style from './index.module.css';

export default function All() {
  return (
    <Stack>
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
  );
}
