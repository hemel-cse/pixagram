import React from 'react';
import color from 'color';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme } from 'react-native-paper';

import Home from 'app/screens/Home';
import Editors from 'app/screens/Editors';
import Search from 'app/screens/Search';
import Saved from 'app/screens/Saved';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {

  const theme = useTheme();


  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      activeColor={theme.colors.surface}
      inactiveColor={color(theme.colors.text)
            .alpha(0.6)
            .rgb()
            .string()}
      barStyle={{ backgroundColor: theme.colors.accent }}
      shifting={true}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: 'home-account',
        }}
      />
      <Tab.Screen
        name="Editors"
        component={Editors}
        options={{
          tabBarIcon: 'star-box-outline',
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: 'image-search-outline',
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarIcon: 'content-save-all-outline',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs
