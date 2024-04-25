import React, { useState, useEffect } from 'react';
import blog from './assets/blog.jpg';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons for menu and close buttons

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="py-4 bg-red-800 text-white font-bold sticky-top">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div>
                    <img src={blog} alt="Logo" className="h-20 w-30" />
                </div>

                {/* Navbar Links (Desktop) */}
                <div className="hidden md:flex justify-center flex-grow">
                    <a href="#" className="text-white px-4 py-2 hover:text-blackish">Home</a>
                    <a href="#" className="text-white px-4 py-2 hover:text-blackish">Menu</a>
                    <a href="#" className="text-white px-4 py-2 hover:text-blackish">Order</a>
                    <a href="#" className="text-white px-4 py-2 hover:text-blackish">Contact Us</a>
                </div>

                {/* Menu Icon (Mobile) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        {isMenuOpen ? <FiX className="h-8 w-8 fill-current" /> : <FiMenu className="h-8 w-8 fill-current" />}
                    </button>
                </div>

                {/* Dropdown Content */}
                {isMenuOpen && (
                    <div className="fixed top-0 left-0 w-full h-full text-black p-4 bg-white z-50">
                        <div className="flex justify-end">
                            <button onClick={toggleMenu} className="text-black focus:outline-none">
                                <FiX className="h-8 w-8 fill-current" />
                            </button>
                        </div>
                        <div className="mt-10 flex flex-col items-center">
                            <a href="#" className="block py-4 text-xl hover:text-bluish border-b border-gray-400">Home</a>
                            <a href="#" className="block py-4 text-xl hover:text-bluish border-b border-gray-400">Menu</a>
                            <a href="#" className="block py-4 text-xl hover:text-bluish">Order</a>
                            <a href="#" className="block py-4 text-xl hover:text-bluish">Contact Us</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;

