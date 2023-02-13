import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({ symbole, color, flex }) => (
  <button type="button" style={{ background: `${color}`, flex: `${flex}` }}>
    {symbole}
  </button>
);

Button.propTypes = {
  symbole: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  flex: PropTypes.string.isRequired,
};

export default Button;
