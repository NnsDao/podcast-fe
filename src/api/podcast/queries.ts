import { Principal } from '@dfinity/principal';
import { PodcastIterm, SetBaseInfoRes, SocialLink } from '@nnsdao/nnsdao-kit/src/podcast/types';
import { composeQueryKeys } from '../../common/helper';
// 'add_owner' : (arg_0: Principal) => Promise<undefined>,
// 'change_admin' : (arg_0: Principal) => Promise<undefined>,
// 'create_base_info' : (arg_0: SetBaseInfoRes) => Promise<undefined>,
// 'create_podcast' : (arg_0: PodcastIterm) => Promise<undefined>,
// 'delete_owner' : (arg_0: Principal) => Promise<undefined>,
// 'deposit' : (arg_0: Principal, arg_1: bigint) => Promise<Result>,
// 'get_admin' : () => Promise<[] | [Principal]>,
// 'get_canister_status' : (arg_0: Principal) => Promise<Result_1>,
// 'get_owner' : () => Promise<Array<Principal>>,
// 'get_podcast' : (arg_0: bigint) => Promise<[] | [PodcastIterm]>,
// 'get_podcast_base_info' : () => Promise<Info>,
// 'get_podcast_list' : () => Promise<Array<[bigint, PodcastIterm]>>,
// 'get_social_link' : () => Promise<SocialLink>,
// 'set_social_link' : (arg_0: SocialLink) => Promise<undefined>,
// 'update_base_info' : (arg_0: SetBaseInfoRes) => Promise<undefined>,
// 'update_podcast' : (arg_0: bigint, arg_1: PodcastIterm) => Promise<Result_2>,
const module = 'podcast';
export const podcast = {
  all: composeQueryKeys([{ module }]),
  add_owner: (cid: string, arg_0: Principal) => composeQueryKeys(podcast.all, { scope: 'add_owner', cid, arg_0 }),
  change_admin: (cid: string, arg_0: Principal) => composeQueryKeys(podcast.all, { scope: 'change_admin', cid, arg_0 }),
  create_base_info: (cid: string, arg_0: SetBaseInfoRes) =>
    composeQueryKeys(podcast.all, { scope: 'create_base_info', cid, arg_0 }),
  create_podcast: (cid: string, arg_0: PodcastIterm) =>
    composeQueryKeys(podcast.all, { scope: 'create_podcast', cid, arg_0 }),
  delete_owner: (cid: string, arg_0: Principal) => composeQueryKeys(podcast.all, { scope: 'deposit', cid, arg_0 }),
  deposit: (cid: string, arg_0: Principal, arg_1: bigint) =>
    composeQueryKeys(podcast.all, { scope: 'deposit', cid, arg_0, arg_1 }),
  get_admin: (cid: string) => composeQueryKeys(podcast.all, { scope: 'get_admin', cid }),
  get_canister_status: (cid: string, arg_0: Principal) =>
    composeQueryKeys(podcast.all, { scope: 'get_canister_status', cid, arg_0 }),
  get_owner: (cid: string) => composeQueryKeys(podcast.all, { scope: 'get_owner', cid }),
  get_podcast: (cid: string, arg_0: bigint) => composeQueryKeys(podcast.all, { scope: 'get_podcast', cid, arg_0 }),
  get_podcast_base_info: (cid: string) => composeQueryKeys(podcast.all, { scope: 'get_podcast_base_info', cid }),
  get_podcast_list: (cid: string) => composeQueryKeys(podcast.all, { scope: 'get_podcast_list', cid }),
  get_social_link: (cid: string) => composeQueryKeys(podcast.all, { scope: 'get_social_link', cid }),
  set_social_link: (cid: string, arg_0: SocialLink) =>
    composeQueryKeys(podcast.all, { scope: 'set_social_link', cid, arg_0 }),
  update_base_info: (cid: string, arg_0: SetBaseInfoRes) =>
    composeQueryKeys(podcast.all, { scope: 'update_base_info', cid, arg_0 }),
  update_podcast: (cid: string, arg_0: bigint, arg_1: PodcastIterm) =>
    composeQueryKeys(podcast.all, { scope: 'update_podcast', cid, arg_0, arg_1 }),
};
