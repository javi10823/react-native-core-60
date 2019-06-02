import { string, number, oneOfType, arrayOf, objectOf, func } from 'prop-types';

// ==============
// REACT TYPES
// ==============

const objectOfStringNum = objectOf(oneOfType([string, number]));

const styleObjectType = objectOf(oneOfType([string, number, objectOfStringNum]));

export const styleType = oneOfType([styleObjectType, arrayOf(styleObjectType)]);

export const componentType = oneOfType([string, func]);

export default {
  styleType,
  componentType,
};
