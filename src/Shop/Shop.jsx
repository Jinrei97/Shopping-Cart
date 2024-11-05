import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import NavHeader from "../NavHeader/NavHeader"
import ShopCard from "./ShopCard";

import classes from './shop.module.css';
import linkClass from '../NavHeader/navHeader.module.css';

export default function Shop() {
    const [shopCounter, setShopCounter] = useState(0);
    const [cart, setCart] = useState({});

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

    const addToCart = (id, count) => {
        setShopCounter((n) => n + count);
        setCart((c) => {
            console.log('test keys: ', Object.keys(c));
            if (Object.keys(c).find((n) => n === `${id}`)) {
                return {
                    ...c,
                    [id]: {
                        id: [id],
                        count: c[id].count + count,
                    }
                }
            } else {
                return {
                    ...c,
                    [id]: {
                        id: [id],
                        count: count,
                    }
                }
            }
        })
    }

    return (
        <div>
            <NavHeader>
                <div className={classes.displayCounter}>{shopCounter}</div>
                <Link
                    className={linkClass.link}
                    to='/shop/checkout'
                    >Checkout
                </Link>
            </NavHeader>
            
            <div>
                <div>showingCart</div>
                {Object.keys(cart).length > 0 && Object.keys(cart).reduce((cartDivs, key) => {
                    cartDivs.push(
                        <div key={cart[key].id}>{cart[key].id}: {cart[key].count}</div>
                    );
                    return cartDivs;
                }, [])}
            </div>

            <div className={classes.products}>
                {Array.isArray(products) &&
                    products.map((product) => {
                        return (
                            <ShopCard
                                key={product.id}
                                product={product}
                                addToCart={(id, count) => addToCart(id, count)}
                            />
                        )
                    })}
                {loading && <p>Loading shop data</p>}
                {error && <p>The following error has occurred {error}</p>}
            </div>
        </div>
    )
}