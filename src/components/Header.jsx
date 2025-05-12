export default function Header() {
    return (
        <header className="flex sticky top-0 w-full justify-between items-center p-4 bg-blue-500 text-white">
        <h1 className="text-2xl font-bold">Calculators</h1>
        <nav>
            <ul className="flex space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
        </nav>
        </header>
    );
}