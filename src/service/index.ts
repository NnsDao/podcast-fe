import NDPActor from '@nnsdao/nnsdao-kit/dip20/types';
import { getActor } from '@nnsdao/nnsdao-kit/helper/agent';
import { _SERVICE as NIDActor } from '@nnsdao/nnsdao-kit/nid/types';
import PodcastManagerActor from '@nnsdao/nnsdao-kit/podcast-manager/types';
import canister from './canister.config';

// dao_manager
export const getPodcastManagerActor = async (needAuth?: boolean) =>
  getActor<PodcastManagerActor>({ needAuth, ...canister.podcastManage });

// nid
export const getNIDActor = async (needAuth?: boolean) => getActor<NIDActor>({ needAuth, ...canister.nid });

// ndp
export const getNDPActor = async (needAuth?: boolean) => getActor<NDPActor>({ needAuth, ...canister.ndp });
