export default function InvestmentInputs({userInput, handleChangeInput, handleClickReset, error}) {

  return (
    <div className="flex items-center justify-center pt-4 pb-4">
        <div className="flex flex-col items-center justify-center border-[1px] rounded-lg shadow-lg w-[60%] pb-4">
            <form className="flex flex-col text-end justify-end items-end w-auto gap-2 p-4 md:text-start md:flex-row" action="">
                <div className="flex flex-col align-center justify-center gap-1">
                    <label htmlFor="initialInvestment">Initial Investment</label>
                    <input className="select-none touch-manipulation border-[1px] text-end w-[150px]" id="initialInvestment" name="initialInvestment" value={userInput.initialInvestment} onChange={(e) => {handleChangeInput(e.target.id, e.target.value)}} type="number" required />
                </div>
                <div className="flex flex-col align-center justify-center gap-1">
                    <label htmlFor="annualInvestment">Annual Investment</label>
                    <input className="select-none touch-manipulation border-[1px] text-end w-[150px]" id="annualInvestment" name="annualInvestment" value={userInput.annualInvestment} onChange={(e) => {handleChangeInput(e.target.id, e.target.value)}} type="number" required />
                </div>
                <div className="flex flex-col align-center justify-center gap-1">
                    <label htmlFor="interestRate">Interest Rate</label>
                    <input className="select-none touch-manipulation border-[1px] text-end w-[150px]" id="interestRate" name="interestRate" value={userInput.interestRate} onChange={(e) => {handleChangeInput(e.target.id, e.target.value)}} type="number" required />
                </div>
                <div className="flex flex-col align-center justify-center gap-1">
                    <label htmlFor="years">Years</label>
                    <input className="select-none touch-manipulation border-[1px] text-end w-[150px]" id="years" name="years" value={userInput.years} onChange={(e) => {handleChangeInput(e.target.id, e.target.value)}} type="number" required />
                </div>
            </form>
            <div>
                <button className="bg-blue-300 p-2 mt-2 rounded-xl shadow-xl ml-6" onClick={handleClickReset}>Reset</button>
            </div>
            <p className="text-center pt-4 text-red-700">{error}</p>
        </div>
    </div>
  );
}