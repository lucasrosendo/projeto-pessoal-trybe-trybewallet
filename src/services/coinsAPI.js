// end point das moedas
const COIN_BASE_API = 'https://economia.awesomeapi.com.br/json/all';

const getCoinApi = () => fetch(COIN_BASE_API)
  .then((response) => response.json())
  .catch((e) => console.log(`Deu ruim: ${e.menssage}`));

export default getCoinApi;
