import { Principal } from '@dfinity/principal';
import { PodcastIterm, SetBaseInfoRes, SocialLink } from '@nnsdao/nnsdao-kit/src/podcast/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getPodcastActor } from '../../service';
import { podcast } from './queries';
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

export const add_owner = async (arg_0: Principal) => {
  const actor = await getPodcastActor(true);
  const res = await actor.add_owner(arg_0);
  console.log('add_owner', res);
  if (res) {
    return res;
  }
  return Promise.reject(null);
};
export const change_admin = async (arg_0: Principal) => {
  const actor = await getPodcastActor(true);
  const res = await actor.change_admin(arg_0);
  console.log('change_admin', res);
  if (res) {
    return res;
  }
  return Promise.reject(null);
};
export const create_base_info = async (arg_0: SetBaseInfoRes) => {
  const actor = await getPodcastActor(true);
  console.log(actor, 'actor');

  const res = await actor.create_base_info(arg_0);

  console.log('create_base_info', res);
  if (res === undefined) {
    return true;
  }
  return Promise.reject(null);
};
export const create_podcast = async (arg_0: PodcastIterm) => {
  const actor = await getPodcastActor(true);
  const res = await actor.create_podcast(arg_0);
  console.log('create_podcast', res);
  if (res) {
    return res;
  }
  return Promise.reject(null);
};
export const delete_owner = async (arg_0: Principal) => {
  const actor = await getPodcastActor(true);
  const res = await actor.delete_owner(arg_0);
  console.log('delete_owner', res);
  if (res) {
    return res;
  }
  return Promise.reject(null);
};
export const deposit = async (arg_0: Principal, arg_1: bigint) => {
  const actor = await getPodcastActor(true);
  const res = await actor.deposit(arg_0, arg_1);
  console.log('deposit', res);
  if (res) {
    return res;
  }
  return Promise.reject(null);
};
export const get_admin = async () => {
  const actor = await getPodcastActor(true);
  const res = await actor.get_admin();
  console.log('get_admin', res);
  if (res) {
    return res;
  }
  return Promise.reject(null);
};
export const get_canister_status = async arg1 => {
  const actor = await getPodcastActor(true);
  const res = await actor.get_canister_status(arg1);
  console.log('get_canister_status', res);
  if ('Ok' in res) {
    return res.Ok;
  }
  return Promise.reject([]);
};
export const get_owner = async () => {
  const actor = await getPodcastActor(true);
  const res = await actor.get_owner();
  console.log('get_owner', res);
  if (res) {
    return res;
  }
  return Promise.reject(null);
};
export const get_podcast = async (arg_0: bigint) => {
  const actor = await getPodcastActor(true);
  const res = await actor.get_podcast(arg_0);
  console.log('get_podcast', res);
  if (res) {
    return res;
  }
  return Promise.reject(null);
};
export const get_podcast_base_info = async () => {
  const actor = await getPodcastActor(true);
  const res = await actor.get_podcast_base_info();
  console.log('get_podcast_base_info', res);
  if (res) {
    return res;
  }
  return Promise.reject(null);
};
export const get_podcast_list = async () => {
  const actor = await getPodcastActor(true);
  const res = await actor.get_podcast_list();
  console.log('get_podcast_list', res);
  if (res) {
    return res;
  }
  return Promise.reject(null);
};
export const get_social_link = async () => {
  const actor = await getPodcastActor(true);
  const res = await actor.get_social_link();
  console.log('get_social_link_xx', res);
  if (res) {
    return res;
  }
  return Promise.reject(null);
};
export const set_social_link = async (arg_0: SocialLink) => {
  const actor = await getPodcastActor(true);
  const res = await actor.set_social_link(arg_0);
  console.log('set_social_link', res);
  if (res) {
    return res;
  }
  return Promise.reject(null);
};
export const update_base_info = async (arg_0: SetBaseInfoRes) => {
  const actor = await getPodcastActor(true);
  const res = await actor.update_base_info(arg_0);
  console.log('update_base_info', res);
  if (res === undefined) {
    return true;
  }
  return Promise.reject(null);
};
export const update_podcast = async (arg_0: bigint, arg_1: PodcastIterm) => {
  const actor = await getPodcastActor(true);
  const res = await actor.update_podcast(arg_0, arg_1);
  console.log('update_podcast', res);
  if (res) {
    return res;
  }
  return Promise.reject(null);
};
/**
 *
 *  Hooks
 */

