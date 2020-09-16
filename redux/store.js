import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducer/root.reducer';
import {rootSaga} from './saga/RootSaga';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'primary',
  // Storage Method (React Native)
  storage: AsyncStorage,
  blacklist: ['counterReducer'],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  persistedReducer,
  undefined,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

let persistor = persistStore(store);
export {store, persistor};
