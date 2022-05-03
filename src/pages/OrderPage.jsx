import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import LangBtn from '../utils/helpers/LangBtn';
import LogOut from '../components/LogOut/LogOut';
import '../styles/App.scss';
import OrderUserForm from '../components/OrderUserForm/OrderUserForm';
import OrderProductList from '../components/OrderProductList/OrderProduct';

const OrderPage = ({ t }) => (
  <div>
    <div className="header">
      <div>
        {t('header.order')}
        <LangBtn />
        <LogOut />
      </div>
    </div>
    <div className="wrapOrderBlock">
      <OrderProductList />
      <OrderUserForm />
    </div>
    <div className="footer">
      <p>Svietoslav_Kovalchuk</p>
    </div>
  </div>
);

OrderPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(OrderPage);
