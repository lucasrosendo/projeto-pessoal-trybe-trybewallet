import getCoinApi from '../services/coinsAPI';
// Primeira ação - logar
// Segunda ação - add despesa
// terceira ação - Excluir despesa
export const USER_LOGIN = 'USER_LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';

// Ações da API
export const GET_COINS = 'GET_COINS';
export const GET_COINS_SUCCESS = 'GET_COINS_SUCCESS';

export const loginWallet = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const addWallet = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const deleteExpenses = (id) => ({
  type: DELETE_EXPENSES,
  payload: id,
});

const actionGetCoins = () => ({
  type: GET_COINS,
});

const actionGetCoinsSuccess = (payload) => ({
  type: GET_COINS_SUCCESS,
  payload,
});

export default function fetchCoinsApi() {
  return (dispatch) => {
    dispatch(actionGetCoins());
    return getCoinApi()
      .then((payload) => dispatch(actionGetCoinsSuccess(payload)));
  };
}

export const getExpenses = (expense) => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json())
  .then((json) => {
    dispatch(addWallet({ ...expense, exchangeRates: json }));
  });
