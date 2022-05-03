import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withTranslation } from 'react-i18next';
import PropTypes, { shape } from 'prop-types';
import { setBasketProduct } from '../../store/basketProduct';
import classes from './ProductItem.module.scss';

const ProductItem = ({ product, t }) => {
  const dispatch = useDispatch();
  const allProductsInBasket = useSelector((state) => state.basket.product);
  const totalPriseInBasket = useSelector((state) => state.basket.price);

  localStorage.setItem('order', JSON.stringify(allProductsInBasket));
  localStorage.setItem('price', totalPriseInBasket);

  const isProductChoosed = allProductsInBasket.some((item) => item.id === product.id);

  function addMovieToBasket(prod, price) {
    const copyProduct = { ...prod };
    copyProduct.countProduct = 1;
    const productDetails = {
      product: copyProduct,
      price,
    };
    dispatch(setBasketProduct(productDetails));
  }

  return (
    <div className={classes.productCardWrap}>
      <div className={classes.productCard}>
        <div className={classes.titleContent}>
          <div>{product.title}</div>
        </div>
        <img
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w200/${product.poster_path}`}
          alt="poster"
        />
        <p className={classes.productOverview}>
          {product.overview}
        </p>
      </div>
      <button
        type="button"
        className={
          isProductChoosed ? classes.btnPriceDisabled : classes.btnPriceBuy
        }
        onClick={() => addMovieToBasket(product, product.vote_average)}
        disabled={isProductChoosed}
      >
        {isProductChoosed
          ? t('buttons.bought')
          : t('buttons.buy')}
        :
        {
          product.vote_average
        }
        $
      </button>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.arrayOf(shape({
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
  })),
};

ProductItem.defaultProps = {
  product: PropTypes.array,
};

ProductItem.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(ProductItem);
