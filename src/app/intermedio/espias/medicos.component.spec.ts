import { from, Observable, of, EMPTY, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;
  // const servicio = new MedicosService(null);
  const spy = jasmine.createSpyObj('HttpClient', { get: of({}) });
  const servicio = new MedicosService(spy);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });

  it('Init: Debe cargar los medicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return from([medicos]);
    });

    componente.ngOnInit();
    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('Debe llamas al servidor para agregar un medico', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake((medico) => {
      return EMPTY;
    });
    componente.agregarMedico();
    expect(espia).toHaveBeenCalled();
  });

  it('Debe agregar un nuevo medico al arreglo de medicos', () => {
    const medico = { id: 1, nombre: 'Juan' };
    spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));
    componente.agregarMedico();
    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla la adicion, la propiedad mensajeError debe ser igual al error del servicio', () => {
    const miError = 'No se pudo agregar el medico';
    spyOn(servicio, 'agregarMedico').and.returnValue(
      throwError(() => new Error(miError))
    );
    componente.agregarMedico();
    expect(componente.mensajeError).toBe(miError);
  });

  it('Debe llamar al servidor para borrar un medico', () => {
    spyOn(window, 'confirm').and.returnValue(true)
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);
    componente.borrarMedico('1');
    expect(espia).toHaveBeenCalledWith('1')
  });

  it('No debe llamar al servidor para borrar un medico', () => {
    spyOn(window, 'confirm').and.returnValue(false)
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);
    componente.borrarMedico('1');
    expect(espia).not.toHaveBeenCalledWith('1')
  });
});
