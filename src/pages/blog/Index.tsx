import { Stack } from '@mui/system';
import Article from './article/Index';
import LatestEpisode from './latestEpisode/Index';

export default function Episodes() {
  return (
    <Stack>
      <Article></Article>
      <LatestEpisode></LatestEpisode>
    </Stack>
  );
}
