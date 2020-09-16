import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';
import Svg, {Circle, Rect} from 'react-native-svg';

export default class Loader extends React.Component {
  render() {
    let opacity = this.props.opacity !== undefined ? this.props.opacity : 1;
    const color = this.props.color !== undefined ? this.props.color : 'red';

    return (
      <View
        style={{
          opacity: opacity,
          alignSelf: 'center',
          flex: 1,
          justifyContent: 'center',
        }}>
        <ActivityIndicator
          animating={true}
          color={color}
          size="large"
          // style={{ position: 'relative', top: 250 }}
        />
      </View>
    );
  }
}

export const DashboardLoader = () => {
  return (
    <View style={{position: 'relative', left: 20, top: 100, flex: 1}}>
      <SvgAnimatedLinearGradient height={'100%'} secondaryColor="#f75c51">
        <Rect
          x="0"
          y="0"
          rx="4"
          ry="4"
          width="68"
          height="10"
          fill="red"
          stroke="red"
        />
        <Rect x="230" y="0" rx="4" ry="4" width="68" height="10" fill="red" />
        <Rect x="0" y="30" rx="10" ry="10" width="300" height="150" />

        <Rect
          x="0"
          y="230"
          rx="4"
          ry="4"
          width="68"
          height="10"
          fill="red"
          stroke="red"
        />
        <Rect x="230" y="230" rx="4" ry="4" width="68" height="10" fill="red" />

        <Rect x="0" y="250" rx="10" ry="10" width="300" height="150" />
      </SvgAnimatedLinearGradient>
    </View>
    // <ScrollView style={{ position: 'relative', left: 20, top: 100, flex: 1, backgroundColor:"#fff" }}>
    //   <Shimmer animating={true}>
    //     <View style={{ width: '100%', height: 60, borderRadius: 15, backgroundColor: 'red' }}>
    //       {/* <Text>Hello</Text> */}
    //     </View>
    //   </Shimmer>
    // <View style={{marginTop:15}}>
    // <Shimmer>
    //     <View
    //       style={{
    //         width: '100%',
    //         height: 60,
    //         borderRadius: 15,
    //         backgroundColor: 'red',
    //       }}>
    //       {/* <Text>Hello</Text> */}
    //     </View>
    //   </Shimmer>
    // </View>

    // </ScrollView>
  );
};
