import 'mocha';
import {expect} from 'chai';
import {main2} from '../../src/ejercicio-2/index';

describe('Función main que inicializa los objetos de la clases Article y Gestors', () => {
  it('main2("Sudeep") returns value "Sudeep D. Thepade" ', () => {
    expect(main2("Sudeep")).to.be.eql("Sudeep D. Thepade")
  });
});