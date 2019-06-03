import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import layout from '../../utils/layout';

const Spacing = ({ size, horizontal, spacing }) => {
  const spacingSize = spacing ? layout.spacing[spacing] : size;
  return !horizontal ? (
    <View style={{ height: spacingSize, width: '100%' }} />
  ) : (
    <View style={{ height: '100%', width: spacingSize }} />
  );
};

Spacing.propTypes = {
  spacing: PropTypes.string,
  size: PropTypes.number,
  horizontal: PropTypes.bool,
};

Spacing.defaultProps = {
  spacing: 'semiThin',
  horizontal: false,
  size: 10,
};

export default Spacing;
