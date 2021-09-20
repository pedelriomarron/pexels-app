import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image,Text,StyleSheet } from 'react-native';
import pexelsLogo from './assets/pexels.jpg'

import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='HomeScreen' 
          component={HomeScreen} 
          options={{
            headerRight:()=>{return <Text style={{color:'white',fontSize:18}} onPress={()=> console.log('search')}>Search</Text>},
            headerLeft:()=> <Image source={pexelsLogo} style={styles.logo}/>,
            title:"Pexels Adpp",
            headerTitleStyle:{
              color:'#ffffff',
              fontWeight:'bold'
            },
            headerStyle:{
              backgroundColor:'#0D0D0D'
            }}}/>
        <Stack.Screen name='ImageScreen' component={ImageScreen} />
      </Stack.Navigator>
      <StatusBar/>
    </NavigationContainer>
  );
}


const styles= StyleSheet.create({
  logo:{
    width:37,
    height:37,
    marginEnd:5,
    borderRadius:5
  }
})