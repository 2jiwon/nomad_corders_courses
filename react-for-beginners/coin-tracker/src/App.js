import React, { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollars, setDollars] = useState(0);
  const [converted, setConverted] = useState([0, ""]);
  const [selectedCoin, setSelected] = useState("");
  const [symbol, setSymbol] = useState("");
  const onChange = (event) => {
    setDollars(event.target.value);
  }
  const onSelectChange = (event) => {
    var index = event.target.selectedIndex;
    setSelected(() => event.target.value);
    setSymbol(() => event.target.childNodes[index].getAttribute('name'));
  }
  useEffect(() => {
    setConverted([(dollars / selectedCoin).toFixed(2), symbol]);
  }, [dollars, selectedCoin, symbol]);
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
        <select value={selectedCoin} onChange={onSelectChange}>
          <option>Please select a coin</option>
          {coins.map((coin, index) =>
            <option
              key={index}
              name={coin.symbol}
              value={coin.quotes.USD.price}>{coin.name} ({coin.symbol}) ${coin.quotes.USD.price} USD
            </option>)}
        </select>}

      <div>
        <input type="number" placeholder="dollars" value={dollars} onChange={onChange} /> USD
        {!isNaN(converted[0]) ? <h3>{converted[0]} {converted[1]}</h3> : null}
      </div>
    </div>
  );
}

export default App;
