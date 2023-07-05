// import NdpService from '@/common/service/ndp';
import { login } from '@/common/helper';
import { useUserStore } from '@/hooks/userStore';
import plug from '@/public/logo/plug.png';
import stoic from '@/public/logo/stoic.png';
import { Stack } from '@mui/system';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import style from './Login.module.css';
type Prop = {
  isShow: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  closeDialog: Function;
};

export default function LoginWrapper(props: Prop) {
  const [userInfo, dispatch] = useUserStore();
  const navigate = useNavigate();

  async function loginWith(type: string) {
    if (userInfo.loginType == 'stoic' && type == 'stoic') return;
    if (userInfo.loginType == 'plug' && type == 'plug') return;
    let toastId = toast.loading('authorizing...');
    let res = await login(type);
    dispatch({
      type: 'login',
      data: { ...res },
    });
    props.closeDialog();
    toast.success('login success!', { id: toastId });
  }
  return (
    <>
      {props.isShow ? (
        <Stack
          sx={{ position: 'fixed', top: '200px', left: '450px', zIndex: '20' }}
          onClick={() => props.closeDialog()}>
          <div className={style.loginContentWrapper}>
            <span>{props.isShow}</span>
            <div className={style.connectWallet}>Connect Wallet</div>
            <div className={style.loginStoic} onClick={() => loginWith('stoic')}>
              <img src={stoic} alt="stoic" />
              <span>Stoic Identity</span>
            </div>
            <div className={style.loginOutside}>
              <div className={style.loginPlug} onClick={() => loginWith('plug')}>
                <img src={plug} alt="plug" />
                <span>Plug Identity</span>
              </div>
            </div>
          </div>
        </Stack>
      ) : null}
    </>
  );
}
