export default function InvestmentOuputs({ userInput }) {

    function calculateInvestmentResults({ initialInvestment, annualInvestment, interestRate, years }) {
        const results = [];

        let currentAmount = initialInvestment;

        for (let i = 1; i <= years; i++) {
        currentAmount += annualInvestment; // Add annual investment
        const interest = (currentAmount * interestRate) / 100; // Calculate interest for the year
        currentAmount += interest; // Add interest to the current amount

        results.push({
            year: i,
            investmentValue: currentAmount,
            interestPerYear: interest,
            totalInterest: currentAmount - initialInvestment - (annualInvestment * i),
            investedCapital: initialInvestment + (annualInvestment * i),
        });
    }
    return results;
}


    const results = calculateInvestmentResults({
        initialInvestment: +userInput.initialInvestment,
        annualInvestment: +userInput.annualInvestment,
        interestRate: +userInput.interestRate,
        years: +userInput.years,

    });

    return (
        <div className="flex items-center justify-center pb-20">
            <table className="w-[80%] border-[1px] border-gray-700 mt-4 text-center">
                <thead>
                    <tr className="border-b-[1px] border-gray-700">
                        <th className="border-r-[1px]">Years</th>
                        <th className="border-r-[1px]">Investment Value</th>
                        <th className="border-r-[1px]">Interest Per Year</th>
                        <th className="border-r-[1px]">Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((yearData, index) => (
                        <tr className="border-b-[1px] border-gray-700" key={index}>
                            <td className="border-r-[1px]">{yearData.year}</td>
                            <td className="border-r-[1px]">{yearData.investmentValue.toFixed(2)}</td>
                            <td className="border-r-[1px]">{yearData.interestPerYear.toFixed(2)}</td>
                            <td className="border-r-[1px]">{yearData.totalInterest.toFixed(2)}</td>
                            <td>{yearData.investedCapital.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}