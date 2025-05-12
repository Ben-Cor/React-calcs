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
    <div className="flex flex-col items-center justify-center bg-gray-100 pb-10">
        <form className="flex flex-col justify-end items-end w-auto gap-2" action="">
            <div className="flex align-center justify-center gap-2">
                <label htmlFor="initialInvestment">Initial Investment</label>
                <input className="border-[1px] text-end w-[150px]" id="initialInvestment" name="initialInvestment" value={userInput.initialInvestment} onChange={(e) => {handleChangeInput(e.target.id, e.target.value)}} type="number" required />
            </div>
            <div className="flex align-center justify-center gap-2">
                <label htmlFor="annualInvestment">Annual Investment</label>
                <input className="border-[1px] text-end w-[150px]" id="annualInvestment" name="annualInvestment" value={userInput.annualInvestment} onChange={(e) => {handleChangeInput(e.target.id, e.target.value)}} type="number" required />
            </div>
            <div className="flex align-center justify-center gap-2">
                <label htmlFor="interestRate">Interest Rate</label>
                <input className="border-[1px] text-end w-[150px]" id="interestRate" name="interestRate" value={userInput.interestRate} onChange={(e) => {handleChangeInput(e.target.id, e.target.value)}} type="number" required />
            </div>
            <div className="flex align-center justify-center gap-2">
                <label htmlFor="years">Years</label>
                <input className="border-[1px] text-end w-[150px]" id="years" name="years" value={userInput.years} onChange={(e) => {handleChangeInput(e.target.id, e.target.value)}} type="number" required />
            </div>
        </form>
    </div>
  );
}