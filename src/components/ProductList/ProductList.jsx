import React from 'react';
import PropTypes, { shape } from 'prop-types';
import ProductItem from '../ProductItem/ProductItem';
import classes from './ProductList.module.scss';
import BasketButton from '../BasketPrice/BasketButton';

const ProductList = (
  {
    products,
  },
) => {
  if (!products.length) {
    return (
      <h1 className={classes.comingSoon}>
        Coming soon ;)
      </h1>
    );
  }
  return (
    <div className={classes.wrapLibraryProduct}>
      <BasketButton />
      {products.map((product) => (
        <ProductItem
          product={product}
          key={product.id}
        />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(shape({
    length: PropTypes.number,
    id: PropTypes.number,
  })),
};

ProductList.defaultProps = {
  products: PropTypes.array,
};

export default ProductList;
