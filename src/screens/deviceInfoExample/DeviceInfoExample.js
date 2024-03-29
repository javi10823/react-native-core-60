// @flow

import * as React from 'react';
import DeviceInfo from 'react-native-device-info';

import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container, Content } from './styled';
import { BackButton, Spacing, Typography } from '../../components';

import { goBack } from '..';
import colors from '../../utils/colors';

type State = {||};

// comingFromOutside
type InternalProps = {||};

// comingFromConnect
type Props = {|
  ...InternalProps,
  componentId: string,
|};

class DeviceInfoExample extends React.Component<Props, State> {
  render(): React.Node {
    const { componentId } = this.props;

    const textColor = colors.primaryText();

    return (
      <Container>
        <BackButton onPress={(): * => goBack(componentId)} text="Device info example" />
        <Content>
          <Typography
            color={textColor}
            size={13}
          >{`DeviceInfo.getApplicationName() ->`}</Typography>
          <Typography color={textColor} size={15} bold>
            {DeviceInfo.getApplicationName()}
          </Typography>
          <Spacing />
          <Typography color={textColor} size={13}>{`DeviceInfo.getBuildNumber() ->`}</Typography>
          <Typography color={textColor} size={15} bold>
            {DeviceInfo.getBuildNumber()}
          </Typography>
          <Spacing />
          <Typography color={textColor} size={13}>{`DeviceInfo.getBundleId() ->`}</Typography>
          <Typography color={textColor} size={15} bold>
            {DeviceInfo.getBundleId()}
          </Typography>
          <Spacing />
          <Typography color={textColor} size={13}>{`DeviceInfo.getDeviceName() ->`}</Typography>
          <Typography color={textColor} size={15} bold>
            {DeviceInfo.getDeviceName()}
          </Typography>
          <Spacing />
          <Typography color={textColor} size={13}>{`DeviceInfo.getTimezone() ->`}</Typography>
          <Typography color={textColor} size={15} bold>
            {DeviceInfo.getTimezone()}
          </Typography>
          <Spacing />
          <Typography color={textColor} size={13}>{`DeviceInfo.isEmulator() ->`}</Typography>
          <Typography color={textColor} size={15} bold>
            {String(DeviceInfo.isEmulator())}
          </Typography>
          <Spacing />
          <Typography color={textColor} size={13}>{`DeviceInfo.getDeviceType() ->`}</Typography>
          <Typography color={textColor} size={15} bold>
            {DeviceInfo.getDeviceType()}
          </Typography>
          <Spacing />
        </Content>
      </Container>
    );
  }
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: *): * => ({
  themeSelected: state.theme.themeSelected,
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
