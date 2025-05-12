import { useState } from "react"

export default function InvestmentInputs() {

const [userInput, setUserInput] = useState({
  initialInvestment: 10000,
  annualInvestment: 1000,
  interestRate: 5,
  years: 30, 
});

const handleChangeInput = (inputId, newValue) => {
    setUserInput((prevState) => ({
        ...prevState,
        [inputId]: newValue,
    }));
}

  return (
    <div>
        <form action="">
            <div>
                <label htmlFor="initialInvestment">Intitial Investment</label>
                <input id="initialInvestment" name="initialInvestment" type="number" required />
            </div>
            <div>
                <label htmlFor="annualInvestment">Annual Investment</label>
                <input id="annualInvestment" name="annualInvestment" type="number" required />
            </div>
            <div>
                <label htmlFor="interestRate">Interest Rate</label>
                <input id="interestRate" name="interestRate" type="number" required />
            </div>
            <div>
                <label htmlFor="years">Years</label>
                <input id="years" name="years" type="number" required />
            </div>
        </form>
    </div>
  );
}