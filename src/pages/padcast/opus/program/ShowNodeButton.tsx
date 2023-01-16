import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button, Fade, Menu, MenuItem } from '@mui/material';
import React from 'react';
import toast from 'react-hot-toast';

export default function SelectButton(props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

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
      console.log('change');
      confirm();
      handleClose();
    }
  }
  async function confirm() {
    const params = {
      ...props.form,
    };

    // for (const key of Object.keys(params)) {
    //   if (!checkField(key, params[key])) {
    //     return;
    //   }
    // }
    const toastID = toast.loading('Getting Create Podcast...');
    try {
      // const data = await updateAction.mutateAsync({props.form[0],
      //   ...params,
      // });
      // console.log(data);
      toast.success('update onSuccess');
    } catch (error) {
      console.error('err', error);
      toast.error('Failed update', { id: toastID });
    } finally {
      toast.dismiss(toastID);
    }
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
