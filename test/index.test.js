const { expect } = require('chai');
const plugin = require('../lib');

describe('feathersjs-couchbase', () => {
  it('basic functionality', () => {
    expect(typeof plugin).to.equal('function', 'It worked');
    expect(plugin()).to.equal('feathersjs-couchbase');
  });
});