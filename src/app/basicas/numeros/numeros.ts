export function incrementar(numero: number): number {
  if (numero > 100) {
    return 100;
  } else {
    return numero + 1;
  }
}
