const app = require('../../src/app');

describe('\'artifact\' service', () => {
  it('registered the service', () => {
    const service = app.service('artifact');
    expect(service).toBeTruthy();
  });
});
