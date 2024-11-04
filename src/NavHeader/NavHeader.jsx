import { Link } from "react-router-dom";

export default function NavHeader() {

    return (
        <header className="NavBar">
            <Link to='/'>Homepage</Link>
            <Link to='shop'>Shop</Link>
        </header>
    )
}