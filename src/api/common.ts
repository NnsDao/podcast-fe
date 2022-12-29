import { AccountIdentifier, LedgerCanister } from '@dfinity/nns';
import { Principal } from '@dfinity/principal';
import { anonymousAgent } from '@nnsdao/nnsdao-kit/helper/agent';
import { tokenType } from '@nnsdao/nnsdao-kit/helper/constants';
import { getTokenBalance } from '@nnsdao/nnsdao-kit/helper/pay';
import { useQuery } from '@tanstack/react-query';

export const useTokenBalance = (token: tokenType, principal: Principal) => {
  return useQuery(
    [{ token, principalID: principal.toText() }],
    async ({ queryKey }) => {
      // const { token, principalID } = queryKey[0];
      if (token == 'ICP') {
        const ledger = LedgerCanister.create({ agent: anonymousAgent });
        const balance = await ledger.accountBalance({
          accountIdentifier: AccountIdentifier.fromPrincipal({ principal }),
        });
        console.log('ICP balance', balance);
        return balance;
      }

      return getTokenBalance(token, principal);
    },
    {
      staleTime: Infinity,
    }
  );
};
