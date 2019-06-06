/* eslint-disable react/require-default-props */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { responsiveSize } from '../../utils/dimensions';

class Spacing extends React.Component {
  render() {
    const { size: size_props, horizontal: horizontal_props } = this.props;

    // ─────default props────────────────────────────────────────────────────────────
    const checkIfUndefined = (valueFromProps, defaultValue) =>
      valueFromProps === undefined ? defaultValue : valueFromProps;

    const size = checkIfUndefined(size_props, 12);
    const horizontal = checkIfUndefined(horizontal_props, false);
    // ─────default props────────────────────────────────────────────────────────────

    if (horizontal) {
      return <View style={{ height: '100%', width: responsiveSize(size) }} />;
    }
    return <View style={{ height: responsiveSize(size), width: '100%' }} />;
  }
}

Spacing.propTypes = {
  size: PropTypes.number,
  horizontal: PropTypes.bool,
};

// Spacing.defaultProps = {
//   horizontal: false,
//   size: 12,
// };

export default Spacing;
