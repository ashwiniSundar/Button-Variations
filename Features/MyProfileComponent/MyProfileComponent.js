import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import appColors from '../../Theme/Colors';
import {connect} from 'react-redux';
import {LogBox} from 'react-native';
import HeaderComponent from '../Header/headerComponent';
import Constants from '../../Features/Constants.json';

class MyProfileComponent extends Component {
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
    LogBox.ignoreAllLogs();
    return (
      <SafeAreaView style={styles.container}>
        <HeaderComponent
          headerLeftText="back"
          headerCenterText="My Profile"
          headerRightText={'Hello ' + this.props.userName + '!'}
          headerAction={this.handleHeaderAction.bind(this)}
          {...this.props}
        />

        <View style={styles.subContainer}>
          <View style={styles.profileDetailsSection}>
            <View style={styles.SectionRow}>
              <View style={styles.leftTextSection}>
                <Text style={styles.leftText}>
                  {Constants.loginConstants.userName}
                </Text>
              </View>
              <View style={styles.rightTextSection}>
                <Text style={styles.leftText}>{this.props.userName}</Text>
              </View>
            </View>

            <View style={styles.SectionRow}>
              <View style={styles.leftTextSection}>
                <Text style={styles.leftText}>
                  {Constants.loginConstants.emailId}
                </Text>
              </View>
              <View style={styles.rightTextSection}>
                <Text style={styles.leftText}>
                  {this.props.userName + '@abc.com'}
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

export default connect(mapStateToProps)(MyProfileComponent);
