import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import LoginScreen from './Features/login/loginComponent';
import DashboardScreen from './Features/DashBoard/DashboardComponent';

const DashBoardStackNavigator = createStackNavigator({
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      header: null,
    },
  },
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {screen: LoginScreen},
  DashBoard: {
    screen: DashBoardStackNavigator,
  },
});

export const AppContainer = createAppContainer(AppSwitchNavigator);
