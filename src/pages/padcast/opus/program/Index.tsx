import { useGet_podcast_list } from '@/api/podcast';
import { Avatar, Card, Typography } from '@mui/material';
import Grid from '@mui/material/esm/Unstable_Grid2';
import { Stack } from '@mui/system';
import { PodcastIterm } from '@nnsdao/nnsdao-kit/src/podcast/types';
import React from 'react';
import { useParams } from 'react-router-dom';
import LoadingWrapper from '../../../../components/LoadingWrapper';

export default function Program() {
  const { cid } = useParams();
  const [showType, setShowType] = React.useState('table');
  const List = LoadingWrapper(UserCard, () => useGet_podcast_list());
  return (
    <React.Fragment>
      <List></List>
    </React.Fragment>
  );

  function UserCard(props) {
    const data: Array<[bigint, PodcastIterm]> = props.data;
    console.log(data, '111111111');

    const soure = {
      tag: ['web3', 'c1'],
      categories: '',
      status: true,
      describe: 'describe',
      title: 'title',
      hosts: [],
      cover_image: 'string',
      link: 'string',
      create_at: 'bigint',
      language: 'Language',
      update_at: 'bigint',
      show_note: 'string',
      guests: [],
      sub_title: 'string',
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
                <Stack py="10px" direction="row" justifyContent="center" alignItems={'center'}>
                  <Stack>
                    <Avatar sx={{ width: 80, height: 80 }} src={item[1].cover_image}></Avatar>
                  </Stack>
                  <Stack>
                    <Stack>
                      <Stack direction="row" spacing={4}>
                        <Stack>
                          <Typography variant="body2" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                            title:{item[1].title}
                          </Typography>
                          <Typography variant="body2" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                            sub_title:{item[1].sub_title}
                          </Typography>
                        </Stack>
                        <Stack>
                          <Typography variant="body2" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                            tag:{item[1].tag}
                          </Typography>
                          <Typography variant="body2" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                            describe:{item[1].categories.Default}
                          </Typography>
                        </Stack>

                        <Typography variant="body2" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                          status:{item[1].status}
                        </Typography>
                        <Typography variant="body2" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                          hosts:{item[1].hosts[0]?.toText() || ''}
                        </Typography>
                      </Stack>

                      <Typography variant="body2" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                        link:{item[1].link}
                      </Typography>
                      <Typography variant="body2" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                        create_at:{Number(item[1].create_at)}
                      </Typography>
                      <Typography variant="body2" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                        {/* language:{item[1].language ||'language'} */}
                      </Typography>
                      <Typography variant="body2" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                        show_note:{Number(item[1].show_note)}
                      </Typography>
                      <Typography variant="body2" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                        {/* guests:{item[1].guests.toText() || 'guests'} */}
                      </Typography>
                    </Stack>
                    <Stack>
                      <audio controls>
                        <source src="http://music.163.com/song/media/outer/url?id=1446521008.mp3" type="audio/ogg" />
                      </audio>
                    </Stack>
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
