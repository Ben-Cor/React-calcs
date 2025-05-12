import { useState } from "react"

export default function InvestmentInputs() {

const [userInput, setUserInput] = useState({});

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