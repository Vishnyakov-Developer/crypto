const API_KEY = 'b0b0f58e70c81727376cb8212bbad0e63041c782026088ddcbbeddf660c1d2c2';

export const loadTicker = tickerName => {
  return fetch(`https://min-api.cryptocompare.com/data/price?fsym=${tickerName}&tsyms=USD&api_key=${API_KEY}`)
    .then(r => r.json())
};
