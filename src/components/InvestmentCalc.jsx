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

    const [errorMessage, setErrorMessage] = useState("");

    const handleChangeInput = (inputId, newValue) => {
    if (isNaN(newValue)) {
        setErrorMessage("Please enter a valid number");
        return;
    }

    if (newValue < 0) {
        setErrorMessage("Please enter a positive number");
        return;
    }
    
    setErrorMessage("");
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

    setErrorMessage("");
}

    return (
        <section>
            <h2 className="text-3xl font-bold mb-4 flex justify-center items-center mt-20">Investment Calculator</h2>
            <InvestmentInputs userInput={userInput} handleChangeInput={handleChangeInput} handleClickReset={handleClickReset} error={errorMessage} />
            {errorMessage === "" && <InvestmentOuputs userInput={userInput} />}
        </section>
    );
}