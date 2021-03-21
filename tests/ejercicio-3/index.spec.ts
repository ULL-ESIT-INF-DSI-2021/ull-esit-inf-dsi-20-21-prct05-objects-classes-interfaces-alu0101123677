import 'mocha';
import {expect} from 'chai';
import {main3} from '../../src/ejercicio-3/index';

describe('Función main que inicializa el objeto de la clase Street y un vector de los diversos vehiculos', () => {
  it('main3() returns value 2', () => {
    expect(main3()).to.be.equal(2)
  });

});