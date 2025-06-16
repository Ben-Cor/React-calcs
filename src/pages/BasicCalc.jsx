import CalcBasic from "../components/CalcBasic";

export default function BasicCalc() {
    return (
        <div className='flex flex-col min-h-[calc(100vh-6rem)] w-full bg-gray-100 overflow-hidden'>
            <main className="flex-grow overflow-auto">
                <CalcBasic />
            </main>
        </div>
    );
}
