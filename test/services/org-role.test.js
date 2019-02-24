const app = require('../../src/app');

describe('\'orgRole\' service', () => {
  it('registered the service', () => {
    const service = app.service('org-role');
    expect(service).toBeTruthy();
  });
});
