import {all} from 'redux-saga/effects';

import {LoginSaga} from '../actions/LoginAction';

export function* rootSaga() {
  yield all({
    ...LoginSaga,
  });
}
