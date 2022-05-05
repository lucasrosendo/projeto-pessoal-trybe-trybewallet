import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginWallet } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(e) {
    e.preventDefault();
    const { history, onSubmit } = this.props;
    const { email } = this.state;
    onSubmit(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const MIN_PASS = 5;
    const parseEmail = /\S+@\S+\.\S+/;
    const testValidateEmail = parseEmail.test(email);
    const testValidatePass = (password.length > MIN_PASS);
    let btnValidate = false;
    if (testValidateEmail && testValidatePass === true) {
      btnValidate = true;
    }

    return (
      <div className="tela-login">
        <h2>Login</h2>
        <input
          placeholder="Email"
          data-testid="email-input"
          type="email"
          value={ email }
          onChange={ this.handleChange }
          name="email"
        />
        <span />
        <input
          placeholder="Password"
          data-testid="password-input"
          type="password"
          value={ password }
          onChange={ this.handleChange }
          name="password"
        />
        <button
          disabled={ !btnValidate }
          type="submit"
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => (
  { onSubmit: (payload) => dispatch(loginWallet(payload)) }
);

export default connect(null, mapDispatchToProps)(Login);
