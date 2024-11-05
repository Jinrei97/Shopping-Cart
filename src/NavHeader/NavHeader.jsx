import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import classes from './navHeader.module.css';

export default function NavHeader({ children }) {

    NavHeader.propTypes = {
        children: PropTypes.node,
    }

    return (
        <header className={classes.navBar}>
            <Link to='/' className={classes.link}>Homepage</Link>
            <Link to='/shop' className={classes.link}>Shop</Link>
            {children}
        </header>
    )
}