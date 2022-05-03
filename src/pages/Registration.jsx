import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import LangBtn from '../utils/helpers/LangBtn';

const Registration = ({ t }) => {
  const [titleName, setTitleName] = useState('');
  const [titlePassword, setTitlePassword] = useState('');

  function setRegisterValueLocalStorage(event) {
    event.preventDefault();
    localStorage.setItem('register', `${titleName}${titlePassword}`);
  }

  return (
    <div>
      <div className="header">
        <LangBtn />
        <div>
          {t('header.movie')}
        </div>
      </div>
      <div className="wrapLogin">
        <h2>{t('register.register')}</h2>
        <form>
          <input
            onChange={(event) => setTitleName(event.target.value)}
            type="text"
            placeholder={t('input.loginName')}
          />
          <input
            onChange={(event) => setTitlePassword(event.target.value)}
            type="password"
            placeholder={t('input.loginPass')}
          />
          <button type="button" onClick={setRegisterValueLocalStorage}>
            <NavLink to="/login">
              <p>{t('buttons.register')}</p>
            </NavLink>
          </button>
        </form>
        <p>
          {t('register.ask')}
          <NavLink to="/login">{t('register.prompt')}</NavLink>
        </p>
      </div>
      <div className="footer">
        <p>EPAM</p>
      </div>
    </div>
  );
};

Registration.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Registration);
