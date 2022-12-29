import logo from '@/public/topBar/logo.png';
import logoText from '@/public/topBar/logoText.png';
import underline from '@/public/topBar/underline.png';
import { Avatar, Box, ButtonBase, Stack } from '@mui/material';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginWrapper from './Login/Login';
export default function TopBar() {
  const nav = ['Episodes', 'About', 'Blog', 'More'];
  let { pathname } = useLocation();
  const navigate = useNavigate();
  const [isShowDialog, setIsShowDialog] = useState(false);

  const formatPathName = () => {
    if (pathname === '/' || pathname === '') {
      pathname = '/Episodes';
    }
    return pathname.substr(1);
  };
  const toNagation = router => {
    navigate(`${router}`);
  };
  const changeDialogShow = (bool: boolean | ((prevState: boolean) => boolean)) => {
    setIsShowDialog(bool);
  };
  return (
    <Stack width={'80%'} direction={'row'} justifyContent="space-between" alignItems={'center'}>
      <Stack direction={'row'} alignItems={'center'}>
        <Stack direction={'column'} alignItems={'center'} paddingTop="24px" paddingBottom="10px" paddingRight="100px">
          <Avatar src={logo} variant="square" sizes="55px" />
          <img src={logoText} alt="" sizes="22px" />
        </Stack>
        <Stack direction={'row'}>
          {nav.map(item => (
            <ButtonBase
              onClick={() => toNagation(item)}
              key={item}
              sx={{
                paddingX: '15px',
                paddingY: '10px',
                marginX: '30px',
                fontSize: '16px',
                fontWeight: '900',
                color: '#FFFFFF',
                lineHeight: '23px',
              }}>
              {item}
              {formatPathName() == item ? (
                <Stack
                  sx={{
                    position: 'absolute',
                    bottom: '-5px',
                    left: '1px',
                    width: '100%',
                  }}>
                  <img src={underline} alt="" />
                </Stack>
              ) : null}
            </ButtonBase>
          ))}
        </Stack>
      </Stack>
      <ButtonBase>
        <Box
          onClick={() => changeDialogShow(true)}
          sx={{
            bgcolor: '#D74EE9',
            borderRadius: '27px',
            fontSize: '18px',
            fontWeight: 900,
            color: '#FFFFFF',
            width: '163px',
            height: '54px',
            textAlign: 'center',
            lineHeight: '54px',
            zIndex: '2',
          }}>
          login
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '3px',
            left: '4px',
            width: '163px',
            height: '54px',
            bgcolor: '#FFFFFF',
            borderRadius: '27px',
            zIndex: '1',
          }}></Box>
      </ButtonBase>
      <LoginWrapper isShow={isShowDialog} closeDialog={() => setIsShowDialog(false)} />
    </Stack>
  );
}
