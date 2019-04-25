export { colors } from '../global/colors';
import properties from 'css-custom-properties';
import isHexColor from 'validator/lib/isHexColor';
import delay from 'async-delay';
import ResizeObserver from 'resize-observer-polyfill';
import Tween, { Easing } from 'tweenkle';
import focusWithin from 'focus-within'

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

export var shuffle = function (array) {
	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

export {
  properties,
  isHexColor,
  delay,
  ResizeObserver,
  focusWithin
}
