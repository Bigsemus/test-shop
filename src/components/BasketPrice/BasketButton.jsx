import React from 'react';
import {useSelector} from "react-redux";
import basketSVG from '../../assets/basket_icon.svg'
import classes from "./BasketButton.module.scss";
import {NavLink} from "react-router-dom";


const BasketButton = () => {
    const price = useSelector(store => store.basket.price);
    return (
        <div className={classes.basketWrap}>
            <button
                type="button"
                className={classes.buttonBasket}
            >
                <NavLink to="/order">
                    <img src={basketSVG} className={classes.basketSVG} alt="basketIMG"/>
                    {price ? price.toFixed(2) : null}
                </NavLink>

            </button>

        </div>
    );
};

export default BasketButton;