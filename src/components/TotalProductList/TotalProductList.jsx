import React from 'react';
import PropTypes, { shape } from 'prop-types';
import classes from './TotalProductList.module.scss';
import TotalItem from '../TotalItem/TotalItem';

const TotalProductList = ({ totalPrice, totalProduct }) => {
  const price = totalProduct.length === 0 ? null : totalPrice.toFixed(2);
  return (
    <div>
      <div>
        {totalProduct.map((product) => (
          <TotalItem
            product={product}
            key={product.id}
          />
        ))}
        <p className={classes.totalPrice}>
          TOTAL:
          {price}
          $
        </p>
      </div>
    </div>
  );
};

TotalProductList.propTypes = {
  totalProduct: PropTypes.arrayOf(shape({
    id: PropTypes.number,
  })),
  totalPrice: PropTypes.number,
};

TotalProductList.defaultProps = {
  totalProduct: PropTypes.array,
  totalPrice: PropTypes.number,
};

export default TotalProductList;
