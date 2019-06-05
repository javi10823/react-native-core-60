import React, { Component } from 'react';

import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container, Text } from './styles';

class ReduxForm extends Component {
  render() {
    return (
      <Container>
        <Text>ReduxForm</Text>
      </Container>
    );
  }
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = store => ({
  // spaces: store.spaces.spaces,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // getAllSpacesConnected: getAllSpaces,
    },
    dispatch,
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ReduxForm),
);
