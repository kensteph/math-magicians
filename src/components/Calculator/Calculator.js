import React, { useState } from 'react';
import Button from '../Button/Button';
import './calculator.css';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [result, setResult] = useState(0);

  const handleClick = (ev) => {
    setResult((prevState) => calculate(prevState, ev.target.innerText));
  };
  return (
    <div className="calculator-wrapper">
      <div className="display">{result.next || result.total || 0}</div>
      <div className="row">
        <Button symbole="AC" handleClick={handleClick} />
        <Button symbole="+/-" handleClick={handleClick} />
        <Button symbole="%" handleClick={handleClick} />
        <Button symbole="÷" className="operatorBtn" handleClick={handleClick} />
      </div>
      <div className="row">
        <Button symbole="7" handleClick={handleClick} />
        <Button symbole="8" handleClick={handleClick} />
        <Button symbole="9" handleClick={handleClick} />
        <Button symbole="x" className="operatorBtn" handleClick={handleClick} />
      </div>
      <div className="row">
        <Button symbole="4" handleClick={handleClick} />
        <Button symbole="5" handleClick={handleClick} />
        <Button symbole="6" handleClick={handleClick} />
        <Button symbole="-" className="operatorBtn" handleClick={handleClick} />
      </div>
      <div className="row">
        <Button symbole="1" handleClick={handleClick} />
        <Button symbole="2" handleClick={handleClick} />
        <Button symbole="3" handleClick={handleClick} />
        <Button symbole="+" className="operatorBtn" handleClick={handleClick} />
      </div>
      <div className="row">
        <Button symbole="0" className="zeroBtn" handleClick={handleClick} />
        <Button symbole="." handleClick={handleClick} />
        <Button symbole="=" className="operatorBtn" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
