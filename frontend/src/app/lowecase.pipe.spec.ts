import { LowecasePipe } from './lowecase.pipe';

describe('LowecasePipe', () => {
  it('create an instance', () => {
    const pipe = new LowecasePipe();
    expect(pipe).toBeTruthy();
  });
});
