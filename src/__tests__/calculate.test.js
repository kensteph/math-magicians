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
    // Asset
    expect(result).not.toBeNull();
    expect(result.total).toBeNull();
  });
  it('Positive to negative number', () => {
    // Act
    obj.total = null;
    obj.next = '23';
    const result = calculate(obj, '+/-');
    // Asset
    expect(result.next).toBe('-23');
  });
  it('Positive to negative number', () => {
    // Act
    obj.total = null;
    obj.next = '23';
    const result = calculate(obj, '+/-');
    // Asset
    expect(result.next).toBe('-23');
  });
  it('Negative to positive number', () => {
    // Act
    obj.total = '-1804';
    obj.next = null;
    const result = calculate(obj, '+/-');
    // Asset
    expect(result.total).toBe('1804');
  });
});
