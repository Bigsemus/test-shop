import React from 'react';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const NavBar = ({ t }) => (
  <div>
    <nav className="nav">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? 'active-link' : 'link')}
      >
        {t('navBar.Home')}
      </NavLink>
    </nav>
  </div>
);

NavBar.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(NavBar);
