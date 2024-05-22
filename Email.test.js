const validarEmail = require('../js/js.js');

describe('Teste de validação de email', () => {
  test('Deve retornar verdadeiro para um email válido', () => {
    const emailValido = 'meuemail@example.com';
    expect(validarEmail(emailValido)).toBe(true);
  });

  test('Deve retornar falso para um email inválido', () => {
    const emailInvalido = 'meuemail@exemplo';
    expect(validarEmail(emailInvalido)).toBe(false);
  });

  test('Deve retornar falso para um email sem o "@"', () => {
    const emailSemArroba = 'meuemailexemplo.com';
    expect(validarEmail(emailSemArroba)).toBe(false);
  });

  test('Deve retornar falso para um email com caracteres inválidos', () => {
    const emailComCaracteresInvalidos = 'meu!email@example.com';
    expect(validarEmail(emailComCaracteresInvalidos)).toBe(false);
  });
});