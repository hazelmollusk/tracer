const { expect } = require('chai');
const plugin = require('../lib');

describe('artifact-tracer', () => {
  it('basic functionality', () => {
    expect(typeof plugin).to.equal('function', 'It worked');
    expect(plugin()).to.equal('artifact-tracer');
  });
});
