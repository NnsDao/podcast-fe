import software from '@/public/episodes/software.jpg';
import { Avatar } from '@mui/material';
import { Stack } from '@mui/system';
import Style from './index.module.css';

export default function EpisodeCard() {
  return (
    <Stack className={Style.recentWrapper1} direction="column">
      <Stack className={Style.recentWrapper1shadow}></Stack>
      <Stack className={Style.recentWrapper1Above}>
        <Stack direction={'row'}>
          <img src={software} alt="" />
          <Stack direction="column">
            <Stack className={Style.recentWrapper1Title}>Eps. 1</Stack>
            <Stack className={Style.recentWrapper1Info}>Pandemic Becoming Endemic</Stack>
            <Stack className={Style.recentWrapper1Line}></Stack>
            <Stack className={Style.recentWrapper1Other}>
              Colleen and Michele talk about their hopes and plans for 2023,
              <br /> and make an announcement about this show.{' '}
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
