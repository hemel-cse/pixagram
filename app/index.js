/**
 * React Native App
 * Everything starts from this file
 */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
  Text
} from 'react-native-paper';
import { useColorScheme } from 'react-native-appearance';
import { StatusBar } from 'expo-status-bar';

import Navigation from 'app/features/navigation';
import configureStore from 'app/store';

const { persistor, store } = configureStore();

const CombinedDefaultTheme = { ...PaperDefaultTheme, ...NavigationDefaultTheme};
const CombinedDarkTheme = { ...PaperDarkTheme, ...NavigationDarkTheme};


const EntryPoint = () =>  {
  const colorScheme = useColorScheme();
  const [darkTheme, setDarkTheme] = React.useState(colorScheme === 'dark');

  const theme = darkTheme ? CombinedDarkTheme : CombinedDefaultTheme; 

  const toggleTheme = () => {
    setDarkTheme(darkTheme => !darkTheme);
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <PaperProvider theme={{...theme, roundness: 2, colors: { ...theme.colors, primary: '#1ba1f2' }}}>
          <Navigation toggleTheme={toggleTheme} dark={darkTheme} theme={theme} />
          <StatusBar style={darkTheme ? "light" : "dark"}/>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default EntryPoint;
