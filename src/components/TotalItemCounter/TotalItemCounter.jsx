import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addProduct, delProduct } from '../../store/basketProduct';
import classes from './TotalItemCounter.module.scss';

const TotalItemCounter = ({ product }) => {
  const dispatch = useDispatch();
  const copyProduct = { ...product };
  const allProductsInBasket = useSelector((state) => state.basket.product);
  const totalPriseInBasket = useSelector((state) => state.basket.price);
  localStorage.setItem('order', JSON.stringify(allProductsInBasket));
  localStorage.setItem('price', totalPriseInBasket);

  const incrementProduct = () => {
    copyProduct.countProduct += 1;
    dispatch(addProduct(copyProduct));
  };
  const decrementProduct = () => {
    copyProduct.countProduct -= 1;
    dispatch(delProduct(copyProduct));
  };

  return (
    <div>
      <div className={classes.countPrice}>
        Price:
        {product.vote_average}
        $
      </div>
      <div className={classes.wrapCounter}>
        <button
          type="button"
          onClick={decrementProduct}
        >
          -
        </button>
        <div className={classes.count}>{copyProduct.countProduct}</div>
        <button
          type="button"
          onClick={incrementProduct}
        >
          +
        </button>
      </div>
    </div>
  );
};

TotalItemCounter.propTypes = {
  product: PropTypes.shape({
    vote_average: PropTypes.number,
  }),
};

TotalItemCounter.defaultProps = {
  product: PropTypes.array,
};

export default TotalItemCounter;
