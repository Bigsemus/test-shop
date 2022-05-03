import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import basketSVG from '../../assets/basket_icon.svg';
import classes from './BasketButton.module.scss';

const BasketButton = () => {
  const price = useSelector((store) => store.basket.price);
  const basketPrice = price
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
          <img src={basketSVG} className={classes.basketSVG} alt="basketIMG" />
          {basketPrice}
        </NavLink>

      </button>

    </div>
  );
};

export default BasketButton;
