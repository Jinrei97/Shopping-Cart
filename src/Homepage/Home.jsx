import homepageImg from "../assets/HomepageImage.png";
import NavHeader from "../NavHeader/NavHeader";
import classes from './home.module.css';

export default function Homepage() {

    return (
        <div className={classes.home}>
            <NavHeader />
            <img src={homepageImg} alt="" />
            <p>Shopping cart - React toy project</p>
        </div>
    )
}