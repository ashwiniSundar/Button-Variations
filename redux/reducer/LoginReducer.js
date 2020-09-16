import {SingleTonObjects} from '../../Features/SingleTonObjects/SingleTonObjects';

const LOGINVARIABLE = SingleTonObjects.LOGIN;

const initialState = {
  userName: '',
};

export function LoginReducer(state = initialState, action) {
  let newState = {...state};
  if (action.type === LOGINVARIABLE.SEND_LOGIN_DATA_TO_REDUCER) {
    newState.userName = action.data;
    return newState;
  }
  return state;
}
