import { _SERVICE as DaoManagerActor } from '@nnsdao/nnsdao-kit/dao_manager/types';
import NDPActor from '@nnsdao/nnsdao-kit/dip20/types';
import { getActor } from '@nnsdao/nnsdao-kit/helper/agent';
import { _SERVICE as NIDActor } from '@nnsdao/nnsdao-kit/nid/types';
import { _SERVICE as nnsdaoActor } from '@nnsdao/nnsdao-kit/nnsdao/types';
import canister from './canister.config';

// dao_manager
export const getDaoManagerActor = async (needAuth?: boolean) =>
  getActor<DaoManagerActor>({ needAuth, ...canister.dao_manager });

// dao
export const getNnsdaoActor = async (cid: string, needAuth?: boolean) =>
  getActor<nnsdaoActor>({ needAuth, ...canister.nnsdao, cid });

// nid
export const getNIDActor = async (needAuth?: boolean) => getActor<NIDActor>({ needAuth, ...canister.nid });

// ndp
export const getNDPActor = async (needAuth?: boolean) => getActor<NDPActor>({ needAuth, ...canister.ndp });
