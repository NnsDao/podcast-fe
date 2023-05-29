import { get_podcast_list } from '@/api/podcast';
import cidList from '@/common/cidConfig';
import EpisodeCard from '@/components/episodeCard/Index';
import { Stack } from '@mui/system';
import { PodcastIterm } from '@nnsdao/nnsdao-kit/src/podcast/types';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function All() {
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
    <Stack direction={'row'} width="100%" flexWrap="wrap" margin="10px" justifyContent={'center'}>
      {podcastData.map((item, index) => (
        <EpisodeCard key={index} data={item} />
      ))}
    </Stack>
  );
}
