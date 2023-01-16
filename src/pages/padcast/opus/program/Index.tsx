import { useGet_podcast_list } from '@/api/podcast';
import { Avatar, Button, Card, Chip, Typography } from '@mui/material';
import Grid from '@mui/material/esm/Unstable_Grid2';
import { Box, Stack } from '@mui/system';
import { PodcastIterm } from '@nnsdao/nnsdao-kit/src/podcast/types';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingWrapper from '../../../../components/LoadingWrapper';
import UpdataButton from './UpdataButton';

export default function Program() {
  const [showType, setShowType] = React.useState('table');
  const List = LoadingWrapper(UserCard, () => useGet_podcast_list());
  return (
    <React.Fragment>
      <List></List>
    </React.Fragment>
  );

  function UserCard(props) {
    const navigator = useNavigate();
    const { principal } = useParams();
    const data: Array<[bigint, PodcastIterm]> = props.data;

    const toPodcastDetail = index => {
      navigator(`/podcastDetail/${principal}${index} `);
    };
    return (
      <Grid
        container
        my={{ sm: 2, md: 4 }}
        columns={showType == 'linear' ? { xs: 11, sm: 2, md: 3 } : undefined}
        spacing={{ sm: 2 }}
        alignItems="stretch">
        {data.map(item => {
          return (
            <Grid xs={12} sm={12} md={12} key={Number(item[0])}>
              <Card elevation={1} sx={{ height: '100%' }}>
                <Stack
                  spacing={2}
                  py="10px"
                  direction="row"
                  paddingX="50px"
                  justifyContent="space-between"
                  alignItems={'center'}>
                  <Stack>
                    <Avatar sx={{ width: 80, height: 80 }} src={item[1].cover_image}></Avatar>
                  </Stack>
                  <Stack>
                    <Stack width={'200px'} paddingBottom="10px">
                      <Stack>
                        <Typography
                          overflow="hidden"
                          variant="caption"
                          sx={{
                            fontFamily: 'Roboto',
                            fontWeight: 700,
                            fontSize: '22px',
                            lineHeight: '30px',
                            color: '#181C32',
                          }}>
                          {item[1].title}
                        </Typography>
                      </Stack>
                      <Stack>
                        <Typography
                          variant="caption"
                          overflow="hidden"
                          sx={{
                            fontFamily: 'Roboto',
                            fontWeight: 700,
                            fontSize: '18px',
                            lineHeight: '30px',
                            color: '#181C32',
                          }}>
                          {item[1].sub_title}
                        </Typography>
                      </Stack>
                    </Stack>
                    <audio controls>
                      <source src="http://music.163.com/song/media/outer/url?id=1446521008.mp3" type="audio/ogg" />
                    </audio>
                  </Stack>

                  <Stack padding={'5px'}>
                    <Stack>
                      <Stack direction="column" spacing={0.5}>
                        <Stack direction={'row'} spacing={0.5}>
                          {item[1].tag.map(tag => {
                            return <Chip key={tag} variant="outlined" label={tag} clickable></Chip>;
                          })}
                        </Stack>
                        <Stack direction={'row'} spacing={0.5}>
                          <Chip
                            color={item[1].status.toString() === 'false' ? 'warning' : 'success'}
                            variant="outlined"
                            label={item[1].status.toString() === 'false' ? 'Save only' : 'Publish'}></Chip>
                          <Chip
                            variant="outlined"
                            label={Object.keys(item[1].language)[0] || 'language'}
                            clickable></Chip>
                        </Stack>
                        <Stack direction={'row'} justifyContent="space-between" alignItems="center" paddingY={'5px'}>
                          <Box
                            sx={{
                              fontFamily: 'Roboto',
                              fontWeight: 700,
                              fontSize: '14px',
                              color: '#5E6278',
                              paddingRight: '10px',
                            }}>
                            {new Date(Number(item[1].create_at || 0)).toLocaleString()}
                          </Box>
                          <Box
                            sx={{
                              fontFamily: 'Roboto',
                              fontWeight: 500,
                              fontSize: '13px',
                              lineHeight: '15px',
                              color: '#B5B5C3',
                            }}>
                            Created At
                          </Box>
                        </Stack>
                        <Stack direction={'row'} justifyContent="space-between" alignItems="center" paddingY={'5px'}>
                          <Box
                            sx={{
                              fontFamily: 'Roboto',
                              fontWeight: 700,
                              fontSize: '14px',
                              color: '#5E6278',
                              paddingRight: '10px',
                            }}>
                            {new Date(Number(item[1].update_at || 0)).toLocaleString()}
                          </Box>
                          <Box
                            sx={{
                              fontFamily: 'Roboto',
                              fontWeight: 500,
                              fontSize: '13px',
                              lineHeight: '15px',
                              color: '#B5B5C3',
                            }}>
                            Update_at
                          </Box>
                        </Stack>
                      </Stack>
                    </Stack>

                    <Typography variant="body2" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                      Hosts: &nbsp; {item[1].hosts[0]?.toText() || ''}
                    </Typography>
                    {/* <Stack direction="column">
                      <Typography variant="body2" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                        link:{item[1].link}
                      </Typography>
                    </Stack> */}
                    {/* <Typography variant="body2" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                      guests:{item[1].guests || 'guests'}
                    </Typography> */}
                    {/* <Typography
                      variant="caption"
                      sx={{
                        fontFamily: 'Roboto',
                        fontWeight: 700,
                        fontSize: '18px',
                        lineHeight: '30px',
                        color: '#181C32',
                      }}>
                      describe:{item[1].describe}
                    </Typography> */}
                  </Stack>
                  <Stack direction="column">
                    <UpdataButton form={item}></UpdataButton>
                    <Button></Button>
                    <Button variant="outlined" onClick={() => toPodcastDetail(Number(item[0]))}>
                      View
                    </Button>
                  </Stack>
                </Stack>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  }
}
