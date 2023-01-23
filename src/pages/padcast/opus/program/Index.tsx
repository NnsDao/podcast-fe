import { useGet_podcast_list, useUpdate_podcast } from '@/api/podcast';
import { Avatar, Button, Card, Chip, Typography } from '@mui/material';
import Grid from '@mui/material/esm/Unstable_Grid2';
import { Box, Stack } from '@mui/system';
import { PodcastIterm } from '@nnsdao/nnsdao-kit/src/podcast/types';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingWrapper from '../../../../components/LoadingWrapper';
import ShowNodeButton from './ShowNodeButton';
import UpdataButton from './UpdataButton';

export default function Program() {
  const [showType, setShowType] = React.useState('table');
  const { principal } = useParams();

  const List = LoadingWrapper(UserCard, () => useGet_podcast_list(principal as string));
  return (
    <React.Fragment>
      <List></List>
    </React.Fragment>
  );

  function UserCard(props) {
    const navigator = useNavigate();
    const { principal } = useParams();
    const data: Array<[bigint, PodcastIterm]> = props.data;
    const [form, setFormField] = useState([]);
    const updateAction = useUpdate_podcast(principal as string);

    async function changeForm(item, e) {
      if (item[1].status.toString() === e.target.value) {
        return;
      }
      const arg1 = {};
      const arg2 = {};
      const params = {
        ...form,
        showNode: e.target.value,
      };
      console.log(params, 'params');

      // for (const key of Object.keys(params)) {
      //   if (!checkField(key, params[key])) {
      //     return;
      //   }
      // }
      const toastID = toast.loading('Getting Update Podcast...');
      try {
        // const data = await updateAction.mutateAsync({
        //   ...params,
        // });
        console.log(data);
        toast.success('update onSuccess');
      } catch (error) {
        console.error('err', error);
        toast.error('Failed update', { id: toastID });
      } finally {
        toast.dismiss(toastID);
      }
    }

    const toPodcastDetail = index => {
      navigator(`/podcastDetail/${principal}${index} `);
    };
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
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
                      <source src={item[1].show_note} type="audio/ogg" />
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
                  <Stack direction="column" spacing={2} width="100px">
                    <ShowNodeButton form={item}></ShowNodeButton>
                    <UpdataButton form={item}></UpdataButton>
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
