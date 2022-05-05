import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Vai receber via redux as informações salvas no reducer(email, soma dos valores das despesas e moeda "mãe")

class Header extends React.Component {
  calculateTotal() {
    const { expenses } = this.props;

    let total = 0;

    expenses.forEach((expense) => {
      const { value, currency, exchangeRates } = expense;

      total += value * Number(exchangeRates[currency].ask);
    });

    return total.toFixed(2);
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <div className="header">
        <span
          type="text"
          data-testid="email-field"
          value={ email }
        >
          Email do usuario:
          {' '}
          { email }
        </span>

        <p>Despesa total:</p>
        <span data-testid="total-field">
          {expenses.length > 0 ? this.calculateTotal() : '0'}
        </span>

        <span
          type="text"
          data-testid="header-currency-field"
        >
          BRL
        </span>

      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
