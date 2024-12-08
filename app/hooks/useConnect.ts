"use client";
import { useConnect as useWagmiConnect } from 'wagmi';

export function useConnect() {
  const connect = useWagmiConnect();
  return connect;
}