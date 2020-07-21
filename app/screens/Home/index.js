import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import ImageGrid from 'app/features/image-grid/containers'


const Home = (props) => {
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to Home working on your app!</Text>
      <ImageGrid/>
       <Button icon="image" mode="contained" onPress={() => props.navigation.push("Image")}>
         Press me
      </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
