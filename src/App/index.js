import "./style.css";
import Form from "./Form";
import { useState } from "react";
import currencies from "./currencies";

function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ id }) => id === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <div className="App">
      <header className="header">Polish zloty converter</header>
      <main className="main">
        <Form
          result={result}
          calculateResult={calculateResult}
        />
      </main>
    </div>
  );
}

export default App;
