import React from 'react';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import classes from './LogOut.module.scss';

const LogOut = ({ t }) => {
  function removeStorage() {
    localStorage.removeItem('login');
  }

  return (
    <NavLink to="/login">
      <button
        type="button"
        className={classes.logOut}
        onClick={removeStorage}
      >
        {t('logout.logout')}
      </button>
    </NavLink>
  );
};

LogOut.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(LogOut);
