import { useState } from "react";
import CalcButton from "./CalcButton";
import CalcOperationButton from "./CalcOperationButton";

export default function CalcBasic() {
    const [currentInput, setCurrentInput] = useState("");
    const [evaluated, setEvaluated] = useState(false);

    const handleButtonClick = (input) => {
        let newInput = currentInput;

        switch (input) {
            case "Clear":
                newInput = "";
                setEvaluated(false);
                break;
            case "Del":
                newInput = newInput.slice(0, -1);
                setEvaluated(false);
                break;
            case "=":
                try {
                    newInput = eval(newInput).toString(); // Evaluate the expression
                    setEvaluated(true);
                } catch {
                    newInput = "Error";
                }
                break;
            case "x²":
                try {
                    newInput = (parseFloat(newInput) ** 2).toString();
                    setEvaluated(false);
                } catch {
                    newInput = "Error";
                }
                break;
            case "( )":
                const openBrackets = (newInput.match(/\(/g) || []).length;
                const closedBrackets = (newInput.match(/\)/g) || []).length;

                // Check the last character of the input
                const lastChar = newInput.slice(-1);

                if (openBrackets > closedBrackets && lastChar !== "(" && lastChar !== "") {
                    // Add closing parenthesis if there are unmatched opening parentheses
                    newInput += ")";
                } else {
                    // Add opening parenthesis if the input is empty or the last character is an operator
                    if (
                        newInput === "" ||
                        ["+", "-", "*", "/", "("].includes(lastChar)
                    ) {
                        newInput += "(";
                    }
                }
                break;
            default:
                if (evaluated && !isNaN(input)) {
                    newInput = input;
                    setEvaluated(false);
                } else {
                    newInput += input;
                    setEvaluated(false);
                }
        }

        setCurrentInput(newInput); // Update state
    };

    return (
        <div className="flex flex-col items-center justify-center py-8 md:py-20">
            <h1 className="text-3xl font-turret mb-8">Basic Calculator</h1>
            <div className="bg-white shadow-md rounded-lg p-6 w-[80vw] md:w-[400px]">
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    placeholder="0"
                    readOnly
                    value={currentInput} // Bind input value to state
                    id="screen"
                />
                <div className="grid grid-cols-4 gap-2">
                    <CalcOperationButton value="( )" onClick={handleButtonClick} />
                    <CalcOperationButton value="x²" onClick={handleButtonClick} />
                    <CalcOperationButton value="Del" onClick={handleButtonClick} />
                    <CalcOperationButton value="+" onClick={handleButtonClick} />
                    <CalcButton value="7" onClick={handleButtonClick} />
                    <CalcButton value="8" onClick={handleButtonClick} />
                    <CalcButton value="9" onClick={handleButtonClick} />
                    <CalcOperationButton value="-" onClick={handleButtonClick} />
                    <CalcButton value="4" onClick={handleButtonClick} />
                    <CalcButton value="5" onClick={handleButtonClick} />
                    <CalcButton value="6" onClick={handleButtonClick} />
                    <CalcOperationButton value="*" onClick={handleButtonClick} />
                    <CalcButton value="1" onClick={handleButtonClick} />
                    <CalcButton value="2" onClick={handleButtonClick} />
                    <CalcButton value="3" onClick={handleButtonClick} />
                    <CalcOperationButton value="/" onClick={handleButtonClick} />
                    <CalcOperationButton value="." onClick={handleButtonClick} />
                    <CalcButton value="0" onClick={handleButtonClick} />
                    <CalcOperationButton value="Clear" onClick={handleButtonClick} />
                    <CalcOperationButton value="=" onClick={handleButtonClick} />
                </div>
            </div>
        </div>
    );
}