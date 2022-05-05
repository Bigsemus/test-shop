import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const LangBtn = ({ i18n }) => (
  <div className="langBtn">
    <select
      onChange={(event) => {
        // eslint-disable-next-line no-unused-expressions
        event.target.value === 'Ukraine' ? i18n.changeLanguage('ua') : i18n.changeLanguage('en');
      }}
    >
      <option value="English">English</option>
      <option value="Ukraine">Ukraine</option>
    </select>
  </div>
);

LangBtn.propTypes = {
  i18n: PropTypes.shape({
    changeLanguage: PropTypes.func,
  }),
};

LangBtn.defaultProps = {
  i18n: PropTypes.bool,
};

export default withTranslation()(LangBtn);
