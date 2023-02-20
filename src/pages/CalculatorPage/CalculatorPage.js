import React from 'react';
import './calculator.module.css';
import Calculator from '../../components/Calculator/Calculator';

const CalculatorPage = () => (
  <div className="wrapper">
    <h2>Let &apos s do some math!</h2>
    <Calculator />
  </div>
);

export default CalculatorPage;
