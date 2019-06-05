/* eslint-disable react/prop-types */
import React from 'react';
import colors from '../../utils/colors';

import Typography from '../../components/typography';
import Spacing from '../../components/spacing';
import {
  Container,
  ComponentsContainer,
  ButtonSignUp,
  ButtonSignIn,
  ImageContainer,
  ImageStyle,
} from './styles';

import { goBack } from '..';

class Welcome extends React.Component {
  static options = () => ({ topBar: { visible: false, height: 0 } });

  render() {
    const { componentId } = this.props;
    return (
      <Container>
        <ComponentsContainer>
          <Spacing size={32} />
          <ButtonSignUp
            text="Go back"
            textColor={colors.global.principal}
            onPress={() => goBack(componentId)}
          />
          <Spacing />
          <Typography color={colors.global.white} size={18}>
            Typography example
          </Typography>
          <Spacing />
          <ButtonSignIn text="BUTTON EXAMPLE 1" />
          <Spacing />
          <ButtonSignUp text="BUTTON EXAMPLE 2" textColor={colors.global.principal} />
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

export default Welcome;
