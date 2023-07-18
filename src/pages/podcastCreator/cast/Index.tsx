import { get_podcast_list, get_social_link } from '@/api/podcast';
import GitHubIcon from '@mui/icons-material/GitHub';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Avatar, Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { Stack } from '@mui/system';
import { PodcastIterm, SocialLink } from '@nnsdao/nnsdao-kit/src/podcast/types';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import Style from './index.module.css';

export default function Cast() {
  const navigator = useNavigate();
  const toPodcastDetail = (cid, index) => {
    navigator(`/podcastDetail/${cid}${index} `);
  };

  const { principal } = useParams();
  const [podcastData, setData] = useState<Array<[bigint, PodcastIterm]>>([]);
  const [podcastSocialData, setScoailData] = useState<Array<[SocialLink, any]>>([]);

  console.log(podcastSocialData, 292929);

  const loadData = async () => {
    const toastID = toast.loading('Loading Data...');
    const creatorData = (await get_podcast_list(principal as string)) || [];
    const subList = (await get_social_link(principal as string)) || [];

    try {
      if (creatorData) {
        setData(creatorData);
      }
      if (subList) {
        //@ts-ignore
        setScoailData(subList);
      }
    } catch {
      console.log('err');
    } finally {
      toast.dismiss(toastID);
    }
  };

  console.log(podcastData, 'PodcastCreator');

  useEffect(() => {
    if (principal) {
      loadData();
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
      <Stack direction={'row'} justifyContent="space-between" position="relative">
        <Stack paddingRight={'50px'}>
          <img src={podcastData[0]?.[1]?.cover_image} alt="" width="150px" height="150px" />
          <Typography
            variant="caption"
            overflow="hidden"
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: '34px',
              lineHeight: '30px',
              marginTop: '10px',
              color: '#fff',
            }}>
            {podcastData[0]?.[1]?.title}
          </Typography>
          <Stack>
            <Grid item xs={12} md={6} sx={{ color: '#fff' }}>
              <Typography sx={{ mt: 4, mb: 2, color: '#fff' }} variant="h6" component="div">
                SUBSCRIBE
              </Typography>
              <List>
                <ListItem>
                  <Link href={podcastSocialData['blog']}>
                    <RssFeedIcon sx={{ color: '#4bb2fe', mr: 1 }} />
                  </Link>
                  <ListItemText primary="RSS" />
                </ListItem>

                <ListItem>
                  <Link href={podcastSocialData['twitter']}>
                    {' '}
                    <TwitterIcon sx={{ color: '#4bb2fe', mr: 1 }} />{' '}
                  </Link>
                  <ListItemText primary="Twitter" />
                </ListItem>
                <ListItem>
                  <Link href={podcastSocialData['github']}>
                    <GitHubIcon sx={{ color: '#4bb2fe', mr: 1 }} />
                  </Link>
                  <ListItemText primary="Github" />
                </ListItem>
                <ListItem>
                  <Link href={podcastSocialData['telegram']}>
                    <TelegramIcon sx={{ color: '#4bb2fe', mr: 1 }} />
                  </Link>
                  <ListItemText primary="Telegram" />
                </ListItem>
                <ListItem>
                  <Link href={podcastSocialData['telegram']}>
                    <TelegramIcon sx={{ color: '#4bb2fe', mr: 1 }} />
                  </Link>
                  <ListItemText primary="Telegram" />
                </ListItem>
              </List>
            </Grid>
          </Stack>
        </Stack>
        <Divider
          sx={{ background: '#fff', width: '5px', height: '75px', marginRight: '50px' }}
          orientation="vertical"
          flexItem
        />
        <Stack direction={'column'}>
          <List sx={{ width: '100%' }} className={Style.recentWrapper1Above}>
            {podcastData.map((data, index) => (
              <ListItem
                alignItems="flex-start"
                onClick={() => toPodcastDetail(data['cid'], Number(data[0]))}
                key={index}
                className={Style.recentWrapperContent}>
                <ListItemAvatar>
                  <Avatar
                    alt={data[1]?.title}
                    sx={{ width: '125px', height: '125px', marginRight: '30px' }}
                    src={data[1]?.cover_image}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={data[1]?.title}
                  sx={{ color: '#fff', width: '540px' }}
                  secondary={
                    <Typography sx={{ display: 'inline', opacity: '0.6' }} component="span" variant="body2">
                      {'EP' +
                        Number(data[0]) +
                        '   ' +
                        dayjs.unix(Number(data[1]?.create_at) / 1000).format('MMM-DD-YYYY')}
                      <br />
                      {data[1]?.describe}
                      <br />
                      {data[1]?.tag.map((item, index) => (
                        <span key={index} className={Style.recentWrapper1Tag}>
                          #{item}
                        </span>
                      ))}
                      <Divider
                        sx={{ background: '#fff', opacity: '0.4', margin: '5px' }}
                        variant="middle"
                        component="li"
                      />
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Stack>
      </Stack>
    </Stack>
  );
}
