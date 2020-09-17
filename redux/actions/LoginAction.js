import {put, takeEvery} from 'redux-saga/effects';
import {SingleTonObjects} from '../../Features/SingleTonObjects/SingleTonObjects';

const LOGINVARIABLE = SingleTonObjects.LOGIN;

export const loginActions = {
  sendAuthenticatedData: data => {
    return {type: LOGINVARIABLE.LOGIN_DATA_RECEIVED, data: data};
  },
  sendAuthenticationBoolean: data => {
    return {type: LOGINVARIABLE.SEND_LOGIN_DATA_TO_REDUCER, data: data};
  },
};

export function* getAuthLogindata(data) {
  let userName = data.data;
  try {
    yield put(loginActions.sendAuthenticationBoolean(userName));
  } catch (e) {
    yield put(commonAction.removeLoader());
    console.log('Login Authentication down error: ', e);
  }
}

export const LoginSaga = {
  loginAuthdata: takeEvery(LOGINVARIABLE.LOGIN_DATA_RECEIVED, getAuthLogindata),
};
