import { obtenerRobots } from './arreglos';

describe('Pruebas de areglos', () => {
  it('Debe retornar al menos 3 robots', () => {
    const res = obtenerRobots();
    expect(res.length).toBeGreaterThanOrEqual(3);
  });
  it('Debe contener a Megaman y Ultron', () => {
    const res = obtenerRobots();
    expect(res).toContain('Megaman');
    expect(res).toContain('Ultron');
  });
});
