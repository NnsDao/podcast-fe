import { useUserStore } from '@/hooks/userStore';
import logo from '@/public/topBar/looncast.png';
import underline from '@/public/topBar/underline.png';
import { Box, Button, ButtonBase, Stack } from '@mui/material';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginWrapper from './Login/Login';
export default function PodTopBar() {
  const nav = ['Episodes', 'Discover'];
  let { pathname } = useLocation();
  const navigate = useNavigate();
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [userStore, dispatch] = useUserStore();
  const isLogin = userStore.isLogin;
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
          <a href="/">
            <img src={logo} alt="looncast" width={75} />
          </a>
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
      {!isLogin ? (
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
      ) : (
        <Stack
          onClick={() => toNagation('manage')}
          sx={{
            position: 'relative',
            width: '123px',
            height: '52px',
            background: 'linear-gradient( rgba(250, 217, 97, 1), rgba(247, 107, 28, 1)) ',
            zIndex: '1',
            borderRadius: '26px',
          }}>
          <Button
            sx={{
              position: 'absolute',
              top: '2.5px',
              left: '2.5px',
              color: '#fff',
              fontSize: '20px',
              fontWeight: 900,
              paddingY: '6px',
              paddingX: '20px',
              borderRadius: '25px',
              zIndex: '20',
              bgcolor: '#10062F',
              whiteSpace: 'nowrap',
              ':hover': {
                bgcolor: '#10062F',
              },
            }}>
            Manage
          </Button>
        </Stack>
      )}

      <LoginWrapper isShow={isShowDialog} closeDialog={() => setIsShowDialog(false)} />
    </Stack>
  );
}
