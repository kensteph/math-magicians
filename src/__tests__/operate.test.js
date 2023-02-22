import operate from '../logic/operate';

describe('Operate function', () => {
  // Arrange
  const number1 = 8;
  const number2 = 5;
  it('Addition', () => {
    // Act
    const result = operate(number1, number2, '+');
    // Assert
    expect(result).toBe('13');
  });
});
