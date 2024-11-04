import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import NavHeader from "../NavHeader/NavHeader"
import ShopCard from "./ShopCard";

export default function Shop() {
    const [shopCounter, setShopCounter] = useState(0);
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFakeData = async () => {
            try {
            const data = await ((await fetch('https://fakestoreapi.com/products')).json())
            setProducts(data);
            setError(null);
            } catch (err) {
                setError(err);
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchFakeData();
    }, [])

    return (
        <div>
            <NavHeader>
                <div className="displayCounter">{shopCounter}</div>
                <Link
                    className="btnCheckout"
                    to='/shop/checkout'
                    >Checkout
                </Link>
            </NavHeader>

            {Array.isArray(products) && 
                products.map((product) => {
                    return (
                        <ShopCard 
                            key={product.id} 
                            product={product}
                            addToCart={(count) => setShopCounter((n) => n + count)} 
                        />
                    )
                })}
            {loading && <p>Loading shop data</p>}
            {error && <p>The following error has occurred {error}</p>}
        </div>
    )
}