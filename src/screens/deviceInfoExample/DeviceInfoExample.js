import React, { Component } from 'react';
import DeviceInfo from 'react-native-device-info';

import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container, Content } from './styles';
import BackButton from '../../components/backButton/BackButton';
import Spacing from '../../components/spacing/Spacing';
import Typography from '../../components/typography';

import { goBack } from '..';

class DeviceInfoExample extends Component {
  render() {
    const { componentId } = this.props; // eslint-disable-line react/prop-types
    return (
      <Container>
        <BackButton onPress={() => goBack(componentId)} text="rn device info example" />
        <Content>
          <Typography size={13}>{`DeviceInfo.getApplicationName() ->`}</Typography>
          <Typography size={15} bold>
            {DeviceInfo.getApplicationName()}
          </Typography>
          <Spacing />
          <Typography size={13}>{`DeviceInfo.getBuildNumber() ->`}</Typography>
          <Typography size={15} bold>
            {DeviceInfo.getBuildNumber()}
          </Typography>
          <Spacing />
          <Typography size={13}>{`DeviceInfo.getBundleId() ->`}</Typography>
          <Typography size={15} bold>
            {DeviceInfo.getBundleId()}
          </Typography>
          <Spacing />
          <Typography size={13}>{`DeviceInfo.getDeviceName() ->`}</Typography>
          <Typography size={15} bold>
            {DeviceInfo.getDeviceName()}
          </Typography>
          <Spacing />
          <Typography size={13}>{`DeviceInfo.getTimezone() ->`}</Typography>
          <Typography size={15} bold>
            {DeviceInfo.getTimezone()}
          </Typography>
          <Spacing />
          <Typography size={13}>{`DeviceInfo.isEmulator() ->`}</Typography>
          <Typography size={15} bold>
            {String(DeviceInfo.isEmulator())}
          </Typography>
          <Spacing />
          <Typography size={13}>{`DeviceInfo.getDeviceType() ->`}</Typography>
          <Typography size={15} bold>
            {DeviceInfo.getDeviceType()}
          </Typography>
          <Spacing />
        </Content>
      </Container>
    );
  }
}

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
  )(DeviceInfoExample),
);
