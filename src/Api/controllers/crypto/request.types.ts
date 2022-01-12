
export interface IGetCryptoList {
  limit?: number;
}

export interface IGetExchangesList {
  limit?: number;
}

export interface IGetCryptoDetails {
  coinId: number | null;
}

export interface IGetCryptoHistory {
  coinId: number | null;
  timeperiod: string | null;
}
