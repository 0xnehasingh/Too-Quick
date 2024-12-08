// hooks/useAccount.ts
import { useAccount as useWagmiAccount } from 'wagmi';

export function useAccount() {
  const account = useWagmiAccount();
  return account;
}