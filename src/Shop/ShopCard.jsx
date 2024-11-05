import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import classes from './shop.module.css';

export default function ShopCard({ product, addToCart }) {
    const [count, setCount] = useState(0);

    const increaseDecreaseCount = (type='+') => {
        if (type === '-' && count > 0) setCount((n) => n - 1);
        if (type === '+') setCount((n) => Number(n) + 1);
    }

    const submitToCart = () => {
        if (count > 0) {
            addToCart(product.id, Number(count));
            setCount(0);
        }
    }

    useEffect(() => {
        if (count < 0) setCount(0);
    }, [count]);

    ShopCard.propTypes = {
        product: PropTypes.object,
        addToCart: PropTypes.func,
    }

    return (
        <div className={classes.productCard}>
            <div className={classes.productInfo}>
                <img src={product.image} alt="" />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
            </div>
            <div className={classes.buttons}>
                <button onClick={() => increaseDecreaseCount('-')}>-</button>
                <input
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                />
                <button onClick={() => increaseDecreaseCount()}>+</button>
                <button 
                    onClick={() => submitToCart()}
                >Add to cart</button>
            </div>
        </div>
    )
}