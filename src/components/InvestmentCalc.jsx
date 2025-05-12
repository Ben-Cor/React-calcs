import { useState } from "react";
import InvestmentInputs from "./InvestmentInputs";
import InvestmentOuputs from "./InvestmentOutputs";

export default function InvestmentCalc () {

    const [userInput, setUserInput] = useState ({
    initialInvestment: 10000,
    annualInvestment: 1000,
    interestRate: 5,
    years: 30, 
    });

    const handleChangeInput = (inputId, newValue) => {
    if (isNaN(newValue)) {
        alert("Please enter a valid number");
        return;
    }

    if (newValue < 0) {
        alert("Please enter a positive number");
        return;
    }
    
    setUserInput((prevState) => ({
        ...prevState,
        [inputId]: newValue,
    }));
}

const handleClickReset = (e) => {
    e.preventDefault();
    setUserInput({
        initialInvestment: 10000,
        annualInvestment: 1000,
        interestRate: 5,
        years: 30, 
    });
}

    return (
        <section>
            <h2 className="text-3xl font-bold mb-4 flex justify-center items-center mt-20">Investment Calculator</h2>
            <InvestmentInputs userInput={userInput} handleChangeInput={handleChangeInput} handleClickReset={handleClickReset} />
            <InvestmentOuputs userInput={userInput} />
        </section>
    );
}