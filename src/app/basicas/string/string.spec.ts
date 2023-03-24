// describe('Pruebas de Strings');
// it();

import { mensaje } from './string';

describe('Pruebas de strings', () => {
  it('Debe regresar un string', () => {
    const resp = mensaje('Juan');
    expect(typeof resp).toBe('string');
  });

  it('Debe retornar un saludo con el nombre enviado', () => {
    const nombre: string = 'Juan';
    const resp: string = mensaje(nombre);
    expect(resp).toContain(nombre);
  });
});
