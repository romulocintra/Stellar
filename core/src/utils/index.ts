export { colors } from '../global/colors';
import properties from 'css-custom-properties';
import isHexColor from 'validator/lib/isHexColor';
import delay from 'async-delay';

import Tween, { Easing } from 'tweenkle';

export const blurringEase = (args: EaseParams): TweenInstance => {
  const tweenForward: TweenInstance = new Tween({
    start: args.start || 0,
    end: args.end || 10,
    duration: (args.duration || 350) / 2,
    ease: Easing.Quad.InOut,
    delay: args.delay || 0
  });

  const tweenBackward: TweenInstance = new Tween({
    start: args.end || 10,
    end: args.start || 0,
    duration: (args.duration || 350) / 2,
    ease: Easing.Quad.InOut,
    delay: args.delay || 0
  });

  tweenForward.on('tick', (cb_args) => {
    args.tick(cb_args)
  });

  tweenForward.on('complete', () => {
    tweenBackward.start()
    tweenForward.progress = 0;
  });

  tweenBackward.on('tick', (cb_args) => {
    args.tick(cb_args)
  });

  tweenBackward.on('complete', (cb_args) => {
    args.complete(cb_args);
    tweenBackward.progress = 0;
  });

  return tweenForward;
}

export function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

export {
  properties,
  isHexColor,
  delay
}
