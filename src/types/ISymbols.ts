export interface ICurrency {
  [key: string]: number
}

export interface IApiResponse {
  data: {
    rates: ICurrency
  }
}

export interface IApi {
  options: Array<ICurrency>,
  currentValue: number | string,
  load: boolean,
  error: string | null,
}