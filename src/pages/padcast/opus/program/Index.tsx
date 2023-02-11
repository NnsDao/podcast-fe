import { useGet_podcast_list, useUpdate_podcast } from '@/api/podcast';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Avatar, Button, Card, Chip, Typography } from '@mui/material';
import Grid from '@mui/material/esm/Unstable_Grid2';
import Tab from '@mui/material/Tab';
import { Box, Stack } from '@mui/system';
import { PodcastIterm } from '@nnsdao/nnsdao-kit/src/podcast/types';
import React, { useEffect, useState } from 'react';
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

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      filterData(newValue);
      setValue(newValue);
    };

    const filterData = string => {
      if (string === '1') {
        return data;
      } else if (string === '2') {
        const filter = data.filter(item => {
          return item?.[1].status === true;
        });
        return filter;
      } else if (string === '3') {
        const filter = data.filter(item => {
          return item?.[1].status === false;
        });
        return filter;
      }
    };
    useEffect(() => {
      filterData(value);
    }, [data]);
    return (
      <Grid
        container
        my={{ sm: 2, md: 4 }}
        columns={showType == 'linear' ? { xs: 11, sm: 2, md: 3 } : undefined}
        spacing={{ sm: 2 }}
        alignItems="stretch">
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="ALL" value="1" />
                <Tab label="PUBLISHED" value="2" />
                <Tab label="DRAFT" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ paddingX: '0' }}>
              <SourceList data={filterData(value)}></SourceList>
            </TabPanel>
            <TabPanel value="2" sx={{ paddingX: '0' }}>
              <SourceList data={filterData(value)}></SourceList>
            </TabPanel>
            <TabPanel value="3" sx={{ paddingX: '0px' }}>
              <SourceList data={filterData(value)}></SourceList>
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
    );
  }
}
function SourceList(props) {
  const data = props.data;
  const navigator = useNavigate();
  const { principal } = useParams();
  const toPodcastDetail = index => {
    navigator(`/podcastDetail/${principal}${index} `);
  };
  return (
    <Box>
      {data?.map(item => {
        return (
          <Grid xs={12} sm={12} md={12} key={Number(item[0])}>
            <Card elevation={1} sx={{ height: '100%', padding: '20px 15px' }}>
              <Stack direction="row" paddingX="20px" justifyContent="space-between">
                <Stack spacing={2} direction="row" justifyContent="flex-start" alignItems={'center'}>
                  <Stack>
                    <Avatar sx={{ width: 100, height: 100 }} variant="rounded" src={item[1].cover_image}></Avatar>
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

                  {/* <Stack direction={'row'} justifyContent="space-between" alignItems="center" paddingY={'5px'}>
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
                      </Stack> */}
                  {/* <Typography variant="body2" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                      Hosts: &nbsp; {item[1].hosts[0]?.toText() || ''}
                    </Typography> */}
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
                <Stack direction="column" marginLeft={'-100px'} justifyContent="center" spacing={2}>
                  <Stack direction="row" spacing={1}>
                    <Stack direction={'row'} spacing={0.5}>
                      {item[1].tag.map(tag => {
                        return <Chip key={tag} color="info" variant="outlined" label={tag} clickable></Chip>;
                      })}
                    </Stack>
                    <Stack direction={'row'} spacing={0.5}>
                      <Chip label={Object.keys(item[1].language)[0] || 'language'} clickable></Chip>
                    </Stack>
                  </Stack>
                  <Stack direction={'row'} justifyContent="space-between" alignItems="center" paddingY={'15px'}>
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
    </Box>
  );
}
