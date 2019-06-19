// @flow

import * as React from 'react';
import DeviceInfo from 'react-native-device-info';

import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { _Container, _Content } from './styled';
import { BackButton, Spacing, Typography } from '../../components';

import { goBack } from '..';

type State = {||};

// comingFromOutside
type InternalProps = $ReadOnly<{||}>;

// comingFromConnect
type Props = $ReadOnly<{|
  ...InternalProps,
  componentId: string,
|}>;

class DeviceInfoExample extends React.Component<Props, State> {
  render(): React.Node {
    const { componentId } = this.props;
    return (
      <_Container>
        <BackButton
          onPress={() => {
            goBack(componentId);
          }}
          text="rn device info example"
        />
        <_Content>
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
        </_Content>
      </_Container>
    );
  }
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: *): * => ({
  // spaces: store.spaces.spaces,
});

const mapDispatchToProps = (dispatch: *): * =>
  bindActionCreators(
    {
      // getAllSpacesConnected: getAllSpaces,
    },
    dispatch,
  );

export default compose(
  connect<Props, InternalProps, *, *, *, *>(
    mapStateToProps,
    mapDispatchToProps,
  )(DeviceInfoExample),
);
