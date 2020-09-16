import React, {Component} from 'react';

import {Platform, StyleSheet, View, Image} from 'react-native';

export default class Splash extends Component {
  render() {
    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <Image
            source={{
              uri:
                'https://reactnativecode.com/wp-content/uploads/2018/01/welcome.png',
            }}
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          />
        </View>
      </View>
    );

    return <View style={styles.MainContainer}>{Splash_Screen}</View>;
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  SplashScreen_ChildView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BCD4',
    flex: 1,
    margin: 20,
  },
});
