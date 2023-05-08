import { useGet_podcast_list } from '@/api/podcast';
import cidList from '@/common/cidConfig';
import EpisodeCard from '@/components/episodeCard/Index';
import bgRecent from '@/public/episodes/bgRecent.png';
import { Stack } from '@mui/system';

export default function Recent() {
  const podcastData = cidList.map(data => useGet_podcast_list(data.cid as string));
  console.log('debug', podcastData);

  return (
    <Stack direction={'row'} justifyContent="center" alignItems={'center'} bgcolor="#10062F" position="relative">
      <img src={bgRecent} alt="" width={'100%'} height={'1900px'} />
      <Stack
        justifyContent={'start'}
        sx={{
          width: '100%',
          position: 'absolute',
          top: '230px',
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
        <Stack direction={'row'} width="100%" flexWrap="wrap" justifyContent="center">
          <EpisodeCard></EpisodeCard>
        </Stack>
      </Stack>
    </Stack>
  );
}
