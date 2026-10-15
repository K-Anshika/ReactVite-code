import React, { useState } from "react";
import { Link } from "react-router-dom";

// Log in , signup - name, email, pass, phone, add to cart ,............bar code scanner payment

export function Header1() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-white shadow-lg">

            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold text-blue-400 transition hover:text-blue-300"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Logo
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-2 sm:flex sm:gap-6">

                    <Link
                        to="/home1"
                        className="rounded-lg px-3 py-2 font-medium transition hover:bg-gray-800 hover:text-blue-400"
                    >
                        Home
                    </Link>

                    <Link
                        to="/fetchdata1"
                        className="rounded-lg px-3 py-2 font-medium transition hover:bg-gray-800 hover:text-blue-400"
                    >
                        Products
                    </Link>

                    <Link
                        to="/cart"
                        className="rounded-lg px-3 py-2 font-medium transition hover:bg-gray-800 hover:text-blue-400"
                    >
                        Cart
                    </Link>

                    <Link
                        to="/login"
                        className="rounded-lg px-3 py-2 font-medium transition hover:bg-gray-800 hover:text-blue-400"
                    >
                        Login
                    </Link>

                    <Link
                        to="/signup"
                        className="rounded-lg bg-blue-600 px-4 py-2 font-medium transition hover:bg-blue-700"
                    >
                        Signup
                    </Link>

                </nav>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="rounded-lg p-2 text-gray-300 hover:bg-gray-800 hover:text-white sm:hidden"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        // X Icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        // Hamburger Icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>

            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav className="border-t border-gray-700 bg-gray-900 px-4 pb-4 sm:hidden">

                    <div className="flex flex-col gap-2 pt-3">

                        <Link
                            to="/home1"
                            onClick={() => setIsMenuOpen(false)}
                            className="rounded-lg px-4 py-3 font-medium transition hover:bg-gray-800 hover:text-blue-400"
                        >
                            Home
                        </Link>

                        <Link
                            to="/fetchdata1"
                            onClick={() => setIsMenuOpen(false)}
                            className="rounded-lg px-4 py-3 font-medium transition hover:bg-gray-800 hover:text-blue-400"
                        >
                            Products
                        </Link>

                        <Link
                            to="/cart"
                            onClick={() => setIsMenuOpen(false)}
                            className="rounded-lg px-4 py-3 font-medium transition hover:bg-gray-800 hover:text-blue-400"
                        >
                            Cart
                        </Link>

                        <Link
                            to="/login"
                            onClick={() => setIsMenuOpen(false)}
                            className="rounded-lg px-4 py-3 font-medium transition hover:bg-gray-800 hover:text-blue-400"
                        >
                            Login
                        </Link>

                        <Link
                            to="/signup"
                            onClick={() => setIsMenuOpen(false)}
                            className="rounded-lg bg-blue-600 px-4 py-3 text-center font-medium transition hover:bg-blue-700"
                        >
                            Signup
                        </Link>

                    </div>
                </nav>
            )}

        </header>
    );
}