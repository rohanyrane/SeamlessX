import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginSignupScreen from './Screens/LoginSignupScreen';
import UI from './Screens/UI';
import { Provider } from 'react-redux';
import store from './store/store';


const Stack = createStackNavigator();


export default function App(){
  return (
    <Provider store={store}>
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="SeamlessX" component={LoginSignupScreen} />
        <Stack.Screen name="UI" component={UI}options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}
