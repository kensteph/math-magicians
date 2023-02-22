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
});
