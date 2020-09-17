import React, {Component} from 'react';
import appColors from '../../Theme/Colors';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Text,
} from 'react-native';

export default class HeaderComponent extends Component {
  passingActionToParent(data) {
    if (this.props.headerAction) {
      this.props.headerAction(data);
    }
  }
  render() {
    return (
      <View>
        <View style={{height: Platform.OS === 'ios' ? 0 : 20}}>
          <StatusBar
            barStyle="dark-content"
            hidden={false}
            backgroundColor="#e7e7e7"
            translucent={true}
            networkActivityIndicatorVisible={true}
          />
        </View>
        <View style={styles.headerContainer}>
          {this.props.headerLeftText ? (
            <TouchableOpacity
              onPress={() => this.passingActionToParent('leftAction')}
              style={styles.headerSectionLeft}>
              <Text style={styles.headerLeftText}>
                {this.props.headerLeftText}
              </Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.headerSectionLeft} />
          )}
          {this.props.headerCenterText ? (
            <View style={styles.headerSectionCenter}>
              <Text style={styles.headerCenterText}>
                {this.props.headerCenterText}
              </Text>
            </View>
          ) : (
            <View style={styles.headerSectionCenter} />
          )}
          {this.props.headerRightText ? (
            <TouchableOpacity
              onPress={() => this.passingActionToParent('rightAction')}
              style={styles.headerSectionRight}>
              <Text style={styles.headerRightText}>
                {this.props.headerRightText}
              </Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.headerSectionRight} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerCenterText: {
    color: appColors.stBlack,
    fontSize: 18,
    fontWeight: '500',
  },
  headerContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginHorizontal: 10,
  },
  headerLeftText: {
    color: appColors.stBlue,
    fontSize: 18,
  },
  headerRightText: {
    color: appColors.stBlue,
    fontSize: 18,
    fontWeight: '500',
  },
  headerSectionCenter: {
    alignItems: 'center',
    flex: 0.4,
  },
  headerSectionLeft: {
    alignItems: 'flex-start',
    flex: 0.2,
  },
  headerSectionRight: {
    alignItems: 'flex-end',
    flex: 0.4,
  },
});
