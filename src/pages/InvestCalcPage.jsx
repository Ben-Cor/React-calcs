import Header from "../components/Header";
import InvestmentCalc from "../components/InvestmentCalc";

export default function InvestCalcPage() {
    return (
       <div className='bg-gray-100 min-h-[calc(100vh-6rem)]'>
            <InvestmentCalc />
        </div>
    );
}