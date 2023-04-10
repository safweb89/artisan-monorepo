import { connectToDatabase } from './database';

describe('databse', () => {
  it('should work', () => {
    expect(connectToDatabase('user')).toEqual('databse');
  });
});
