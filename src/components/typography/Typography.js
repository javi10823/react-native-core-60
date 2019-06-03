import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import fonts from '../../utils/fonts';
import colors from '../../utils/colors';
import { normalize } from '../../utils/dimensions';

const Typography = ({ color, children, textAlign, style, size, font, bold, ...props }) => (
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

Typography.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  textAlign: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  size: PropTypes.number,
  font: PropTypes.string,
  bold: PropTypes.bool,
};

Typography.defaultProps = {
  color: colors.white,
  textAlign: 'center',
  style: {},
  size: normalize(11),
  font: undefined,
  bold: false,
};

export default Typography;
