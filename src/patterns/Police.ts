import { IPattern } from './IPattern';

const Police: IPattern = {
  name: 'Police',
  colors: [[255, 0, 0], [0, 0, 255]],
  delay: 100,
  loop: true,
  colorFunc: _ => _
};

export { Police };
