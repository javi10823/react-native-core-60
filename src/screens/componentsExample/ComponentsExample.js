// @flow

import * as React from 'react';

import { Typography, Spacing } from '../../components';
import {
  Container,
  ComponentsContainer,
  ButtonSignUp,
  ButtonSignIn,
  ImageContainer,
  ImageStyle,
} from './styled';

import { goBack } from '..';

type State = {||};

// comingFromOutside
type InternalProps = {||};

// comingFromConnect
type Props = {|
  ...InternalProps,
  componentId: string,
|};

class ComponentsExample extends React.Component<Props, State> {
  static options = (): * => ({ topBar: { visible: false, height: 0 } });

  render(): React.Node {
    const { componentId } = this.props;
    return (
      <Container>
        <ComponentsContainer>
          <Spacing size={32} />
          <ButtonSignUp text="Go back" onPress={(): * => goBack(componentId)} />
          <Spacing />
          <Typography size={18}>Typography example</Typography>
          <Spacing />
          <ButtonSignIn text="BUTTON EXAMPLE 1" />
          <Spacing />
          <ButtonSignUp text="BUTTON EXAMPLE 2" />
          <Spacing />
          <ImageContainer>
            <ImageStyle
              source={{
                uri: 'https://www.dropbox.com/s/0gfn7kvtwkfd9t0/AWS%20Pop-up%20Loft.jpg?dl=1',
              }}
            />
          </ImageContainer>
        </ComponentsContainer>
      </Container>
    );
  }
}

export default ComponentsExample;
