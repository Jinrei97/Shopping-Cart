import { useState } from "react"
import { Link } from "react-router-dom";
import NavHeader from "../NavHeader/NavHeader"

export default function Shop() {
    const [shopCounter, setShopCounter] = useState(0);

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
            <p>test shop</p>
        </div>
    )
}