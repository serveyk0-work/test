import { TYPES } from '../types';
import { IApi, ICurrency } from '../../types/ISymbols';

const initialState: IApi = {
  options: [],
  currentValue: 0,
  load: true,
  error: null,
};

interface IAction {
  type: string,
  payload: Array<ICurrency> | number | string,
}

const apiReducer = (state = initialState, action: IAction ) => {
  switch( action.type ) {
    case TYPES.SET_CURRENCY: {
      return {
        ...state,
        load: false,
        error: null,
        options: action.payload
      };
    }
    case TYPES.SET_CURRENT: {
      return {
        ...state,
        error: null,
        currentValue: action.payload
      };
    }
    case TYPES.SET_ERROR: {
      return {
        ...state,
        load: false,
        error: action.payload
      };
    }
    default: return state;
  }
}
export default apiReducer;