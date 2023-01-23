import { useGet_canister_status } from '@/api/podcast';
import { Principal } from '@dfinity/principal';
import Grid from '@mui/material/esm/Unstable_Grid2';
import React from 'react';
import { useParams } from 'react-router-dom';
import LoadingWrapper from '../../../../components/LoadingWrapper';
import Item from './Item';

export default function List() {
  const { principal } = useParams();
  const [showType, setShowType] = React.useState('table');
  const SubList = LoadingWrapper(CardWrapper, () =>
    //@ts-ignore
    useGet_canister_status(principal as string, Principal.fromText(principal))
  );

  return (
    <React.Fragment>
      <SubList></SubList>
    </React.Fragment>
  );
  function CardWrapper(props) {
    const data = props.data;
    console.log(data, 'data');

    return (
      <Grid container sm={12} lg={12} my={{ sm: 2, md: 4 }} spacing={{ sm: 2 }} alignItems="center">
        <Item text={'Status'} value={Object.keys(data[0]?.status)}></Item>
        <Item text={'Memory_size'} value={Number(props.data[0]?.memory_size)}></Item>
        <Item text={'Cycles'} value={Number(props.data[0]?.cycles)}></Item>
        <Item text={'Freezing_threshold'} value={Number(props.data[0]?.settings.freezing_threshold)}></Item>
        <Item text={'Controllers'} value={props.data[0]?.settings.controllers}></Item>
        <Item text={'Memory_allocation'} value={Number(props.data[0]?.settings.memory_allocation)}></Item>
        <Item text={'Compute_allocation'} value={Number(props.data[0]?.settings.compute_allocation)}></Item>
        <Item text={'Idle_cycles_burned_per_day'} value={Number(props.data[0]?.idle_cycles_burned_per_day)}></Item>
        <Item text={'Module_hash'} value={Number(props.data[0]?.module_hash)}></Item>
      </Grid>
    );
  }
}
