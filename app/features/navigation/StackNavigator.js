import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Appbar, Avatar, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import BottomTabs from './BottomTabs';
import Image from 'app/screens/Image';

const Header = ({ scene, previous, navigation, theme }) => {

  const { options } = scene.descriptor;

  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header theme={{ colors: { primary: theme.colors.primary } }} style={{justifyContent: "space-between"}} >
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.goBack}
          color={theme.colors.text}
        />
      ) : (
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={navigation.toggleDrawer}
        >
          <Avatar.Icon
            size={40}
            icon="menu"
            color={"#ffffff"}
            style={{backgroundColor: "#00000"}}
          />
        </TouchableOpacity>
      )}
      <Appbar.Content
        title={
          title === 'Home' ? (
            <MaterialCommunityIcons
              style={{ marginRight: 10 }}
              name="folder-multiple-image"
              size={40}
              color={theme.colors.text}
            />
          ) : (
            title
          )
        }
        titleStyle={{
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.colors.text,
            alignContent: 'center',
            justifyContent: 'center',
        }}
      />
    </Appbar.Header>
  );
};

const StackNavigator = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Feed"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} theme={theme} />
        ),
      }}
    >
      <Stack.Screen
        name="Feed"
        component={BottomTabs}
        options={({ route }) => {
            const routeName = route.state
              ? route?.state?.routes[route?.state?.index]?.name
              : 'Home';
            return { headerTitle: routeName };
          }}
      />
      <Stack.Screen
        name="Image"
        component={Image}
        options={{ headerTitle: 'Details' }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
