import 'chai';
import {expect} from 'chai';
import {add} from '../src/ejercicio-1';

describe('add function tests', () => {
  it('add(1, 8) returns value 9', () => {
    expect(add(1, 8)).to.be.equal(9);
  })
})