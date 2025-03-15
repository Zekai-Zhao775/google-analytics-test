import Link from 'next/link';

const Navigation = () => {
    return (
        <nav className="bg-blue-700 text-white p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-2xl font-bold mb-4 md:mb-0">Nonprofit Organization</div>
                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 items-center">
                    <li><Link href="/" className="hover:underline">Home</Link></li>
                    <li><Link href="/about" className="hover:underline">About Us</Link></li>
                    <li><Link href="/events" className="hover:underline">Events</Link></li>
                    <li><Link href="/beneficiaries" className="hover:underline">Beneficiaries</Link></li>
                    <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
                    <li>
                        <Link href="/donate" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded">
                            Donate to Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation; 