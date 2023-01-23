import { useCreate_podcast } from '@/api/podcast';
import { useUserStore } from '@/hooks/userStore';
import { Chip } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Stack } from '@mui/system';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import Fragment from '../components/Fragment';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UpdataButton(props) {
  const [open, setOpen] = React.useState(false);
  const { principal } = useParams();
  const createAction = useCreate_podcast(principal as string);

  const [userStore, dispatch] = useUserStore();
  const principalId = userStore.principalId;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Stack onClick={handleClickOpen}>
        <Chip variant="outlined" label={'update'} clickable></Chip>
      </Stack>
      <Dialog open={open} maxWidth={'xl'} TransitionComponent={Transition} onClose={() => handleClose()}>
        <Fragment close={() => handleClose()} form={props.form}></Fragment>
      </Dialog>
    </div>
  );
}
