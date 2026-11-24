import { SERVICE_NAME } from '../../src/index';

describe('test-internal-v2-backend', () => {
  it('should export SERVICE_NAME', () => {
    expect(SERVICE_NAME).toBe('test-internal-v2-backend');
  });
});