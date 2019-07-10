// @flow

import styled from 'styled-components';
import { responsiveSize, normalize } from '../../utils/dimensions';

export const Button = styled.TouchableOpacity(
  (props: Object): Object => ({
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: responsiveSize(5),
    paddingBottom: responsiveSize(5),
    borderRadius: responsiveSize(8),
    height: responsiveSize(55),
    alignItems: 'center',
    position: 'relative',
    ...props.style,
  }),
);

export const ButtonContent = styled.View(
  (props: Object): Object => ({
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: responsiveSize(5),
    paddingBottom: responsiveSize(5),
    borderRadius: responsiveSize(8),
    height: responsiveSize(55),
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    ...props.style,
  }),
);

export const Label = styled.Text(
  (props: Object): Object => ({
    textAlign: 'center',
    fontSize: normalize(15),
    fontWeight: '400',
    ...props.style,
  }),
);

export const Icon = styled.View(
  (props: Object): Object => ({
    paddingTop: responsiveSize(10),
    paddingBottom: responsiveSize(10),
    marginRight: responsiveSize(20),
    ...props.style,
  }),
);

export const TextContainer = styled.View(
  (props: Object): Object => ({
    paddingHorizontal: responsiveSize(40),
    ...props.style,
  }),
);

export const SpinnerContainer = styled.View(
  (props: Object): Object => ({
    height: responsiveSize(55),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    ...props.style,
  }),
);

export const IconRight = styled.View(
  (props: Object): Object => ({
    paddingTop: responsiveSize(10),
    paddingBottom: responsiveSize(10),
    marginLeft: responsiveSize(32),
    ...props.style,
  }),
);
