export default function Header() {
    return (
        <header className="flex sticky top-0 w-full justify-between items-center font-handjet p-4 px-10 bg-blue-500 text-white">
            <h1 className="text-4xl">Calculators</h1>
            <nav className="text-2xl">
                <ul className="flex space-x-8">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/basiccalc" className="hover:underline">Basic Calculator</a></li>
                    <li><a href="/investmentcalc" className="hover:underline">Investment Calculator</a></li>
                </ul>
            </nav>
        </header>
    );
}