import { get_podcast_list } from '@/api/podcast';
import cidList from '@/common/cidConfig';
import EpisodeCard from '@/components/episodeCard/Index';
import bgRecent from '@/public/episodes/bgRecent.png';
import { Stack } from '@mui/system';
import { PodcastIterm } from '@nnsdao/nnsdao-kit/src/podcast/types';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function Recent() {
  const [podcastData, setData] = useState<Array<[bigint, PodcastIterm]>>([]);
  const loadData = async () => {
    const toastID = toast.loading('Loading Data...');
    const tokens = await (await Promise.all(cidList.map(config => get_podcast_list(config.cid)))).flat(1);

    try {
      if (tokens) {
        // toast.success('Successfully!');
        setData(tokens.slice(0, 9));
      }
    } catch {
      console.log('err');
    } finally {
      toast.dismiss(toastID);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
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
          {podcastData.map(item => (
            <EpisodeCard data={item} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
