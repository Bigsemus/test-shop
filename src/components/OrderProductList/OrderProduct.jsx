import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import TotalProductList from '../TotalProductList/TotalProductList';
import classes from './OrderProduct.module.scss';

const OrderProduct = ({ t }) => {
  const totalPrice = useSelector((store) => store.basket.price);
  const totalProduct = useSelector((store) => store.basket.product);
  return (
    <div className={classes.wrapProductOrderList}>
      {totalProduct.length ? (
        <TotalProductList
          totalPrice={totalPrice}
          totalProduct={totalProduct}
        />
      ) : (
        <div className={classes.didNotChoose}>
          <p>
            {t('p.didNotChoose')}
          </p>
          <NavLink to="/">
            <button
              className={classes.doYouWant}
              type="button"
            >
              {t('buttons.doYouWant')}
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

OrderProduct.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(OrderProduct);
