import { Avatar } from '@mui/material';
import { Stack } from '@mui/system';
import { useNavigate } from 'react-router-dom';

import Style from './index.module.css';

export default function EpisodeCard(props) {
  const navigator = useNavigate();
  const toPodcastDetail = index => {
    navigator(`/podcastDetail/${props?.data['cid']}${index} `);
  };

  return (
    <Stack className={Style.recentWrapper1} direction="column">
      <Stack className={Style.recentWrapper1shadow}></Stack>
      <Stack className={Style.recentWrapper1Above}>
        <Stack direction={'row'} onClick={() => toPodcastDetail(Number(props?.data[0]))}>
          <img src={props?.data[1]?.cover_image} alt="cover_image" />
          <Stack direction="column">
            <Stack className={Style.recentWrapper1Title}>{props?.data[1]?.title}</Stack>
            <Stack className={Style.recentWrapper1Info}>{props?.data[1]?.sub_title}</Stack>
            <Stack className={Style.recentWrapper1Line}></Stack>
            <Stack className={Style.recentWrapper1Other}>{props?.data[1]?.describe}</Stack>
          </Stack>
        </Stack>
        <Stack direction={'row'} justifyContent="space-between" alignContent={'center'} paddingTop="20px">
          <Stack direction={'row'}>
            {props?.data[1]?.tag.map((item, index) => (
              <Stack key={index} className={Style.recentWrapper1Tag}>
                {item}
              </Stack>
            ))}
          </Stack>
          <Stack direction={'row'} alignItems="center">
            <Stack className={Style.recentWrapper1Hosted}>Hosted by:</Stack>
            <Stack direction={'row'}>
              <Avatar src={props?.data[1]?.cover_image} alt={props?.data[1]?.title} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
