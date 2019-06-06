/* eslint-disable camelcase */
/* eslint-disable react/require-default-props */
import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import fonts from '../../utils/fonts';
import { normalize } from '../../utils/dimensions';

class Typography extends React.Component {
  render() {
    const {
      color: color_props,
      children: children_props,
      textAlign: textAlign_props,
      style: style_props,
      size: size_props,
      font: font_props,
      bold: bold_props,
      ...props
    } = this.props;

    // ─────default props────────────────────────────────────────────────────────────
    const checkIfUndefined = (valueFromProps, defaultValue) =>
      valueFromProps === undefined ? defaultValue : valueFromProps;

    const color = checkIfUndefined(color_props, 'white');
    const children = checkIfUndefined(children_props, 'TEXT');
    const textAlign = checkIfUndefined(textAlign_props, 'center');
    const style = checkIfUndefined(style_props, {});
    const size = checkIfUndefined(size_props, normalize(11));
    const font = checkIfUndefined(font_props, undefined);
    const bold = checkIfUndefined(bold_props, false);

    // ─────default props────────────────────────────────────────────────────────────

    return (
      <Text
        {...props}
        style={[
          {
            color,
            fontSize: size,
            textAlign,
            fontFamily: font || fonts.regular,
          },
          bold
            ? {
                fontFamily: fonts.bold,
              }
            : null,
          style,
        ]}
      >
        {children}
      </Text>
    );
  }
}

Typography.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  textAlign: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  size: PropTypes.number,
  font: PropTypes.string,
  bold: PropTypes.bool,
};

// Typography.defaultProps = {
//   color: colors.white,
//   textAlign: 'center',
//   style: {},
//   size: normalize(11),
//   font: undefined,
//   bold: false,
// };

export default Typography;
