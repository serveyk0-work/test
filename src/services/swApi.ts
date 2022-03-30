import { http } from '../http/http';
import { IApiResponse, ICurrency } from '../types/ISymbols';

export const getCurrency = async (searchArr: Array<string>): Promise<ICurrency> => {
  let requests = searchArr.map((symbol: string) => http.get(`${process.env.REACT_APP_API}/latest?base=UAH&symbols=${symbol}`));
  let currencies: ICurrency = {};

  await Promise.all(requests)
    .then((res: Array<IApiResponse>) => {
      // eslint-disable-next-line array-callback-return
      res?.map((item: IApiResponse) => {
        const rates = item?.data?.rates
        // eslint-disable-next-line array-callback-return
        Object.keys(rates)?.map((key: string | number) => {
          currencies[key] = rates[key];
        })
      })
    });

  return currencies;
}