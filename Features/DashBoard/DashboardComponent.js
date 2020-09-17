import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import appColors from '../../Theme/Colors';
import {connect} from 'react-redux';
import HeaderComponent from '../Header/headerComponent';
import Constants from '../../Features/Constants.json';
import {SlideButton, SlideDirection} from '../SlideButton';
import DeviceModal from '../DeviceModal/ModalComponent';
import {LogBox} from 'react-native';
import DeviceInfo from 'react-native-device-info';

class DashboardComponent extends Component {
  static navigationOptions = {
    title: 'Dashboard',
  };

  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
  }
  componentDidMount() {
    this.setState({openModal: !this.state.openModal});
  }
  render() {
    LogBox.ignoreAllLogs();
    return (
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          headerCenterText="DashBoard"
          headerRightText={'Hello ' + this.props.userName + '!'}
        />
        <View style={styles.subContainer}>
          <View style={styles.buttonSection}>
            <Text style={styles.heading}>
              {Constants.loginConstants.dashboardHeading}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profile')}
              style={styles.buttonSubContainer}>
              <Animatable.Text
                animation="tada"
                easing="ease-out"
                iterationCount="infinite"
                style={styles.buttonText}>
                {Constants.loginConstants.myProfile}
              </Animatable.Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Settings')}
              style={styles.buttonSubContainer}>
              <Animatable.Text
                animation="swing"
                easing="ease-out"
                iterationCount="infinite"
                style={styles.buttonText}>
                {Constants.loginConstants.settings}
              </Animatable.Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Welcome')}
              style={styles.buttonSubContainer}>
              <Animatable.Text
                animation="rubberBand"
                easing="ease-out"
                iterationCount="infinite"
                style={styles.buttonText}>
                {Constants.loginConstants.logout}
              </Animatable.Text>
            </TouchableOpacity>
          </View>
          <View style={styles.SliderBtn}>
            <SlideButton
              onSlideSuccess={() => {
                alert('Slider Button Success');
              }}
              slideDirection={SlideDirection.RIGHT}>
              <Animatable.Text
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite"
                style={styles.buttonText}>
                {Constants.loginConstants.slide}
              </Animatable.Text>
            </SlideButton>
          </View>
        </View>
        {this.state.openModal ? (
          <DeviceModal
            heading={'Device Info'}
            body={'App is running on ' + DeviceInfo.getModel()}
            loadModal={this.state.openModal}
            onCancelAction={() => {
              this.setState({openModal: !this.state.openModal});
            }}></DeviceModal>
        ) : null}
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
    marginHorizontal: 20,
    margin: 20,
  },
  buttonSection: {
    alignItems: 'center',
    backgroundColor: appColors.stLightGrey,
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  heading: {
    fontSize: 18,
  },
  buttonContainer: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSubContainer: {
    backgroundColor: appColors.stGrey,
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: appColors.stWhite,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  SliderBtn: {
    backgroundColor: appColors.stGrey,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 80,
    height: 55,
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

export default connect(mapStateToProps)(DashboardComponent);
