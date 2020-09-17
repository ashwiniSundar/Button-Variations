import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import LoginScreen from './Features/login/loginComponent';
import DashboardScreen from './Features/DashBoard/DashboardComponent';
import ProfileScreen from './Features/MyProfileComponent/MyProfileComponent';
import SettingScreen from './Features/Settings/SettingsComponent';

const DashBoardStackNavigator = createStackNavigator(
  {
    Dashboard: {
      screen: DashboardScreen,
      navigationOptions: {
        header: null,
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null,
      },
    },
    Settings: {
      screen: SettingScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    defaultNavigationOptions: {},
  },
);

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {screen: LoginScreen},
  DashBoard: {
    screen: DashBoardStackNavigator,
  },
});

export const AppContainer = createAppContainer(AppSwitchNavigator);
