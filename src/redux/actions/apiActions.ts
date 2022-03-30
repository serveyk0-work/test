import { getCurrency } from '../../services/swApi';
import { TYPES } from '../types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ICurrency } from '../../types/ISymbols';
import { Exception } from 'sass';
import { Action, ActionCreator } from 'redux';

export const setCurrencyData: ActionCreator<Action> = (payload: ICurrency) => {
  return {
    type: TYPES.SET_CURRENCY,
    payload: payload
  }
}

export const setCurrent: ActionCreator<Action> = (payload: string | number) => {
  return {
    type: TYPES.SET_CURRENT,
    payload: payload
  }
}

export const setError: ActionCreator<Action> = (payload: string) => {
  return {
    type: TYPES.SET_ERROR,
    payload: payload
  }
}

export const setCurrency = (currencies: Array<string>): ThunkAction<any, any, any, any> => {
  return async (dispatch: ThunkDispatch<ActionCreator<Action>, any, any>) => {
    try {
      const data: ICurrency = await getCurrency(currencies);
      dispatch(setCurrencyData(data));
    } catch (e) {
      dispatch(setError((e as Exception).message));
    }
  };
}

export const setCurrentValue = (currentValue: string | number): ThunkAction<any, any, any, any> => {
  return async (dispatch: ThunkDispatch<ActionCreator<Action>, any, any>) => {
    try {
      dispatch(setCurrent(currentValue));
    } catch (e) {
      dispatch(setError((e as Exception).message));
    }
  };
}