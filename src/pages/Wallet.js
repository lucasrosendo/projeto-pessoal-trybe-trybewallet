import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      // Requisitos 9 e 10 baseados no Wallet do aluno Bruno Pinho
      // https://github.com/tryber/sd-013-a-project-trybewallet/pull/116
      <div>
        <Header />
        <Form />
        <Table />
      </div>
    );
  }
}

export default Wallet;
