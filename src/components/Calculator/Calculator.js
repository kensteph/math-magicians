import React from 'react';
import Button from '../Button/Button';
import './calculator.css';

const Calculator = () => {
  const operatorsBtnColor = '#f4b848';
  return (
    <div className="calculator-wrapper">
      <div className="display">0</div>
      <div className="row">
        <Button symbole="AC" />
        <Button symbole="+/-" />
        <Button symbole="%" />
        <Button symbole="÷" color={operatorsBtnColor} />
      </div>
      <div className="row">
        <Button symbole="7" />
        <Button symbole="8" />
        <Button symbole="9" />
        <Button symbole="x" color={operatorsBtnColor} />
      </div>
      <div className="row">
        <Button symbole="4" />
        <Button symbole="5" />
        <Button symbole="6" />
        <Button symbole="-" color={operatorsBtnColor} />
      </div>
      <div className="row">
        <Button symbole="1" />
        <Button symbole="2" />
        <Button symbole="3" />
        <Button symbole="+" color={operatorsBtnColor} />
      </div>
      <div className="row">
        <Button symbole="0" flex="2.55" />
        <Button symbole="." />
        <Button symbole="=" color={operatorsBtnColor} />
      </div>
    </div>
  );
};

export default Calculator;
