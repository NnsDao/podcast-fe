import { useCreate_podcast_canister } from '@/api/manage';
import LoginWrapper from '@/components/Login/Login';
import { useUserStore } from '@/hooks/userStore';
import { Avatar, Button, Divider, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
export default function Home() {
  // const [siteData, setSiteData] = useState();
  const createAction = useCreate_podcast_canister();
  const [userStore, dispatch] = useUserStore();
  const isLogin = userStore.isLogin;
  const [isShowDialog, setIsShowDialog] = useState(false);

  const newSite = () => {
    console.log(1);
    //@ts-ignore
    createAction.mutate(null, {
      onSuccess(data, variables) {
        toast.success('Joined Successfully!');
      },
      onError(error) {
        toast.error(String(error));
      },
    });
  };
  // async function newSite() {
  //   if (!isLogin) {
  //     toast.error('Login first please!');
  //     setIsShowDialog(true);
  //     return;
  //   }

  //   const toastID = toast.loading('Getting Payment Information...');
  //   try {
  //     const address = await get_address().catch(() => null);
  //     const amount = BigInt(0.5 * 1e8);
  //     if (!address) {
  //       toast.error(`Failed address`);
  //       return;
  //     }
  //     toast.loading('Paying...', { id: toastID });
  //     // transfer
  //     const blockHeight = await payWithICP(amount, address);
  //     console.log('blockHeight', blockHeight);
  //     // params.block_height = BigInt(blockHeight);
  //     // create
  //     toast.loading('Initialize Canister...', { id: toastID });
  //     //@ts-ignore
  //     createPodcast.mutate(null, {
  //       onSuccess(data, variables) {
  //         toast.success('Create Podcast Successfully!');
  //       },
  //       onError(error) {
  //         toast.error(String(error));
  //       },
  //     });

  //     // await updateAction.mutateAsync({
  //     //   ...params,
  //     //   canister_id: data,
  //     //   created_at: BigInt(0),
  //     // });
  //     // // auto join current dao

  //     // await joinAction.mutateAsync({
  //     //   cid: data,
  //     //   nickname: userStore.nickname,
  //     //   social: [],
  //     //   intro: userStore.intro,
  //     //   avatar: userStore.avatar,
  //     // });
  //     // setTimeout(() => {
  //     //   navigator(`/dao/${data}`);
  //     // }, 0);
  //   } catch (error) {
  //     console.error('err', error);
  //     toast.error('Failed create', { id: toastID });
  //   } finally {
  //     toast.dismiss(toastID);
  //   }
  // }
  useEffect(() => {
    // getSiteData();
  }, []);
  return (
    <Stack className="full" sx={{ width: '100%' }}>
      <Stack direction={'row'} justifyContent="space-between" alignItems={'center'} className="py-8  items-center">
        <Stack sx={{ fontWeight: '900', fontSize: '22px' }}>Home</Stack>
        <Button variant="outlined" color="secondary" onClick={() => newSite()}>
          + New site
        </Button>
      </Stack>
      <Divider variant="middle" sx={{ marginY: '30px' }} />
      <Stack direction={'row'} justifyContent="start" sx={{ padding: '10px' }}>
        <Stack
          direction="column"
          justifyContent={'center'}
          alignContent={'center'}
          sx={{
            border: '1px dashed grey',
            width: '200px',
            height: '130px',
            marginRight: '10px',
            cursor: 'pointer',
            textAlign: 'center',
            ':hover': {
              borderColor: '#1976d2',
              color: '#1976d2',
              cursor: 'pointer',
            },
          }}>
          <Stack direction="row" justifyContent={'center'} alignContent={'center'}>
            <Avatar sx={{ width: 50, height: 50 }}></Avatar>
          </Stack>
          <Stack className="pt-10 hover:text-sky-500">name</Stack>
        </Stack>
      </Stack>
      <LoginWrapper isShow={isShowDialog} closeDialog={() => setIsShowDialog(false)} />
    </Stack>
  );
}
