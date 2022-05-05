import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { Navigate, NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { getValueOrderForm } from '../../store/userData';
import classes from './OrderUserForm.module.scss';

const OrderUserForm = ({ t }) => {
  const dispatch = useDispatch();
  const [isDispatched, setIsDispatched] = useState(false);
  const allProductsInBasket = useSelector((state) => state.basket.product);
  const totalPriseInBasket = useSelector((state) => state.basket.price);
  const productLength = allProductsInBasket.length;
  const onSubmitForm = (formValue) => {
    const orderDataFormSubmit = [
      {
        total: totalPriseInBasket.toFixed(2),
        user: formValue,
        order: allProductsInBasket,
      },
    ];
    dispatch(getValueOrderForm(orderDataFormSubmit));
    setIsDispatched(true);
  };
  return (
    <div>
      <div className={classes.wrapOrder}>
        <Formik
          initialValues={
            {
              name: '', surname: '', address: '', phone: '',
            }
          }
          onSubmit={(formValue) => {
            onSubmitForm(formValue);
          }}
        >
          <Form>
            <Field id="name" name="name" placeholder={t('input.name')} />
            <Field id="surname" name="surname" placeholder={t('input.surname')} />
            <Field id="address" name="address" placeholder={t('input.address')} />
            <Field id="phone" name="phone" placeholder={t('input.phone')} />
            {isDispatched && <Navigate to="/success" />}
            <div className={classes.wrapBtnFormSubmit}>
              <button
                className={productLength < 1 ? classes.btnDisabled : classes.btn}
                type="submit"
                disabled={productLength < 1}
              >
                {t('buttons.submit')}
              </button>
              <NavLink to="/">
                <button
                  className={classes.btn}
                  type="button"
                >
                  {t('buttons.back')}
                </button>
              </NavLink>
            </div>

          </Form>
        </Formik>
      </div>
    </div>
  );
};

OrderUserForm.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(OrderUserForm);
