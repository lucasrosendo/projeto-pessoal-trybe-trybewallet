import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCoinsApi, { getExpenses } from '../actions/index';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',

    };
    this.submitExpense = this.submitExpense.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getAllCoins } = this.props;
    getAllCoins();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  submitExpense(event) {
    const { newExpense } = this.props;

    event.preventDefault();

    newExpense(this.state);
  }

  render() {
    const { currencies } = this.props;
    // const objectArray = Object.keys(currencies);
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input name="value" onChange={ this.handleChange } type="text" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            name="description"
            onChange={ this.handleChange }
            type="text"
            id="descricao"
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select name="currency" onChange={ this.handleChange } id="moeda">
            {currencies
              .map((coin, index) => (
                coin !== 'USDT' && <option key={ index }>{coin}</option>
              ))}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de Pagamento:
          <select name="method" onChange={ this.handleChange } id="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" onChange={ this.handleChange } id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button onClick={ this.submitExpense } type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

Form.propTypes = {
  getAllCoins: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  newExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getAllCoins: () => dispatch(fetchCoinsApi()),
  newExpense: (expense) => dispatch(getExpenses(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
