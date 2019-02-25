const app = require('../../src/app');

describe('\'tagType\' service', () => {
  it('registered the service', () => {
    const service = app.service('tag-type');
    expect(service).toBeTruthy();
  });
});
