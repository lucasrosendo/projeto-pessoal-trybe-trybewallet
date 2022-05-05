import { GET_COINS, GET_COINS_SUCCESS,
  ADD_EXPENSE, DELETE_EXPENSES } from '../actions/index';

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { ...action.payload, id: state.expenses.length }],
    };
  case DELETE_EXPENSES: {
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.payload),
    };
  }
  case GET_COINS:
    return {
      ...state,
      // isLoading: true,
    };
  case GET_COINS_SUCCESS:
    return {
      ...state,
      // isLoading: false,
      currencies: Object.keys(action.payload),
    };
  default:
    return state;
  }
};

export default walletReducer;
