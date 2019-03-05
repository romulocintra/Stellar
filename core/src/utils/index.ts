export { colors } from '../global/colors';
import properties from 'css-custom-properties';
import isHexColor from 'validator/lib/isHexColor';

export function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

export {
  properties,
  isHexColor
}
