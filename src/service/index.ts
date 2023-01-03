import NDPActor from '@nnsdao/nnsdao-kit/dip20/types';
import { getActor } from '@nnsdao/nnsdao-kit/helper/agent';
import { _SERVICE as NIDActor } from '@nnsdao/nnsdao-kit/nid/types';
import PodcastManagerActor from '@nnsdao/nnsdao-kit/podcast-manager/types';
import { _SERVICE as PodcastActor } from '@nnsdao/nnsdao-kit/podcast/types';
import canister from './canister.config';

// podcast_manager
export const getPodcastManagerActor = async (needAuth?: boolean) =>
  getActor<PodcastManagerActor>({ needAuth, ...canister.podcastManage });
// podcast
export const getPodcastActor = async (needAuth?: boolean) => getActor<PodcastActor>({ needAuth, ...canister.podcast });

// nid
export const getNIDActor = async (needAuth?: boolean) => getActor<NIDActor>({ needAuth, ...canister.nid });

// ndp
export const getNDPActor = async (needAuth?: boolean) => getActor<NDPActor>({ needAuth, ...canister.ndp });
