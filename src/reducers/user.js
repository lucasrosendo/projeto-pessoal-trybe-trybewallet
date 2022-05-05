import { USER_LOGIN } from '../actions/index';

const INITIAL_STATE_USER = {
  email: '',
};

const userReducer = (state = INITIAL_STATE_USER, action) => {
  switch (action.type) {
  case USER_LOGIN:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default userReducer;
