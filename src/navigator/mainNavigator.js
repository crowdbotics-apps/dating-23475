import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile186970Navigator from '../features/UserProfile186970/navigator';
import Settings186969Navigator from '../features/Settings186969/navigator';
import Settings186967Navigator from '../features/Settings186967/navigator';
import SignIn2186965Navigator from '../features/SignIn2186965/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile186970: { screen: UserProfile186970Navigator },
Settings186969: { screen: Settings186969Navigator },
Settings186967: { screen: Settings186967Navigator },
SignIn2186965: { screen: SignIn2186965Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
