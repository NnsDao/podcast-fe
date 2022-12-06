import { Stack } from '@mui/system';

import EpisodeCard from '@/components/episodeCard/Index';
import bgRecent from '@/public/episodes/bgRecent.png';

export default function Recent() {
  const data = [];
  return (
    <Stack direction={'row'} justifyContent="center" alignItems={'center'} bgcolor="#10062F" position="relative">
      <img src={bgRecent} alt="" width={'1920px'} height={'1961px'} />
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
          Recent Episodes
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
          Available on your favorite platform
        </Stack>
        <Stack direction={'row'} flexWrap="wrap" justifyContent="center" alignItems={'center'}>
          <EpisodeCard></EpisodeCard>
          <EpisodeCard></EpisodeCard>
          <EpisodeCard></EpisodeCard>
          <EpisodeCard></EpisodeCard>
          <EpisodeCard></EpisodeCard>
          <EpisodeCard></EpisodeCard>
        </Stack>
      </Stack>
    </Stack>
  );
}
