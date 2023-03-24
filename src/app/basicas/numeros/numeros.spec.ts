import { incrementar } from './numeros';

describe('Pruebas de numeros', () => {
  it('Debe retorna 100 si el num ingresado es masyor a 100', () => {
    const res: number = incrementar(300);
    expect(res).toBe(100);
  });
  it('Debe retorna el numero ingresado + 1, si es menor a 100', () => {
    const res: number = incrementar(50);
    expect(res).toBe(51);
  });
});
