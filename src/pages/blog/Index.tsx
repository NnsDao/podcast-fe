import { Box, Stack } from '@mui/system';

import Article from './article/Index';
import LatestEpisode from './latestEpisode/Index';

export default function Episodes() {
  return (
    <Stack direction={'row'}>
      <Box sx={{ minHeight: '100vh' }}>
        <Article></Article>
        <LatestEpisode></LatestEpisode>
      </Box>
    </Stack>
  );
}
