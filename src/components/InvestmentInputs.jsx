import { useState } from "react"

export default function InvestmentInputs() {

const [userInput, setUserInput] = useState({});

  return (
    <div>
        <form action="">
            <div>
                <label htmlFor="initialInvestment">Intitial Investment</label>
                <input type="number" required />
            </div>
        </form>
    </div>
  );
}