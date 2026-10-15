import React, { useState, useCallback } from "react";

const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
    { id: 4, name: "Keyboard", price: 1500 },
    { id: 5, name: "Mouse", price: 500 },
    { id: 6, name: "Monitor", price: 12000 }
];

export function PriceFilter() {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(50000);
    const [filteredProducts, setFilteredProducts] = useState(products);

    // useCallback keeps the function reference stable
    const filterProducts = useCallback(() => {
        const result = products.filter((product) => {
            return (
                product.price >= Number(minPrice) &&
                product.price <= Number(maxPrice)
                // product.price >= Number(minPrice) ||           ------------ not work logically correct
                // product.price <= Number(maxPrice)
            );
        });

        setFilteredProducts(result);
    // }, [minPrice, maxPrice]);
    }, [minPrice,maxPrice]);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Product Price Filter -</h2>

            <label>Minimum Price: ₹</label>
            <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
            />

            <br /><br />

            <label>Maximum Price: ₹</label>
            <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
            />

            <br /><br />

            <button onClick={filterProducts} className="bg-blue-900 text-amber-50 p-4 rounded-3xl ">
                Apply Filter
            </button><br /><br />

            <h3>Filtered Products :-</h3>

            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <div key={product.id}>
                        <h4>{product.name}</h4>
                        <p>Price: ₹{product.price.toLocaleString("en-IN")}</p>  
                        {/* // .toLocaleString("en-IN")  --- with this print values like 50,000    ----- else - 50000 */}
                    </div>
                ))
            ) : (
                <p>No products found in this price range.</p>
            )}
        </div>
    );
}