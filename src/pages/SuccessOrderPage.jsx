import React from 'react';
import { useSelector } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { getDatabase, ref, set } from 'firebase/database';
import PropTypes from 'prop-types';
import LangBtn from '../utils/helpers/LangBtn';
import LogOut from '../components/LogOut/LogOut';
import NavBar from '../components/NavBar/NavBar';

const SuccessOrderPage = ({ t }) => {
  const dataUserOrder = useSelector((store) => store.user.userData);

  function writeOrderData(data, userId) {
    const db = getDatabase();
    set(ref(db, `success/${userId}`), {
      order: data,
      user: userId,
    }) // eslint-disable-next-line
      .catch(console.error);
  }

  writeOrderData(dataUserOrder[0], dataUserOrder[0].user.name);

  return (
    <div>
      <div className="header">
        <div>
          {t('header.success')}
          <LangBtn />
          <NavBar />
          <LogOut />
        </div>
      </div>
      <p className="yourOrder">Your order:</p>
      <pre>
        {JSON.stringify(dataUserOrder, null, 2)}
      </pre>
      <div className="footer">
        <p>Svietoslav_Kovalchuk</p>
      </div>
    </div>
  );
};

SuccessOrderPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(SuccessOrderPage);
