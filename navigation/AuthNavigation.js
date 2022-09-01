import { createStackNavigator } from "react-navigation-stack";
import App from "../src/App";
import Agregar from "../src/screens/Agregar/Agregar";


const AuthNavigation=createStackNavigator(
    {
        App: { screen: App },
        Agregar: { screen: Agregar },
        Register: { screen: Register },
        Home: { screen: Home },
    },
    {
        initialRouteName: 'App',
        headerMode: 'none'
    }
);

export default AuthNavigation