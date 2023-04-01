import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';

const cliente = new Cliente('Leonardo', '13804050', '123224');
const cliente2 = new Cliente('María', '16979808', '8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente,'1','001');
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002');

console.log(cuentaDeLeonardo);
console.log(cuentaDeMaria);

console.log(cuentaDeLeonardo.cantidadCuentas);