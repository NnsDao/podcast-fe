import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getPodcastManagerActor } from '../../service';
// create_podcast_canister: () => Promise<Result>;
// deposit: (arg_0: Principal, arg_1: bigint) => Promise<Result>;
// get_address: () => Promise<string>;
// get_canister_status: (arg_0: Principal) => Promise<Result_1>;
// get_podcast_canister: () => Promise<Array<Principal>>;
// need_upgrade: (arg_0: Principal) => Promise<boolean>;
// notify_upgrade: () => Promise<undefined>;
// upgrade_podcast: (arg_0: Principal) => Promise<Result>;

export const get_create_podcast_canister = async () => {
  const actor = await getPodcastManagerActor(true);
  const res = await actor.create_podcast_canister();
  console.log('get_create_podcast_canister', res);
  if ('Ok' in res) {
    return res.Ok;
  }
  return Promise.reject(null);
};
export const get_deposit = async (arg_0, arg_1) => {
  const actor = await getPodcastManagerActor(true);
  const res = await actor.deposit(arg_0, arg_1);
  console.log('deposit', res);
  if ('Ok' in res) {
    return res.Ok;
  }
  return Promise.reject(null);
};
export const get_address = async () => {
  const actor = await getPodcastManagerActor(true);
  const res = await actor.get_address();
  console.log('get_address', res);
  if (res) {
    return res;
  }
  return Promise.reject(null);
};
export const get_canister_status = async arg1 => {
  const actor = await getPodcastManagerActor(true);
  const res = await actor.get_canister_status(arg1);
  console.log('get_canister_status', res);
  if ('Ok' in res) {
    return res.Ok;
  }
  return Promise.reject(null);
};
export const get_podcast_canister = async () => {
  const actor = await getPodcastManagerActor(true);
  const res = await actor.create_podcast_canister();
  console.log('create_podcast_canisterl', res);
  if ('Ok' in res) {
    return res.Ok;
  }
  return Promise.reject(null);
};
export const get_need_upgrade = async arg0 => {
  const actor = await getPodcastManagerActor(true);
  const res = await actor.need_upgrade(arg0);
  console.log('need_upgrade', res);
  if (res) {
    return res;
  }
  return Promise.reject(null);
};
export const get_notify_upgrade = async () => {
  const actor = await getPodcastManagerActor(true);
  const res = await actor.notify_upgrade();
  console.log('get_notify_upgrade', res);
  if (res) {
    return res;
  }
  return Promise.reject(null);
};

export const get_upgrade_podcast = async arg0 => {
  const actor = await getPodcastManagerActor(true);
  const res = await actor.upgrade_podcast(arg0);
  console.log('get_upgrade_podcast', res);
  if ('Ok' in res) {
    return res.Ok;
  }
  return Promise.reject(null);
};
/**
 *
 *  Hooks
 */

export const useCreate_podcast_canister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      console.log('start');
      return get_create_podcast_canister();
    },
    // onSuccess(data, variables, context) {
    //   const queryKey = podcastManage.create_podcast_canister();
    //   const res = queryClient.getQueryData(queryKey);
    //   // @ts-ignore
    //   queryClient.setQueryData(queryKey, res);
    // },
  });
};
export const useDeposit = (arg_0, arg_1) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return get_deposit(arg_0, arg_1);
    },
    // onSuccess(data, variables, context) {
    //   const queryKey = podcastManage.create_podcast_canister();
    //   const res = queryClient.getQueryData(queryKey);
    //   // @ts-ignore
    //   queryClient.setQueryData(queryKey, res);
    // },
  });
};
export const useAddress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return get_address();
    },
    // onSuccess(data, variables, context) {
    //   const queryKey = podcastManage.create_podcast_canister();
    //   const res = queryClient.getQueryData(queryKey);
    //   // @ts-ignore
    //   queryClient.setQueryData(queryKey, res);
    // },
  });
};
export const useCanister_status = arg1 => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return get_canister_status(arg1);
    },
    // onSuccess(data, variables, context) {
    //   const queryKey = podcastManage.create_podcast_canister();
    //   const res = queryClient.getQueryData(queryKey);
    //   // @ts-ignore
    //   queryClient.setQueryData(queryKey, res);
    // },
  });
};
export const usePodcast_canister = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return get_podcast_canister();
    },
    // onSuccess(data, variables, context) {
    //   const queryKey = podcastManage.create_podcast_canister();
    //   const res = queryClient.getQueryData(queryKey);
    //   // @ts-ignore
    //   queryClient.setQueryData(queryKey, res);
    // },
  });
};
export const useNeed_upgrade = arg0 => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return get_need_upgrade(arg0);
    },
    // onSuccess(data, variables, context) {
    //   const queryKey = podcastManage.create_podcast_canister();
    //   const res = queryClient.getQueryData(queryKey);
    //   // @ts-ignore
    //   queryClient.setQueryData(queryKey, res);
    // },
  });
};
export const useNotify_upgrade = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return get_notify_upgrade();
    },
    // onSuccess(data, variables, context) {
    //   const queryKey = podcastManage.create_podcast_canister();
    //   const res = queryClient.getQueryData(queryKey);
    //   // @ts-ignore
    //   queryClient.setQueryData(queryKey, res);
    // },
  });
};
export const useUpgrade_podcast = arg0 => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return get_upgrade_podcast(arg0);
    },
    // onSuccess(data, variables, context) {
    //   const queryKey = podcastManage.create_podcast_canister();
    //   const res = queryClient.getQueryData(queryKey);
    //   // @ts-ignore
    //   queryClient.setQueryData(queryKey, res);
    // },
  });
};
