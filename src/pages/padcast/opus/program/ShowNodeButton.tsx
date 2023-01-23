import { useUpdate_podcast } from '@/api/podcast';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button, Fade, Menu, MenuItem } from '@mui/material';
import React from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

export default function SelectButton(props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { principal } = useParams();
  const open = Boolean(anchorEl);
  const updateAction = useUpdate_podcast(principal as string);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  function handleMenuItemClick(e, bool): void {
    if (props.form[1].status == bool) {
      handleClose();
      console.log('no change');
      return;
    } else {
      props.form[1].status = bool;
      props.form[1].update_at = BigInt(new Date().getTime());
      console.log('change');
      handleClose();
      confirm();
    }
  }
  async function confirm() {
    // for (const key of Object.keys(params)) {
    //   if (!checkField(key, params[key])) {
    //     return;
    //   }
    // }
    const toastID = toast.loading('Getting update podcast...');
    try {
      console.log(props.form[0], '111111111111111111111111');
      console.log('--------------------------------');
      debugger;
      //@ts-ignore
      const data = await updateAction.mutateAsync({ arg_0: Number(props.form[0]), arg_1: { ...props.form[1] } });
      console.log(data);
      handleClose();
      toast.success('update onSuccess');
    } catch (error) {
      console.error('err', error);
      handleClose();
      toast.error('Failed update' + `${error}`);
    } finally {
      handleClose();
      toast.dismiss(toastID);
    }
    return;
  }
  return (
    <React.Fragment>
      <Button
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          whiteSpace: 'nowrap',
        }}
        endIcon={<KeyboardArrowDownIcon />}
        variant="outlined"
        onClick={handleClick}>
        {props.form[1].status.toString() === 'false' ? 'Save only' : 'Publish'}
      </Button>

      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} TransitionComponent={Fade}>
        <MenuItem onClick={e => handleMenuItemClick(e, false)} sx={{ width: 122 }}>
          {'Save only'}
        </MenuItem>
        <MenuItem onClick={e => handleMenuItemClick(e, true)} sx={{ width: 122 }}>
          {'Publish'}
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
