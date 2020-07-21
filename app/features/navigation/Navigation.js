import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { navigationRef } from './NavigationService';

import StackNavigator from './StackNavigator';
import DrawerContent from 'app/components/Drawer';

const Drawer = createDrawerNavigator();

const Navigation = (props) => {

  const isDark = props.dark;
  const toggleTheme = props.toggleTheme;

  return (
    <NavigationContainer ref={navigationRef} theme={props.theme}>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} dark={isDark} toggleTheme={toggleTheme}/>}>
        <Drawer.Screen name="Init" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
