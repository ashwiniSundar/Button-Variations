import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import appColors from '../../Theme/Colors';
import {connect} from 'react-redux';
import HeaderComponent from '../Header/headerComponent';

class DashboardComponent extends Component {
  static navigationOptions = {
    title: 'Dashboard',
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
          headerCenterText="DashBoard"
          headerRightText={'Hello ' + this.props.userName + '!'}
          headerAction={this.handleHeaderAction.bind(this)}
          {...this.props}
        />
        <View style={styles.subContainer}>
          <View style={styles.buttonSection}>
            <Text style={styles.heading}>4 Variations of a Button</Text>
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
    marginBottom: 10,
  },
  buttonSection: {
    alignItems: 'center',
    backgroundColor: appColors.stLightGrey,
    padding: 15,
  },
  heading: {
    fontSize: 18,
  },
  profileDetailsSection: {
    flex: 2,
    flexDirection: 'column',
  },
  staffDetailsSectionRow: {
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

export default connect(mapStateToProps)(DashboardComponent);
