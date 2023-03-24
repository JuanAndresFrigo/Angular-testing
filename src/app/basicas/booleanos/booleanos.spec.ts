import { usuarioLoggeado } from './booleanos';

describe('Pruebas de booleanos', () => {
  it('Debe regresar true', () => {
    const res = usuarioLoggeado();
    expect(res).toBeTrue();
  });
});
