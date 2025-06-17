import jsPDF from "jspdf";

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

    const handleDownloadPDF = () => {
        const doc = new jsPDF();
        const pageHeight = doc.internal.pageSize.height; // Get the page height
        const lineHeight = 10; // Height of each line of text
        const marginTop = 20; // Top margin
        const marginLeft = 20; // Left margin
        let y = marginTop; // Start position for text

        doc.text("Investment Results", marginLeft, y);
        y += lineHeight * 2; // Add some space after the title

        results.forEach((yearData, index) => {
            // Add data for each year
            doc.text(`Year: ${yearData.year}`, marginLeft, y);
            doc.text(`Investment Value: ${yearData.investmentValue.toFixed(2)}`, marginLeft, y + lineHeight);
            doc.text(`Interest Per Year: ${yearData.interestPerYear.toFixed(2)}`, marginLeft, y + lineHeight * 2);
            doc.text(`Total Interest: ${yearData.totalInterest.toFixed(2)}`, marginLeft, y + lineHeight * 3);
            doc.text(`Invested Capital: ${yearData.investedCapital.toFixed(2)}`, marginLeft, y + lineHeight * 4);
            y += lineHeight * 6; // Move to the next block of data

            // Check if the next block will exceed the page height
            if (y + lineHeight * 5 > pageHeight) {
                doc.addPage(); // Add a new page
                y = marginTop; // Reset y position for the new page
            }
        });

        doc.save("investment_results.pdf");
    };

    return (
        <div className="flex flex-col items-center justify-center pb-20">
            <table className="w-[80%] border-[1px] border-gray-700 mt-4 text-center text-sm md:text-[1rem]">
                <thead>
                    <tr className="border-b-[1px] border-gray-700">
                        <th className="border-r-[1px] p-1 md:p-0">Years</th>
                        <th className="border-r-[1px] p-1 md:p-0">Investment Value</th>
                        <th className="border-r-[1px] p-1 md:p-0">Interest Per Year</th>
                        <th className="border-r-[1px] p-1 md:p-0">Total Interest</th>
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
            <button className="bg-blue-300 p-2 rounded-xl shadow-xl mt-6" onClick={handleDownloadPDF}>Download PDF</button>
        </div>
    );
}