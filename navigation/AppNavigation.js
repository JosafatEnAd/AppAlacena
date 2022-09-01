import { createStackNavigator } from 'react-navigation-stack';
import App from '../src/App';

const AppNavigation=createStackNavigator(
    {
        App: { screen: App }
    },
    {
        initialRouteName: 'App'
    }
);

export default AppNavigation;