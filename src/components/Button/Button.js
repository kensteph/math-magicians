import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({
  symbole, color, flex, handleClick,
}) => (
  <button
    type="button"
    style={{ background: `${color}`, flex: `${flex}` }}
    onClick={handleClick}
  >
    {symbole}
  </button>
);

Button.propTypes = {
  symbole: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  flex: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
