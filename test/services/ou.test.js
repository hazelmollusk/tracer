const app = require('../../src/app');

describe('\'ou\' service', () => {
  it('registered the service', () => {
    const service = app.service('ou');
    expect(service).toBeTruthy();
  });
});
