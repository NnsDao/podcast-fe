import { useGet_canister_status } from '@/api/podcast';
import { Principal } from '@dfinity/principal';
import { Avatar } from '@mui/material';
import Grid from '@mui/material/esm/Unstable_Grid2';
import { Stack } from '@mui/system';
import React from 'react';
import { useParams } from 'react-router-dom';
import LoadingWrapper from '../../../../components/LoadingWrapper';

export default function List() {
  const { principal } = useParams();
  const [showType, setShowType] = React.useState('table');
  //@ts-ignore
  const List = LoadingWrapper(Card, () => useGet_canister_status(Principal.fromText(principal)));

  return (
    <React.Fragment>
      <List></List>
    </React.Fragment>
  );

  function Card(props) {
    const data = props.data;
    console.log(data, 'data');

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
              {/* <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                status:{Object.keys(data[0]?.status)}
              </Typography> */}
              {/* <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                memory_size:{Number(props.data[0]?.memory_size)}
              </Typography>
              <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                cycles:{Number(props.data[0]?.cycles)}
              </Typography>
              <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                freezing_threshold:{Number(props.data[0]?.settings.freezing_threshold)}
                controllers:{props.data[0].settings.controllers[0].toText()}
                memory_allocation :{Number(props.data[0]?.settings.memory_allocation)}
                compute_allocation:{Number(props.data[0]?.settings.compute_allocation)}
              </Typography>
              <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                idle_cycles_burned_per_day:{Number(props.data[0]?.idle_cycles_burned_per_day)}
              </Typography>
              <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'} overflow="hidden">
                module_hash:{props.data[0]?.module_hash}
              </Typography> */}
            </Stack>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
