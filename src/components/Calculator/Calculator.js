import React, { useState } from 'react';
import Button from '../Button/Button';
import './calculator.css';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const operatorsBtnColor = '#f4b848';
  const [result, setResult] = useState(0);

  const handleClick = (ev) => {
    setResult((prevState) => calculate(prevState, ev.target.innerText));
  };
  return (
    <div className="calculator-wrapper">
      <div className="display">{result.total || result.next || 0}</div>
      <div className="row">
        <Button symbole="AC" handleClick={handleClick} />
        <Button symbole="+/-" handleClick={handleClick} />
        <Button symbole="%" handleClick={handleClick} />
        <Button symbole="÷" color={operatorsBtnColor} handleClick={handleClick} />
      </div>
      <div className="row">
        <Button symbole="7" handleClick={handleClick} />
        <Button symbole="8" handleClick={handleClick} />
        <Button symbole="9" handleClick={handleClick} />
        <Button symbole="x" color={operatorsBtnColor} handleClick={handleClick} />
      </div>
      <div className="row">
        <Button symbole="4" handleClick={handleClick} />
        <Button symbole="5" handleClick={handleClick} />
        <Button symbole="6" handleClick={handleClick} />
        <Button symbole="-" color={operatorsBtnColor} handleClick={handleClick} />
      </div>
      <div className="row">
        <Button symbole="1" handleClick={handleClick} />
        <Button symbole="2" handleClick={handleClick} />
        <Button symbole="3" handleClick={handleClick} />
        <Button symbole="+" color={operatorsBtnColor} />
      </div>
      <div className="row">
        <Button symbole="0" flex="2.55" handleClick={handleClick} />
        <Button symbole="." handleClick={handleClick} />
        <Button symbole="=" color={operatorsBtnColor} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
