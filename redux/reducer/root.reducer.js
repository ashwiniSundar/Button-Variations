import {combineReducers} from 'redux';

import {LoginReducer} from './LoginReducer';

import {removeItem} from '../../Features/AsyncStorage/AsyncStorage';

import {SingleTonObjects} from '../../Features/SingleTonObjects/SingleTonObjects';

const LOGINVARIABLE = SingleTonObjects.LOGIN;

const appReducer = combineReducers({
  LoginReducer,
});

const rootReducer = (state, action) => {
  if (action.type === LOGINVARIABLE.LOGOUT) {
    removeItem('persist:primary');

    // clear all the state except network info
    state = {
      CommonNetWorkInfo: state.CommonNetWorkInfo,
      OfflineQueueReducer: state.OfflineQueueReducer,
      CommonFcmTokenRegister: state.CommonFcmTokenRegister,
      LoginReducer: undefined,
    };
  }
  return appReducer(state, action);
};
export default rootReducer;