export const useAdd_owner = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (arg_0: Principal) => {
      return add_owner(arg_0);
    },
    onSuccess(data, variables, context) {
      //todo
      const queryKey = podcast.get_owner();
      queryClient.setQueryData(queryKey, data);
    },
  });
};
//1
export const useChange_admin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (arg_0: Principal) => {
      return change_admin(arg_0);
    },
    onSuccess(data, variables, context) {
      //todo
      const queryKey = podcast.get_admin();
      queryClient.setQueryData(queryKey, data);
    },
  });
};
//1
export const useCreate_base_info = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (arg_0: SetBaseInfoRes) => {
      return create_base_info(arg_0);
    },
    onSuccess(data, variables, context) {
      //todo
      // const queryKey = podcast.update_base_info(arg_0);
      // queryClient.setQueryData(queryKey, data);
    },
  });
};
//1
export const useCreate_podcast = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (arg_0: PodcastIterm) => {
      return create_podcast(arg_0);
    },
    // onSuccess(data, variables, context) {
    //   //todo
    //   const queryKey = podcast.create_podcast(arg_0);
    //   queryClient.setQueryData(queryKey, data);
    // },
  });
};
//1
export const useDelete_owner = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (arg_0: Principal) => {
      return delete_owner(arg_0);
    },
    onSuccess(data, variables, context) {
      //todo
      const queryKey = podcast.get_owner();
      queryClient.setQueryData(queryKey, data);
    },
  });
};
//1
export const useGet_admin = () => {
  const queryClient = useQueryClient();
  return useQuery(
    podcast.get_admin(),
    async ({ queryKey }) => {
      const { module, scope, cid } = queryKey[0];
      const actor = await getPodcastActor(true);
      const res = await actor.get_admin();
      console.log(res, 'get_admin');
      if (res) {
        return res;
      }
      return Promise.reject(null);
    },
    {
      onSuccess(data) {
        queryClient.setQueryData(podcast.get_admin(), data);
      },
    }
  );
};
export const useGet_canister_status = (arg: Principal) => {
  const queryClient = useQueryClient();
  // return get_canister_status(arg);
  return useQuery(
    podcast.get_canister_status(arg),
    async ({ queryKey }) => {
      const { module, scope, cid } = queryKey[0];
      const actor = await getPodcastActor(true);
      const res = await actor.get_canister_status(arg);
      if ('Ok' in res) {
        console.log(res.Ok, 'res');
        return res.Ok;
      }
      return Promise.reject(null);
    },
    {
      onSuccess(data) {
        console.log(1);

        // queryClient.setQueryData(podcast.get_canister_status(arg), data);
      },
    }
  );
};
//1
export const useGet_owner = () => {
  const queryClient = useQueryClient();
  return useQuery(
    podcast.get_owner(),
    async ({ queryKey }) => {
      const { module, scope, cid } = queryKey[0];
      const actor = await getPodcastActor(true);
      const res = await actor.get_owner();
      console.log(res, 'get_owner');
      if (res) {
        return res;
      }
      return Promise.reject(null);
    },
    {
      onSuccess(data) {
        queryClient.setQueryData(podcast.get_owner(), data);
      },
    }
  );
};
//1
export const useGet_podcast = (arg_0: bigint) => {
  const queryClient = useQueryClient();
  return useQuery(
    podcast.get_podcast(arg_0),
    async ({ queryKey }) => {
      const { module, scope, cid } = queryKey[0];
      const actor = await getPodcastActor(true);
      const res = await actor.get_podcast(arg_0);
      console.log(res, 'get_podcast');
      if (res) {
        return res;
      }
      return Promise.reject(null);
    },
    {
      onSuccess(data) {
        queryClient.setQueryData(podcast.get_podcast(arg_0), data);
      },
    }
  );
};
//1
export const useGet_podcast_base_info = () => {
  const queryClient = useQueryClient();
  return useQuery(
    podcast.get_podcast_base_info(),
    async ({ queryKey }) => {
      const { module, scope, cid } = queryKey[0];
      const actor = await getPodcastActor(true);
      const res = await actor.get_podcast_base_info();
      console.log(res, 'get_podcast_base_info');
      if (res) {
        return res;
      }
      return Promise.reject(null);
    },
    {
      onSuccess(data) {
        queryClient.setQueryData(podcast.get_podcast_base_info(), data);
      },
    }
  );
};
//1
export const useGet_podcast_list = () => {
  const queryClient = useQueryClient();
  return useQuery(
    podcast.get_podcast_list(),
    async ({ queryKey }) => {
      const { module, scope, cid } = queryKey[0];
      const actor = await getPodcastActor(true);
      const res = await actor.get_podcast_list();
      console.log(res, 'get_podcast_list');
      if (res) {
        return res;
      }
      return Promise.reject(null);
    },
    {
      onSuccess(data) {
        queryClient.setQueryData(podcast.get_podcast_list(), data);
      },
    }
  );
};
//1
export const useGet_social_link = () => {
  const queryClient = useQueryClient();
  return useQuery(
    podcast.get_social_link(),
    async ({ queryKey }) => {
      const { module, scope, cid } = queryKey[0];
      const actor = await getPodcastActor(true);
      const res = await actor.get_social_link();
      console.log(res, 'get_social_link');
      if (res) {
        return res;
      }
      return Promise.reject(null);
    },
    {
      // onSuccess(data) {
      //   queryClient.setQueryData(podcast.get_social_link(), data);
      // },
    }
  );
};
export const useSet_social_link = (arg_0: SocialLink) => {
  const queryClient = useQueryClient();
  return useQuery(
    podcast.set_social_link(arg_0),
    async ({ queryKey }) => {
      const { module, scope, cid } = queryKey[0];
      const actor = await getPodcastActor(true);
      const res = await actor.set_social_link(arg_0);
      console.log(res, 'set_social_link');
      if (res) {
        return res;
      }
      return Promise.reject(null);
    },
    {
      onSuccess(data) {
        queryClient.setQueryData(podcast.set_social_link(arg_0), data);
      },
    }
  );
};
//1
export const useUpdate_base_info = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (arg_0: SetBaseInfoRes) => {
      return update_base_info(arg_0);
    },
    onSuccess(data, variables, context) {
      //todo
      // const queryKey = podcast.update_base_info(arg_0);
      // queryClient.setQueryData(queryKey, data);
    },
  });
};
export const useUpdate_podcast = (arg_0: bigint, arg_1: PodcastIterm) => {
  const queryClient = useQueryClient();
  return useQuery(
    podcast.update_podcast(arg_0, arg_1),
    async ({ queryKey }) => {
      const { module, scope, cid } = queryKey[0];
      const actor = await getPodcastActor(true);
      const res = await actor.update_podcast(arg_0, arg_1);
      console.log(res, 'update_podcast');
      if (res) {
        return res;
      }
      return Promise.reject(null);
    },
    {
      onSuccess(data) {
        queryClient.setQueryData(podcast.update_podcast(arg_0, arg_1), data);
      },
    }
  );
};
