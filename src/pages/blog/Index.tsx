import { Box, Stack } from '@mui/system';

import Article from './article/Index';
import LatestEpisode from './latestEpisode/Index';

export default function Episodes() {
  return (
    <Stack direction={'row'}>
      <Box sx={{ minHeight: '100vh', minWidth: '1250px', width: '100%' }}>
        <Article></Article>
        <LatestEpisode></LatestEpisode>
      </Box>
    </Stack>
  );
}
