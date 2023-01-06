import { useGet_social_link } from '@/api/podcast';
import { Avatar, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/esm/Unstable_Grid2';
import { SocialLink } from '@nnsdao/nnsdao-kit/src/podcast/types';
import React from 'react';
import { useParams } from 'react-router-dom';
import LoadingWrapper from '../../../../components/LoadingWrapper';

export default function List() {
  const { cid } = useParams();
  const [showType, setShowType] = React.useState('table');
  const List = LoadingWrapper(Card, () => useGet_social_link());

  return (
    <React.Fragment>
      <List></List>
    </React.Fragment>
  );

  function Card(props) {
    const data: SocialLink = props.data;

    const sours = {
      twitter: 'string',
      blog: 'string',
      instagram: 'string',
      email: 'string',
      distrikt: 'string',
      dmail: 'string',
      dscvr: 'string',
      telegram: 'string',
      github: 'string',
      openchat: 'string',
    };

    return (
      <Grid
        container
        my={{ sm: 2, md: 4 }}
        columns={showType == 'linear' ? { xs: 11, sm: 4, md: 4 } : undefined}
        spacing={{ sm: 2 }}
        alignItems="stretch">
        <Grid xs={11} sm={5} md={5}>
          <Card elevation={1} sx={{ height: '100%' }}>
            <Stack p={{ sm: 1, lg: 2 }} spacing={{ sm: 1 }} justifyContent="center" alignItems={'center'}>
              <Avatar sizes="medium"></Avatar>
              <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                twitter:{data?.twitter || ''}
              </Typography>
              <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                blog:{data?.blog || ''}
              </Typography>
              <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                instagram:{data?.instagram || ''}
              </Typography>
              <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                email:{data?.email}
              </Typography>
              <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                distrikt:{data?.distrikt || ''}
              </Typography>
              <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                dmail:{data?.dmail || ''}
              </Typography>
              <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                dscvr:{data?.dscvr}|| ''
              </Typography>
              <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                telegram:{data?.telegram || ''}
              </Typography>{' '}
              <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                github:{data?.github || ''}
              </Typography>{' '}
              <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                openchat:{data?.openchat || ''}
              </Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
