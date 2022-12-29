import { Principal } from '@dfinity/principal';
import { composeQueryKeys } from '../../common/helper';

const module = 'podcastManage';
export const podcastManage = {
  all: composeQueryKeys([{ module }]),
  create_podcast_canister: () => composeQueryKeys(podcastManage.all, { scope: 'create_podcast_canister' }),
  deposit: (arg_0: Principal, arg_1: bigint) => composeQueryKeys(podcastManage.all, { arg_0, arg_1 }),
  get_address: () => composeQueryKeys(podcastManage.all, { scope: 'get_address' }),
  get_canister_status: (arg_0: Principal) => composeQueryKeys(podcastManage.all, { arg_0 }),
  get_podcast_canister: () => composeQueryKeys(podcastManage.all, { scope: 'get_podcast_canister' }),
  need_upgrade: (arg_0: Principal) => composeQueryKeys(podcastManage.all, { scope: 'need_upgrade' }),
  notify_upgrade: () => composeQueryKeys(podcastManage.all, { scope: 'notify_upgrade' }),
  upgrade_podcast: (arg_0: Principal) => composeQueryKeys(podcastManage.all, { scope: 'upgrade_podcast' }),
};
