export default function Header() {
    return (
        <header className="flex sticky top-0 w-full justify-between items-center p-4 bg-blue-500 text-white">
        <h1 className="text-2xl font-bold">Calculators</h1>
        <nav>
            <ul className="flex space-x-8">
            <li><a href="#basic" className="hover:underline">Basic Calculator</a></li>
            <li><a href="#investment" className="hover:underline">Investment Calculator</a></li>
            <li><a href="#mortgage" className="hover:underline">Mortgage Calculator</a></li>
            </ul>
        </nav>
        </header>
    );
}