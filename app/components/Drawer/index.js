import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import styled from 'styled-components/native';
import images from 'app/lib/config/images'

const DrawerView = styled(View)`
  flex: 1;
`
const DrawerTopView = styled(View)`
  align-items: center;
  text-align: center;
`
const StyledTitle = styled(Title)`
  margin-top: 20px;
  font-weight: bold;
`
const PreferenceView = styled(View)`
  padding: 12px 16px;
`


const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>

      <DrawerView>
        <DrawerTopView>
        <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => {
              props.navigation.toggleDrawer();
            }}
          >
          <Avatar.Image
            source={images.icons.logo}
            size={50}
          />
          </TouchableOpacity>
          <StyledTitle>Pixagram</StyledTitle>
        </DrawerTopView>

        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={props.toggleTheme}>
            <PreferenceView style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={props.dark} />
              </View>
            </PreferenceView>
          </TouchableRipple>
        </Drawer.Section>

      </DrawerView>

    </DrawerContentScrollView>
  );
}

export default DrawerContent
