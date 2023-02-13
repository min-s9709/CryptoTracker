export const fetchCoins = () => {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
};

export const fetchCoinInfo = (coinId?: string) => {
  return fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`).then(
    (response) => response.json()
  );
};

export const fetchCoinTickers = (coinId?: string) => {
  return fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`).then(
    (response) => response.json()
  );
};
