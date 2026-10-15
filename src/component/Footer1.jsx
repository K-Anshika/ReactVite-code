import React from "react";
import { Link } from "react-router-dom";

export function Footer1() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="mx-auto max-w-7xl px-4 py-10">

                {/* Footer Navigation */}
                <div className="flex flex-wrap justify-center gap-6 border-b border-gray-700 pb-8">

                    <Link
                        to="/"
                        className="text-gray-300 transition hover:text-blue-400"
                    >
                        Home
                    </Link>

                    <Link
                        to="/products"
                        className="text-gray-300 transition hover:text-blue-400"
                    >
                        Products
                    </Link>

                    <Link
                        to="/cart"
                        className="text-gray-300 transition hover:text-blue-400"
                    >
                        Cart
                    </Link>

                    <Link
                        to="/login"
                        className="text-gray-300 transition hover:text-blue-400"
                    >
                        Login
                    </Link>

                    <Link
                        to="/signup"
                        className="text-gray-300 transition hover:text-blue-400"
                    >
                        Signup
                    </Link>

                </div>

                {/* Logo / Description */}
                <div className="py-6 text-center">
                    <h2 className="text-2xl font-bold text-blue-400">
                        Logo
                    </h2>

                    <p className="mt-2 text-sm text-gray-400">
                        Your trusted online shopping destination.
                    </p>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 pt-6 text-center">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Logo. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}