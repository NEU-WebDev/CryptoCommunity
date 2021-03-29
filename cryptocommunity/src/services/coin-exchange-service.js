const findExchangeRateByCoin = (coinCode) => {
  return fetch(`http://rest-sandbox.coinapi.io/v1/exchangerate/${coinCode}?apikey=AEDAA5E2-6289-4023-8457-60B011468684`)
  .then(response => response.json())
}

const findDetailedExchangeData = (originCoinCode, currencyCode) => {
  return fetch(`http://rest-sandbox.coinapi.io/v1/exchangerate/${originCoinCode}/${currencyCode}?apikey=AEDAA5E2-6289-4023-8457-60B011468684`)
  .then(response => response.json())
}

export default {
  findExchangeRateByCoin,
  findDetailedExchangeData
}

