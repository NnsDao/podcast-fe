import { useGet_canister_status } from '@/api/podcast';
import { Principal } from '@dfinity/principal';
import { Avatar, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Stack } from '@mui/system';
import { CanisterStatusResponse } from '@nnsdao/nnsdao-kit/src/podcast/types';
import React from 'react';
import { useParams } from 'react-router-dom';
import LoadingWrapper from '../../../../components/LoadingWrapper';

export default function List() {
  const { principal } = useParams();
  const [showType, setShowType] = React.useState('table');
  //@ts-ignore
  const List = LoadingWrapper(Card, async () => useGet_canister_status(Principal.fromText(principal)));
  return (
    <React.Fragment>
      <List></List>
    </React.Fragment>
  );

  function Card(props) {
    console.log(props.text);
    const data: CanisterStatusResponse = props.data;

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
                status:{Object.keys(data?.status)}
              </Typography>
              <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                memory_size:{Number(data?.memory_size)}
              </Typography>
              <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                cycles:{Number(data?.cycles)}
              </Typography>
              <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                freezing_threshold:{Number(data?.settings.freezing_threshold)}
                controllers:{data.settings.controllers[0].toText()}
                memory_allocation :{Number(data?.settings.memory_allocation)}
                compute_allocation:{Number(data?.settings.compute_allocation)}
              </Typography>
              <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                idle_cycles_burned_per_day:{Number(data?.idle_cycles_burned_per_day)}
              </Typography>
              <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                module_hash:{data?.module_hash}
              </Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
