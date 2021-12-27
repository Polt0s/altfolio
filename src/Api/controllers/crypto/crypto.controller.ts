import { Controller } from '../config';

import type {
  IGetCryptoList,
  IGetExchangesList,
  IGetCryptoDetails,
  IGetCryptoHistory,
} from './request.types';
import type {
  IGetCryptoListResponse,
  IGetExchangesListResponse,
  IGetCryptoDetailsResponse,
  IGetCryptoHistoryResponse,
} from './response.types';

class CryptoController extends Controller {
  public constructor() {
    super({
      requestUrl: 'https://coinranking1.p.rapidapi.com/'
    });
  }

  public async getCryptoList({ ...params }: IGetCryptoList) {
    return this.get<IGetCryptoListResponse>('/coins', { params });
  }

  public async getExchangesList({ ...params }: IGetExchangesList) {
    return this.get<IGetExchangesListResponse>('/exchanges', { params });
  }

  public async getCryptoDetails({ coinId, ...params }: IGetCryptoDetails) {
    return this.get<IGetCryptoDetailsResponse>(`/coin/${coinId}`, { params });
  }

  public async getCryptoHistory({ coinId, timeperiod, ...params }: IGetCryptoHistory) {
    return this.get<IGetCryptoHistoryResponse>(`coin/${coinId}/history/${timeperiod}`, { params });
  }
}

export const CryptoAPI = new CryptoController();
