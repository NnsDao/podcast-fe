import { idlFactory as ndp_IDL } from '@nnsdao/nnsdao-kit/dip20/index';
import { idlFactory as nid_IDL } from '@nnsdao/nnsdao-kit/nid/index';
import { idlFactory as podcast_manage_IDL } from '@nnsdao/nnsdao-kit/podcast-manager/index';
import { idlFactory as podcast_IDL } from '@nnsdao/nnsdao-kit/podcast/index';

export const isTestCanister = import.meta.env.__APP__canister_type === 'test';
export { podcast_manage_IDL };
export { podcast_IDL };
export const canister = {
  podcastManage: {
    cid: isTestCanister ? 'bmay3-iaaaa-aaaah-abv6q-cai' : 'bmay3-iaaaa-aaaah-abv6q-cai',
    idl: podcast_manage_IDL,
  },
  podcast: {
    cid: 'ogcxa-taaaa-aaaah-abyvq-cai',
    idl: podcast_IDL,
  },
  nid: {
    cid: 'vgqnj-miaaa-aaaal-qaapa-cai',
    idl: nid_IDL,
  },
  ndp: {
    cid: 'vgqnj-miaaa-aaaal-qaapa-cai',
    idl: ndp_IDL,
  },
};

export default canister;

export const getTotalCanisterIdList = (): string[] => {
  return Object.values(canister).map(item => item.cid);
};

export function collectUsedCanisterId() {
  //
  // add none  project canister id to here
  //
  const list: string[] = [];
  return list.concat(getTotalCanisterIdList());
}
