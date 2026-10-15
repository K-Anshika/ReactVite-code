import React from "react";

export function Home1() {
    return (
        <div className="min-h-screen bg-gray-100">

            {/* Hero Section */}
            <section className="flex min-h-[500px] items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 px-4">
                <div className="max-w-3xl text-center text-white">

                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                        Welcome to Our Store
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100 sm:text-xl">
                        Discover amazing products at the best prices.
                        Shop easily and enjoy a great shopping experience.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

                        <a
                            href="/products"
                            className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 shadow-lg transition hover:bg-gray-100"
                        >
                            Explore Products
                        </a>

                        <a
                            href="/signup"
                            className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-600"
                        >
                            Create Account
                        </a>

                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="mx-auto max-w-7xl px-4 py-16">

                <h2 className="text-center text-3xl font-bold text-gray-800">
                    Why Choose Us?
                </h2>

                <div className="mt-10 grid gap-6 md:grid-cols-3">

                    {/* Feature 1 */}
                    <div className="rounded-xl bg-white p-6 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
                            🛒
                        </div>

                        <h3 className="mt-4 text-xl font-semibold text-gray-800">
                            Easy Shopping
                        </h3>

                        <p className="mt-2 text-gray-500">
                            Browse and purchase your favorite products easily.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="rounded-xl bg-white p-6 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
                            🚚
                        </div>

                        <h3 className="mt-4 text-xl font-semibold text-gray-800">
                            Fast Delivery
                        </h3>

                        <p className="mt-2 text-gray-500">
                            Get your products delivered quickly and safely.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="rounded-xl bg-white p-6 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 text-2xl">
                            🔒
                        </div>

                        <h3 className="mt-4 text-xl font-semibold text-gray-800">
                            Secure Payment
                        </h3>

                        <p className="mt-2 text-gray-500">
                            Your payment information is protected and secure.
                        </p>
                    </div>

                </div>
            </section>

            {/* Loading Spinner Example */}
            <section className="flex justify-center pb-16">

                <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>

            </section>

        </div>
    );
}