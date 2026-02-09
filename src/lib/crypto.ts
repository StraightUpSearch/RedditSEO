export interface CryptoPaymentConfig {
  coinbaseCommerceKey: string | undefined;
  nowPaymentsKey: string | undefined;
}

export function getCryptoConfig(): CryptoPaymentConfig {
  return {
    coinbaseCommerceKey: process.env.NEXT_PUBLIC_COINBASE_COMMERCE_KEY,
    nowPaymentsKey: process.env.NEXT_PUBLIC_NOWPAYMENTS_KEY,
  };
}

export function isCryptoEnabled(): boolean {
  const config = getCryptoConfig();
  return !!(config.coinbaseCommerceKey || config.nowPaymentsKey);
}

export const ACCEPTED_CRYPTO = ["BTC", "ETH", "USDT"] as const;
export type AcceptedCrypto = (typeof ACCEPTED_CRYPTO)[number];

export const WALLET_ADDRESSES: Record<AcceptedCrypto, string> = {
  BTC: process.env.NEXT_PUBLIC_BTC_ADDRESS || "",
  ETH: process.env.NEXT_PUBLIC_ETH_ADDRESS || "",
  USDT: process.env.NEXT_PUBLIC_USDT_ADDRESS || "",
};
