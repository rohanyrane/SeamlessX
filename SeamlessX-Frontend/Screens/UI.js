// import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  LocationBG  from '../components/services/Location/LocationBG';
 //import LoginScreen from './screens/LoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import SignUpScreen from './Screens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { useCallback, useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../util/colors';
import { useFonts } from 'expo-font';
import LoginSignupScreen from './LoginSignupScreen';
import HomeScreen from './HomeSreen';
import OffersCity from '../components/services/OffersCity/OffersCity';
// import LocationContextProvider, { LocationContext } from '../contexts/LocationContext';
import scheduleNotification from '../components/services/Notification';
import OffersNearYou from '../components/services/OffersNear/OffersNearYou';
import ProfileScreen from './ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: (props) => 
          <Entypo name="home" size={props.size} color={props.color} />
        }}
      />
      
      <Tab.Screen 
        name="Saved"
        component={LocationBG}
        options={{
          tabBarLabel: "Maps",
          tabBarIcon: (props) => 
          <Entypo name="star" size={props.size} color={props.color} />
        }}
      />
      
      {/* <Tab.Screen 
        name="Near"
        component={OffersNearYou}
        options={{
          tabBarLabel: "Near",
          tabBarIcon: (props) => 
          <Ionicons name="settings" size={props.size} color={props.color} />
        }}
      /> */}
      <Tab.Screen 
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: (props) => 
          <Ionicons name="settings" size={props.size} color={props.color} />
        }}
      />
      
    </Tab.Navigator>
    
  )
}

export default function UI() {
  const [appIsLoaded, setAppIsLoaded] = useState(false);

  useEffect(() => {

    const prepare = async () => {
      try {
        await Font.loadAsync({
          //Fonts we wanna load
          black: require("./assets/fonts/Roboto-Black.ttf"),
          blackItalic: require("./assets/fonts/Roboto-BlackItalic.ttf"),
          bold: require("./assets/fonts/Roboto-Bold.ttf"),
          boldItalic: require("./assets/fonts/Roboto-BoldItalic.ttf"),
          italic: require("./assets/fonts/Roboto-Italic.ttf"),
          light: require("./assets/fonts/Roboto-Light.ttf"),
          lightItalic: require("./assets/fonts/Roboto-LightItalic.ttf"),
          medium: require("./assets/fonts/Roboto-Medium.ttf"),
          mediumItalic: require("./assets/fonts/Roboto-MediumItalic.ttf"),
          regular: require("./assets/fonts/Roboto-Regular.ttf"),
          thin: require("./assets/fonts/Roboto-Thin.ttf"),
          thinItalic: require("./assets/fonts/Roboto-ThinItalic.ttf")
        });
      }catch(e){
        // console.log(e);
      }finally{
        setAppIsLoaded(true);
      }
    }

    prepare();
  }, [])

  const onLayout = useCallback(async() =>{});


  return (
    // <NavigationContainer>
    // <Tab.Navigator>
    //   <Tab.Screen name="Auth" component={SignUpScreen} />
    //   <Tab.Screen name="Location" component={LocationBG} />
    // </Tab.Navigator>
    <NavigationContainer independent={true}>
      <View onLayout={onLayout} style={{flex: 1}}> 
        <Stack.Navigator screenOptions={{
          headerTitleStyle: {
            // fontFamily: 'Inter-Black',
            color: 'white'
          },
          headerStyle: {
            backgroundColor: colors.primary
          },
          
        }}>
          <Stack.Group>
            <Stack.Screen 
              name="main"
              //React Navigation passes a navigation prop to component
              component={TabNavigator}
              options={{
                headerTitle: "SeamlessX"
              }}
            />
          </Stack.Group>

          <Stack.Group 
            screenOptions={{
              presentation: 'containedModal',
              headerStyle: {
                backgroundColor: 'white'
              },
              headerTitleStyle: {
                color: colors.textColor,
                // fontFamily: 'medium'
              }
            }}
          >
            <Stack.Screen 
              name="languageSelect"
              component={LocationBG}
            />

          </Stack.Group>
        </Stack.Navigator>
      </View>
    </NavigationContainer>
);







    // <View>
    //   <Text>Hello</Text>
    // </View>

   
    // </NavigationContainer>
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});