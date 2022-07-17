import "./style.css";
import { useState } from "react";
import currencies from "../currencies";
import Result from "./Result";

const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].id);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }


    return (<form className="form" onSubmit={onSubmit}>
        
            <legend className="form__legend">
                Field marked with * is required
            </legend>
            <p className="form__paragraph">
                <label>
                    <span className="form__labelText">
                        Amount in zloty*:
                    </span>
                    <input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        className="amount"
                        placeholder="Type amount in zloty"
                        type="number"
                        min="0.01"
                        step="any"
                        required
                        autofocus />
                </label>
            </p>
            <p className="form__paragraph">
                <label className="form__label">
                    <span className="form__labelText">
                        Convert to:
                    </span>
                    <select
                        className="currency"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map((currency => (
                            <option
                                key={currency.id}
                                value={currency.id}
                            >
                                {currency.name}
                            </option>
                        )))}
                    </select>
                </label>
            </p>
       
        <p className="form__paragraph">
            <button className="form__button">
                Convert
            </button>
        </p>
        <Result result={result} />
    </form >
    )
};

export default Form;