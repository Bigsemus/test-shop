import React, { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { getValueIsAuth } from '../store/userData';
import LangBtn from '../utils/helpers/LangBtn';

const LogIn = ({ t }) => {
  const [loginName, setLoginName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isAuthLogin, setIsAuthLogin] = useState(false);
  const dispatch = useDispatch();

  function setLoginValue(e) {
    localStorage.setItem('login', `${loginName}${loginPassword}`);
    e.preventDefault();
    const register = localStorage.getItem('register');
    const login = localStorage.getItem('login');
    if (login && register === null) { // eslint-disable-next-line
      alert('Sorry, you don\'t register :(');
    } else if (login !== register) { // eslint-disable-next-line
      alert('Maybe you forgot Password or Login ? You can register now :)');
    } else if (register !== null && login !== null && register === login) {
      setIsAuthLogin(true);
      dispatch(getValueIsAuth(true));
    }
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
        {
          isAuthLogin
            ? <Navigate to="/" />
            : <h2>{t('login.login')}</h2>
        }
        <form>
          <input
            onChange={
              (event) => setLoginName(event.target.value)
            }
            type="text"
            placeholder={t('input.loginName')}
          />
          <input
            onChange={(event) => setLoginPassword(event.target.value)}
            type="password"
            placeholder={t('input.loginPass')}
          />
          <button
            type="button"
            onClick={(event) => setLoginValue(event)}
          >
            {t('buttons.login')}
          </button>
        </form>
        <p>
          {t('login.ask')}
          <NavLink to="/login/register">
            {t('login.prompt')}
          </NavLink>
        </p>
      </div>
      <div className="footer">
        <p>Svietoslav_Kovalchuk</p>
      </div>
    </div>
  );
};

LogIn.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(LogIn);
