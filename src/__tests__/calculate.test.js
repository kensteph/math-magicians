import calculate from '../logic/calculate';

describe('Calculate function', () => {
  // Arrange
  const obj = {
    total: null,
    next: null,
    operation: null,
  };
  it('AC button', () => {
    // Act
    obj.total = '23';
    const result = calculate(obj, 'AC');
    // Assert
    expect(result).not.toBeNull();
    expect(result.total).toBeNull();
  });
  it('Positive to negative number', () => {
    // Act
    obj.total = null;
    obj.next = '23';
    const result = calculate(obj, '+/-');
     // Assert
    expect(result.next).toBe('-23');
  });
  it('Positive to negative number', () => {
    // Act
    obj.total = null;
    obj.next = '23';
    const result = calculate(obj, '+/-');
    // Assert
    expect(result.next).toBe('-23');
  });
  it('Negative to positive number', () => {
    // Act
    obj.total = '-1804';
    obj.next = null;
    const result = calculate(obj, '+/-');
    // Assert
    expect(result.total).toBe('1804');
  });

  it('0 button', () => {
    // Act
    obj.total = null;
    obj.next = '0';
    const result = calculate(obj, '0');
    console.log(obj);
    // Assert
    expect(result.hasOwnProperty('total')).toBeFalsy();
  });

  it('if pressed an operation button and there is an existing operation', () => {
    // Act
    obj.next = '6'
    obj.operation = "+"
    obj.total = null;
    const result = calculate(obj, '+');
    
    // Assert
    expect(result.total).toBe(0);
    expect(result.operation).toBe('+');
  });
  it('for . button', () => {
    // Act
    const result1 = {total: null, next: '6', operation: '+'};
    const result = calculate(result1, '+');
    
    // Assert
    expect(result.total).toBe(0);
    expect(result.operation).toBe('+');
  });
});
