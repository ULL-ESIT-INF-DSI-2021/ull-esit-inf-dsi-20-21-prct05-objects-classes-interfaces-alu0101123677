import 'mocha';
import {expect} from 'chai';
import {main} from '../../src/ejercicio-1/index';

describe('Función main del programa que inicializa los objetos de las clase pokemon y combat', () => {
  it('main(5, 2) returns value 1', () => {
    expect(main(5, 2)).to.be.equal(1)
  });
  it('main(2, 5) returns value 1', () => {
    expect(main(2, 5)).to.be.equal(2)
  });
  it('main(0, 2) returns value 1', () => {
    expect(main(0, 2)).to.be.equal(2)
  });
});