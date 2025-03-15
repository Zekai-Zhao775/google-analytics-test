import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white p-6 mt-auto">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-xl font-semibold">Nonprofit Organization</p>
                        <p className="text-sm mt-2">Making a difference in our community</p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <p className="text-sm">© {currentYear} Nonprofit Organization. All rights reserved.</p>
                        <div className="flex space-x-4">
                            <Link href="/privacy" className="text-sm hover:underline">Privacy Policy</Link>
                            <Link href="/terms" className="text-sm hover:underline">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 