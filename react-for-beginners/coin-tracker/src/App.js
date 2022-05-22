import React, { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollars, setDollars] = useState(0);
  const [converted, setConverted] = useState([0, ""]);
  let selected = [];
  const onChange = (event) => {
    setDollars(event.target.value);
    setConverted([
      selected.length == 0 ? 0 : (dollars / selected[0]).toFixed(2),
      selected[1]
    ]);
  }
  const onSelected = (event) => {
    selected = event.target.value.split(',');
    setConverted([(dollars / selected[0]).toFixed(2), selected[1]]);
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>Loading...</strong> :
        <select onChange={onSelected}>
          <option>Please select a coin</option>
          {coins.map((coin, index) =>
            <option
              key={index}
              value={[coin.quotes.USD.price, coin.symbol]}>{coin.name} ({coin.symbol}) ${coin.quotes.USD.price} USD
            </option>)}
        </select>}

      <div>
        <input type="number" placeholder="dollars" value={dollars} onChange={onChange} /> USD
        <h3>{converted[0]} {converted[1]}</h3>
      </div>
    </div>
  );
}

export default App;
