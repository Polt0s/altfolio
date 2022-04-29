import { Controller } from "../config";
import { IGetExchangesList } from "./request.types";
import { IGetExchangesListResponse } from "./response.types";

class ExchangesController extends Controller {
  public constructor() {
    super({
      requestUrl: 'https://coinranking1.p.rapidapi.com'
    });
  }

  public async getExchangesList({ ...params }: IGetExchangesList) {
    return this.get<IGetExchangesListResponse>('/exchanges', { params });
  }
}

export const ExchangesAPI = new ExchangesController();
