import { useGet_podcast_list } from '@/api/podcast';
import img1 from '@/public/episodes/img1.png';
import img2 from '@/public/episodes/img2.png';
import img3 from '@/public/episodes/img3.png';
import img4 from '@/public/episodes/img4.png';
import img5 from '@/public/episodes/img5.png';
import img6 from '@/public/episodes/img6.png';
import img7 from '@/public/episodes/img7.png';
import img8 from '@/public/episodes/img8.png';
import { Avatar, Divider } from '@mui/material';
import { Stack } from '@mui/system';
import { PodcastIterm } from '@nnsdao/nnsdao-kit/src/podcast/types';
import { useParams } from 'react-router-dom';
import Style from './index.module.css';

export default async function Cast() {
  const { principal, index } = useParams();
  const podcastData: Array<[bigint, PodcastIterm]> =
    useGet_podcast_list()?.data?.filter(item => Number(index) == Number(item[0])) || [];
  console.log(podcastData, 'podcastData');

  return (
    <Stack
      direction={'row'}
      justifyContent="center"
      alignItems={'center'}
      paddingY="120px"
      bgcolor="#10062F"
      paddingBottom={'220px'}>
      <Stack position="relative">
        <img src={img1} className={Style.img1} alt="" />
        <img src={img2} className={Style.img2} alt="" />
        <img src={img3} className={Style.img3} alt="" />
        <img src={img4} className={Style.img4} alt="" />
      </Stack>
      <Stack direction={'row'} justifyContent="center">
        <Stack paddingRight={'100px'}>
          <img src={podcastData[0][1]?.cover_image} alt="" width="545px" height="588px" />
        </Stack>
        <Stack direction={'column'} width={'727px'}>
          <Stack
            sx={{
              fontSize: '56px',
              fontFamily: 'Trebuchet-BoldItalic, Trebuchet',
              fontWeight: 'normal',
              color: '#FFFFFF',
              lineHeight: '65px',
            }}>
            {podcastData[0][1]?.title}
          </Stack>
          <Divider variant="middle" sx={{ marginY: '30px', color: '#fff', borderColor: '#fff' }} />

          <Stack
            sx={{
              fontSize: '28px',
              fontFamily: ' Arial-BoldMT, Arial',
              fontWeight: 'normal',
              color: '#FFFFFF',
              lineHeight: '38px',
            }}>
            {podcastData[0][1]?.describe}
          </Stack>
          <Stack sx={{ marginY: '30px' }}>
            <Stack
              sx={{
                position: 'relative',
                width: '700px',
                height: '116px',
                borderRadius: '32px',
                border: '3px solid',
                background: 'linear-gradient(90deg, rgba(209, 48, 179, 1), rgba(58, 79, 231, 1))',
                zIndex: '1',
              }}>
              <Stack
                direction={'row'}
                alignItems={'center'}
                spacing={1}
                sx={{
                  position: 'absolute',
                  width: '690px',
                  height: '105px',
                  top: '2.5px',
                  left: '2.5px',
                  color: '#fff',
                  fontSize: '20px',
                  fontWeight: 900,
                  borderRadius: '30px',
                  padding: '10px',
                  zIndex: '20',
                  bgcolor: '#10062F',
                  whiteSpace: 'nowrap',
                  ':hover': {
                    bgcolor: '#10062F',
                  },
                }}>
                <Avatar></Avatar>
                <Stack>
                  <Stack
                    sx={{
                      fontSize: '18px',
                      fontFamily: 'ArialMT',
                      color: '#FFFFFF',
                      lineHeight: ' 21px',
                    }}>
                    Are you a Perplexed Mind Person?
                  </Stack>
                  <Stack
                    sx={{
                      width: '172px',
                      height: '20px',
                      fontSize: '18px',
                      fontFamily: 'ArialMT',
                      color: '#B5B5C3',
                      lineHeight: '21px',
                    }}>
                    Hosted by: {podcastData[0][1]?.hosts[0]?.toText()}
                  </Stack>
                </Stack>
                <audio controls color="black">
                  <source src={podcastData[0][1]?.show_note} type="audio/ogg" />
                </audio>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack position="relative">
        <img src={img5} className={Style.img5} alt="" />
        <img src={img6} className={Style.img6} alt="" />
        <img src={img7} className={Style.img7} alt="" />
        <img src={img8} className={Style.img8} alt="" />
      </Stack>
    </Stack>
  );
}
