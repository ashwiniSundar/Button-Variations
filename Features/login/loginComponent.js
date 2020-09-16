import * as React from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import appColors from '../../Theme/Colors';
import {connect} from 'react-redux';
import {loginActions} from '../../redux/actions/LoginAction';
import Loader from '../../Features//LoaderComponent/LoaderComponent';
import Constants from '../../Features/Constants.json';
import {CustomAlert} from '../../Features/CustomAlert/customAlertComponent';
import Navigation from '../../NavigationService';

class LoginComponent extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userPwd: '',
      loader: false,
    };
  }

  _authenticationAPICall = () => {
    if (this.state.userName !== '' && this.state.userPwd !== '') {
      this.props.sendLoginDetails(this.state.userName);
      //this.setState({loader: true});
      Navigation.navigate('Dashboard');
    } else {
      if (this.state.userName === '' && this.state.userPwd === '') {
        CustomAlert('Login', 'Please enter username and password.');
      } else {
        if (this.state.userName === '') {
          CustomAlert('Login', 'Please enter username.');
        }
        if (this.state.userPwd === '') {
          CustomAlert('Login', 'Please enter password.');
        }
      }
      this.setState({loader: false});
    }
  };

  render() {
    return (
      <View style={styles.maincontainerView}>
        <SafeAreaView style={styles.maincontainer}>
          {this.state.loader ? (
            <Loader color="red"></Loader>
          ) : (
            <View style={styles.container}>
              <StatusBar
                barStyle="dark-content"
                backgroundColor={appColors.stWhite}
              />
              <View style={[styles.logoSection, {justifyContent: 'flex-end'}]}>
                <View style={styles.logo}>
                  <Text
                    style={
                      (styles.contentSectionText,
                      {
                        textAlign: 'center',
                        fontSize: 30,
                        color: '#4646ff',
                        textShadowColor: '#4646ff',
                        textShadowRadius: 1,
                      })
                    }>
                    {Constants.loginConstants.button}
                  </Text>
                </View>
              </View>
              <View style={styles.logoSection}></View>
              <View style={styles.inputFieldShadow}>
                <View style={styles.inputFieldSection}>
                  <TextInput
                    style={styles.userName}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    // keyboardType="email-address"
                    returnKeyType="next"
                    placeholder="Username"
                    placeholderTextColor={appColors.stGrey}
                    onChangeText={userInput => {
                      this.setState({
                        userName: userInput,
                      });
                    }}
                    value={this.state.userName}
                  />

                  <TextInput
                    style={styles.password}
                    autoCapitalize="none"
                    returnKeyType="go"
                    ref={input => (this.passwordInput = input)}
                    placeholder="Password"
                    onChangeText={passInput => {
                      this.setState({
                        userPwd: passInput,
                      });
                    }}
                    placeholderTextColor={appColors.stGrey}
                    secureTextEntry
                    value={this.state.userPwd}
                  />
                </View>
              </View>
              <View style={styles.buttonSection}>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => this._authenticationAPICall()}>
                  <Text style={styles.buttonText}>
                    {Constants.loginConstants.login}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          {this.state.loader ? (
            <></>
          ) : (
            <View style={styles.LogoAndVersionContainer}>
              <View>
                <Text>{Constants.loginConstants.version}</Text>
              </View>
            </View>
          )}
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maincontainerView: {
    flex: 1,
  },
  maincontainer: {
    flex: 1,
    backgroundColor: appColors.stWhite,
  },
  container: {
    flex: 1,
    backgroundColor: appColors.stWhite,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  logoSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logo: {
    flexDirection: 'row',
  },
  contentSection: {
    justifyContent: 'center',
  },
  contentSectionText: {
    textAlign: 'center',
    color: appColors.stTextGrey,
    fontSize: 20,
  },
  inputFieldShadow: {
    borderColor: appColors.stGrey,
    borderWidth: 0.5,
    borderRadius: 20,
    marginHorizontal: 15,
    marginBottom: 30,
  },
  inputFieldSection: {
    paddingLeft: 20,
  },
  userName: {
    height: 57,
    fontSize: 16,
    borderBottomColor: appColors.stGrey,
    borderBottomWidth: 0.5,
    paddingHorizontal: 5,
  },
  password: {
    height: 57,
    fontSize: 16,
    paddingHorizontal: 5,
  },
  buttonSection: {
    marginHorizontal: 20,
  },
  buttonContainer: {
    backgroundColor: appColors.stBlue,
    paddingVertical: 15,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    color: appColors.stWhite,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  LogoAndVersionContainer: {
    alignItems: 'center',
    paddingVertical: 5,
  },
});

const mapStateToProps = state => ({
  userLoggedin: state.LoginReducer,
});
const mapDisptachToProps = {
  sendLoginDetails: loginActions.sendAuthenticatedData,
};

export default connect(mapStateToProps, mapDisptachToProps)(LoginComponent);
