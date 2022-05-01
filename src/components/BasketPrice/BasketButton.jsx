import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import basketSVG from '../../assets/basket_icon.svg'
import classes from "./BasketButton.module.scss";
import {NavLink} from "react-router-dom";
import {setOrderProduct} from "../../store/basketProduct";


const BasketButton = () => {
    const price = useSelector(store => store.basket.price);
    let basketPrice = price
    && price.toFixed(2) !== '0.00'
    && price.toFixed(2) !== '-0.00'
        ? price.toFixed(2)
        : null;
    return (
        <div className={classes.basketWrap}>
            <button
                type="button"
                className={classes.buttonBasket}
            >
                <NavLink to="/order">
                    <img src={basketSVG} className={classes.basketSVG} alt="basketIMG"/>
                    {basketPrice}
                </NavLink>

            </button>

        </div>
    );
};

export default BasketButton;