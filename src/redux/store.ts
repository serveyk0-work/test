import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

export const composeEnhancers = typeof window === 'object' && process.env.REACT_APP_DEVTOOLS === 'true' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(
    applyMiddleware(
      thunk,
    )
  ),
);

export type RootState = ReturnType<typeof store.getState>