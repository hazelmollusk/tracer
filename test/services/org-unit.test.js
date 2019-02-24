const app = require('../../src/app');

describe('\'orgUnit\' service', () => {
  it('registered the service', () => {
    const service = app.service('org-unit');
    expect(service).toBeTruthy();
  });
});
