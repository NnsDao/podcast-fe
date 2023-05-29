import { useGet_podcast_list } from '@/api/podcast';
import img1 from '@/public/episodes/img1.png';
import img2 from '@/public/episodes/img2.png';
import img3 from '@/public/episodes/img3.png';
import img4 from '@/public/episodes/img4.png';
import img5 from '@/public/episodes/img5.png';
import img6 from '@/public/episodes/img6.png';
import img7 from '@/public/episodes/img7.png';
import img8 from '@/public/episodes/img8.png';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Avatar, Divider, Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import { PodcastIterm } from '@nnsdao/nnsdao-kit/src/podcast/types';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Style from './index.module.css';
export default function Cast() {
  const { principal, index } = useParams();
  console.log(principal, 29292929);

  const [count, setCount] = useState(0);
  const podcastData: Array<[bigint, PodcastIterm]> =
    useGet_podcast_list(principal as string)?.data?.filter(item => Number(index) == Number(item[0])) || [];
  console.log(podcastData, 'podcastData');

  const getRecordPlay = async () => {
    const res = await fetch(`https://dapi.nnsdao.com/api/podcast/info?canister=${principal}&id=${index}`)
      .then(res => res.json())
      .catch();
    if (res.success) {
      const { count } = res.data;
      setCount(count);
    }
  };

  const postRecordPlay = async () => {
    const res = await fetch('https://dapi.nnsdao.com/api/podcast/record_play', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        canister: principal,
        id: index,
      }),
    });
    console.log('postRecordPlay', res);
  };
  useEffect(() => {
    if (principal && index) {
      postRecordPlay();
      getRecordPlay();
    }
  }, [principal]);
  return (
    <Stack
      direction={'row'}
      justifyContent="center"
      alignItems={'center'}
      padding="120px"
      bgcolor="#10062F"
      paddingBottom={'220px'}>
      <Stack direction={'row'} justifyContent="center" position="relative">
        <Stack position="absolute" top={'243px'} left={'9px'}>
          <img src={img1} className={Style.img1} alt="" />
          <img src={img2} className={Style.img2} alt="" />
          <img src={img3} className={Style.img3} alt="" />
          <img src={img4} className={Style.img4} alt="" />
        </Stack>
        <Stack position="absolute" zIndex={1} right={'100px'} top={'210px'}>
          <img src={img5} className={Style.img5} alt="" />
          <img src={img6} className={Style.img6} alt="" />
          <img src={img7} className={Style.img7} alt="" />
          <img src={img8} className={Style.img8} alt="" />
        </Stack>
        <Stack paddingRight={'100px'}>
          <img src={podcastData[0]?.[1]?.cover_image} alt="" width="445px" height="488px" />
        </Stack>
        <Stack direction={'column'} width={'549px'}>
          <Stack
            sx={{
              fontSize: '43px',
              fontFamily: 'Trebuchet-BoldItalic, Trebuchet',
              fontWeight: 'normal',
              color: '#FFFFFF',
              lineHeight: '65px',
            }}>
            {podcastData[0]?.[1]?.title}
          </Stack>
          <Stack direction={'row'} sx={{ color: '#fff' }}>
            <CalendarMonthIcon /> {dayjs.unix(Number(podcastData[0]?.[1]?.create_at) / 1000).format('MMM-DD-YYYY')}
          </Stack>

          <Stack sx={{ marginY: '30px' }}>
            <Stack
              sx={{
                position: 'relative',
                width: '588px',
                height: '110px',
                borderRadius: '30px',
                background: 'linear-gradient(90deg, rgba(209, 48, 179, 1), rgba(58, 79, 231, 1))',
                zIndex: '1',
              }}>
              <Stack
                direction={'row'}
                alignItems={'center'}
                spacing={1}
                sx={{
                  position: 'absolute',
                  width: '583px',
                  height: '105px',
                  top: '2.5px',
                  left: '2.5px',
                  color: '#fff',
                  fontSize: '20px',
                  fontWeight: 900,
                  borderRadius: '28px',
                  padding: '10px',
                  zIndex: '20',
                  bgcolor: '#10062F',
                  whiteSpace: 'nowrap',
                  ':hover': {
                    bgcolor: '#10062F',
                  },
                }}>
                <Avatar src={podcastData[0]?.[1]?.cover_image} />
                <Stack>
                  <Stack
                    sx={{
                      fontSize: '16px',
                      fontFamily: 'ArialMT',
                      color: '#FFFFFF',
                      lineHeight: ' 21px',
                      paddingBottom: '8px',
                      width: '200px',
                      overflow: 'hidden',
                    }}>
                    {podcastData[0]?.[1]?.sub_title}
                  </Stack>
                  <Stack
                    sx={{
                      width: '200px',
                      height: '20px',
                      fontSize: '16px',
                      fontFamily: 'ArialMT',
                      color: '#B5B5C3',
                      lineHeight: '21px',
                      overflow: 'hidden',
                    }}>
                    Hosted by: {podcastData[0]?.[1]?.hosts[0]?.toText()}
                  </Stack>
                </Stack>
                <audio controls color="black">
                  <source src={podcastData[0]?.[1]?.show_note} type="audio/ogg" />
                </audio>
              </Stack>
            </Stack>
          </Stack>

          <Divider variant="middle" sx={{ marginY: '30px', color: '#fff', borderColor: '#fff', opacity: 0.3 }} />

          <Stack
            sx={{
              fontSize: '28px',
              fontFamily: ' Arial-BoldMT, Arial',
              fontWeight: 'normal',
              color: '#FFFFFF',
              lineHeight: '38px',
              minHeight: '180px',
              overflow: 'hidden',
              zIndex: 9999,
            }}>
            {podcastData[0]?.[1]?.describe}
          </Stack>

          <Stack direction={'row'} sx={{ color: '#fff', paddingBottom: '30px' }}>
            <Stack
              sx={{
                width: '200px',
                height: '20px',
                fontSize: '16px',
                fontFamily: 'ArialMT',
                color: '#B5B5C3',
                lineHeight: '21px',
                overflow: 'hidden',
              }}>
              Guests :
              {podcastData[0]?.[1]?.guests
                ? podcastData[0]?.[1]?.guests?.map(item => {
                    return item.toText();
                  })
                : 'not yet'}
            </Stack>
          </Stack>
          <Stack direction={'row'} sx={{ color: '#fff' }}>
            <Tooltip title="View">
              <RemoveRedEyeIcon sx={{ marginRight: '10px' }}></RemoveRedEyeIcon>
            </Tooltip>
            {count}
          </Stack>
          <Stack direction={'row'} sx={{ color: '#fff', marginTop: '15px' }}>
            <Button variant="contained" href={podcastData[0]?.[1]?.show_note}>
              <FileDownloadIcon /> <span>Download Mp3 </span>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
