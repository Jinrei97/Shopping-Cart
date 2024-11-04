import { useState } from "react"

export default function ShopCard({ product, addToCart }) {
    const [count, setCount] = useState(0);

    const increaseDecreaseCount = (type='+') => {
        if (type === '-' && count > 0) setCount((n) => n - 1);
        if (type === '+') setCount((n) => n + 1);
    }

    const submitToCart = () => {
        if (count > 0) {
            addToCart(product.id, count);
            setCount(0);
        }
    }

    return (
        <div className="card">
            <div className='productInfo'>
                <img src={product.image} alt="" />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
            </div>
            <div className="buttons">
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