export default function Header() {
    return (
        <header className="flex sticky top-0 w-full justify-between items-center font-turret p-4 px-4 bg-blue-500 text-white gap-6 md:px-10 md:gap-0">
            <h1 className="text-xl md:text-4xl">Calculators</h1>
            <nav className="text-[1rem] md:text-2xl">
                <ul className="flex text-center space-x-4 md:space-x-8">
                    <li><a href="/" className="hover:underline">Basic Calculator</a></li>
                    <li><a href="/investmentcalc" className="hover:underline">Investment Calculator</a></li>
                </ul>
            </nav>
        </header>
    );
}