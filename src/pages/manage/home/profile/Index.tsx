import { useGet_podcast_base_info } from '@/api/podcast';
import LoadingWrapper from '@/components/LoadingWrapper';
import { Avatar, Card, Dialog, DialogTitle, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { Stack } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CreactBaseInfo from './CreactBaseInfo';

export default function Profile(props) {
  const navigate = useNavigate();
  const cid = props.principal.toText();
  console.log(cid, 'principal');

  const getData = useGet_podcast_base_info(cid);
  const List = LoadingWrapper(CardWrapper, () => useGet_podcast_base_info(cid));
  return <List principal={props.principal}></List>;
}
export function CardWrapper(props) {
  const navigate = useNavigate();
  const { data } = props;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const toPodcast = () => {
    if (data.name) {
      navigate(`/Podcast/${props.principal.toText()}/Opus`, { replace: true });
    } else {
      handleClickOpen();
    }
  };
  console.log(props, 'props');

  // useEffect(() => {
  //   if (data) {
  //     console.log(data, props.principal.toText(), 'getData.data || ${}');
  //   }
  // }, [props.principal]);
  return (
    <Card>
      <Stack
        direction="column"
        justifyContent={'center'}
        alignContent={'center'}
        spacing={1}
        onClick={() => toPodcast()}
        sx={{
          height: '210px',
          border: '1px dashed grey',
          padding: '20px 40px',
          cursor: 'pointer',
          textAlign: 'center',
          ':hover': {
            borderColor: '#1976d2',
            color: '#1976d2',
            cursor: 'pointer',
          },
        }}>
        {data.name ? (
          <Information data={data}></Information>
        ) : (
          <SetBaseInfo
            principal={props.principal}
            open={open}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}></SetBaseInfo>
        )}
        <Stack className="pt-10 hover:text-sky-500">{props.principal.toText()}</Stack>
      </Stack>
    </Card>
  );
}
export function SetBaseInfo(props) {
  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <Stack onClick={props.handleClickOpen}>
      Click to set base info
      <Dialog open={props.open} maxWidth={'xl'} TransitionComponent={Transition} onClose={props.handleClose}>
        <DialogTitle id="alert-dialog-title" fontWeight={800}>
          {' Creating a podcast base info'}
        </DialogTitle>
        <CreactBaseInfo principal={props.principal}></CreactBaseInfo>
      </Dialog>
    </Stack>
  );
}
export function Information(props) {
  return (
    <Stack>
      <Stack direction="row" justifyContent={'center'} alignContent={'center'} textAlign="center">
        <Avatar src={props.data?.icon} sx={{ width: 50, height: 50 }}></Avatar>
      </Stack>
      <Typography variant="h5">{props.data?.name}</Typography>
      <Typography variant="body1" fontWeight={600}>
        {props.data?.describe}
      </Typography>
    </Stack>
  );
}
