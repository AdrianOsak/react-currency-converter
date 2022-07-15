import "./style.css";

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">
                Field marked with * is required
            </legend>
            <p className="form__paragraph">
                <label className="form__label">
                    <span className="form__labelText">
                        Amount in zloty*:
                    </span>
                    <input
                        className="amount"
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
                    <select className="currency" name="currency">
                        <option value="EUR">Euro</option>
                        <option value="DOL">US Dollar</option>
                        <option value="GBP">British Pound</option>
                        <option value="CHF">Swiss Frank</option>
                    </select>
                </label>
            </p>
        </fieldset>
        <p className="form__paragraph">
            <button className="form__button">
                Convert
            </button>
        </p>
        <p>
            <span className="result"></span>
        </p>
    </form>
);

export default Form;