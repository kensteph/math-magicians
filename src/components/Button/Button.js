import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({ symbole, className, handleClick }) => (
  <button type="button" className={className} onClick={handleClick}>
    {symbole}
  </button>
);

Button.propTypes = {
  symbole: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = { className: '' };

export default Button;
