// @flow

import styled from 'styled-components';
import { responsiveSize } from '../../utils/dimensions';

type Props = {|
  style: Object,
|};

export const _Button = styled.TouchableOpacity(
  (props: Props): Object => ({
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 8,
    height: 55,
    alignItems: 'center',
    position: 'relative',
    ...props.style,
  }),
);

export const _ButtonContent = styled.View(
  (props: Props): Object => ({
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

export const _Label = styled.Text(
  (props: Props): Object => ({
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    ...props.style,
  }),
);

export const _Icon = styled.View(
  (props: Props): Object => ({
    paddingTop: responsiveSize(10),
    paddingBottom: responsiveSize(10),
    marginRight: responsiveSize(20),
    ...props.style,
  }),
);

export const _TextContainer = styled.View(
  (props: Props): Object => ({
    paddingHorizontal: responsiveSize(40),
    ...props.style,
  }),
);

export const _SpinnerContainer = styled.View(
  (props: Props): Object => ({
    height: responsiveSize(55),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    ...props.style,
  }),
);

export const _IconRight = styled.View(
  (props: Props): Object => ({
    paddingTop: responsiveSize(10),
    paddingBottom: responsiveSize(10),
    marginLeft: responsiveSize(32),
    ...props.style,
  }),
);
