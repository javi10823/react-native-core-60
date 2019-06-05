import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { responsiveSize } from '../../utils/dimensions';

const Spacing = ({ size, horizontal }) => {
  return !horizontal ? (
    <View style={{ height: responsiveSize(size), width: '100%' }} />
  ) : (
    <View style={{ height: '100%', width: responsiveSize(size) }} />
  );
};

Spacing.propTypes = {
  size: PropTypes.number,
  horizontal: PropTypes.bool,
};

Spacing.defaultProps = {
  horizontal: false,
  size: 12,
};

export default Spacing;
