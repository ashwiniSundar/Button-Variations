// Settings component with device platform details using device info library
import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, Text, Platform} from 'react-native';
import appColors from '../../Theme/Colors';
import {connect} from 'react-redux';
import HeaderComponent from '../Header/headerComponent';
import Constants from '../../Features/Constants.json';
import DeviceInfo from 'react-native-device-info';

class SettingsComponent extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }
  handleHeaderAction = action => {
    if (action === 'leftAction') {
      this.props.navigation.goBack();
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          headerLeftText="back"
          headerCenterText="Settings"
          headerRightText={'Hello ' + this.props.userName + '!'}
          headerAction={this.handleHeaderAction.bind(this)}
          {...this.props}
        />

        <View style={styles.subContainer}>
          <View style={styles.headSection}>
            <Text style={styles.headerText}>
              {Constants.loginConstants.device}
            </Text>
          </View>
          <View style={styles.profileDetailsSection}>
            <View style={styles.SectionRow}>
              <View style={styles.leftTextSection}>
                <Text style={styles.leftText}>
                  {Constants.loginConstants.platform}
                </Text>
              </View>
              <View style={styles.rightTextSection}>
                <Text style={styles.leftText}>
                  {Platform.OS === 'android'
                    ? 'Android'
                    : Platform.OS === 'ios'
                    ? 'IOS'
                    : '--:--'}
                </Text>
              </View>
            </View>

            <View style={styles.SectionRow}>
              <View style={styles.leftTextSection}>
                <Text style={styles.leftText}>
                  {Constants.loginConstants.appRunning}
                </Text>
              </View>
              <View style={styles.rightTextSection}>
                <Text style={styles.leftText}>
                  {DeviceInfo.isEmulatorSync()
                    ? 'Emulator'
                    : DeviceInfo.getModel()}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.stGreyBackground,
  },
  subContainer: {
    flex: 1,
    backgroundColor: appColors.stWhite,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  headSection: {
    alignItems: 'center',
    backgroundColor: appColors.stLightGrey,
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    fontSize: 18,
  },

  profileDetailsSection: {
    flex: 2,
    flexDirection: 'column',
  },
  SectionRow: {
    flexDirection: 'row',
    marginLeft: 20,
    paddingRight: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: appColors.stGreyBackground,
  },
  leftTextSection: {
    flex: 0.4,
  },
  leftText: {
    fontSize: 16,
    color: appColors.stTextGrey,
  },
  rightTextSection: {
    flex: 0.6,
  },
});
const mapStateToProps = state => ({
  userName: state.LoginReducer.userName,
});

export default connect(mapStateToProps)(SettingsComponent);
