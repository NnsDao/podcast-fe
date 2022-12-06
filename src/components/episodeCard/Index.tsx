import { Avatar } from '@mui/material';
import { Stack } from '@mui/system';
import Style from './index.module.css';

export default function EpisodeCard() {
  return (
    <Stack className={Style.recentWrapper1} direction="column">
      <Stack className={Style.recentWrapper1shadow}></Stack>
      <Stack className={Style.recentWrapper1Above}>
        <Stack direction={'row'}>
          <img src="" alt="" />
          <Stack direction="column">
            <Stack className={Style.recentWrapper1Title}>Eps. 1</Stack>
            <Stack className={Style.recentWrapper1Info}>Pandemic Becoming Endemic</Stack>
            <Stack className={Style.recentWrapper1Line}></Stack>
            <Stack className={Style.recentWrapper1Other}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              <br /> ac ultrices odio.{' '}
            </Stack>
          </Stack>
        </Stack>
        <Stack direction={'row'} justifyContent="space-between" alignContent={'center'} paddingTop="20px">
          <Stack direction={'row'}>
            <Stack className={Style.recentWrapper1Tag}>covid-19</Stack>
            <Stack className={Style.recentWrapper1Tag}>health</Stack>
          </Stack>
          <Stack direction={'row'} alignItems="center">
            <Stack className={Style.recentWrapper1Hosted}>Hosted by:</Stack>
            <Stack direction={'row'}>
              <Avatar></Avatar>
              <Avatar></Avatar>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
