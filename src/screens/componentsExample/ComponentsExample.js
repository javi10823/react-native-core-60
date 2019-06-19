// @flow

import * as React from 'react';
import colors from '../../utils/colors';

import Typography from '../../components/typography';
import Spacing from '../../components/spacing';
import {
  _Container,
  _ComponentsContainer,
  _ButtonSignUp,
  _ButtonSignIn,
  _ImageContainer,
  _ImageStyle,
} from './styled';

import { goBack } from '..';

type State = {||};

// comingFromOutside
type InternalProps = $ReadOnly<{||}>;

// comingFromConnect
type Props = $ReadOnly<{|
  ...InternalProps,
  componentId: string,
|}>;

class ComponentsExample extends React.Component<Props, State> {
  static options = (): * => ({ topBar: { visible: false, height: 0 } });

  render(): React.Node {
    const { componentId } = this.props;
    return (
      <_Container>
        <_ComponentsContainer>
          <Spacing size={32} />
          <_ButtonSignUp
            text="Go back"
            textColor={colors.global.principal}
            onPress={(): * => goBack(componentId)}
          />
          <Spacing />
          <Typography color={colors.global.white} size={18}>
            Typography example
          </Typography>
          <Spacing />
          <_ButtonSignIn text="BUTTON EXAMPLE 1" />
          <Spacing />
          <_ButtonSignUp text="BUTTON EXAMPLE 2" textColor={colors.global.principal} />
          <Spacing />
          <_ImageContainer>
            <_ImageStyle
              source={{
                uri: 'https://www.dropbox.com/s/0gfn7kvtwkfd9t0/AWS%20Pop-up%20Loft.jpg?dl=1',
              }}
            />
          </_ImageContainer>
        </_ComponentsContainer>
      </_Container>
    );
  }
}

export default ComponentsExample;
