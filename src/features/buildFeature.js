import { isNil } from 'ramda';
import { validateFeature } from '../validations';
import { renderFeature } from '../render';

export default (name, possibleValues, allowNoArgument = false) => value => {
  if (!(isNil(value) && allowNoArgument)) {
    validateFeature(name, value, possibleValues);
  }
  return renderFeature(name, value);
};
