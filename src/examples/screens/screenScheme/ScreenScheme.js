// @flow

import * as React from 'react';
import { bindActionCreators, compose } from 'redux';

import { connect } from 'react-redux';

import { Container, SubContainer } from './styled';
import { Typography } from '../../../components';

type State = {|
  loading: boolean,
|};

// comingFromOutside
type InternalProps = {||};

// comingFromConnect
type Props = {|
  ...InternalProps,
  componentId: string,
|};

class ScreenScheme extends React.Component<Props, State> {
  state = { loading: false };

  render(): React.Node {
    const { loading } = this.state;
    const { componentId } = this.props;
    return (
      <Container>
        <SubContainer loading={loading} componentId={componentId}>
          <Typography>ScreenScheme</Typography>
        </SubContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state: *): * => ({
  themeSelected: state.theme.themeSelected,
});

const mapDispatchToProps = (dispatch: *): * =>
  bindActionCreators(
    {
      // logInConnected: logIn,
    },
    dispatch,
  );

export default compose(
  connect<Props, InternalProps, *, *, *, *>(
    mapStateToProps,
    mapDispatchToProps,
  )(ScreenScheme),
);
