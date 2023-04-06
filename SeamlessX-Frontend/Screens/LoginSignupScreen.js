import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Image} from 'react-native';
import { useNavigation , NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UI from './UI';
import axios from 'axios';
// import Spinner from 'react-native-spinkit';




const LoginSignupScreen = () => {
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  // const auth=useContext(AuthContext)

  const handlePress = async(e) => {
    // Handle login/signup button press
    e.preventDefault()
    
    if (isSignup) {

      try{
         setIsLoading(true);
          const response = await axios.post('https://d2gu3bi7yvrhcm.cloudfront.net/register',{
          name,
          email,
          password
        })
        const emailReg = await axios.post('https://hrda6o15r8.execute-api.ap-southeast-2.amazonaws.com/subscribe',{
          email
        })
          setName('')
          setEmail('')
          setPassword('')
          // console.log(response);
          setIsLoading(false);
          navigation.navigate('UI');        
      }catch(err){
        // console.log(err);
        navigation.navigate('SeamlessX');
      }
      
    }else {
      // Handle login logic
      try{
        setIsLoading(true);
        const response = await axios.post('https://d2gu3bi7yvrhcm.cloudfront.net/login',{
            name,
            email,
            password
        })
          setName('')
          setEmail('')
          setPassword('')
          console.log(response);
          setIsLoading(false);
          navigation.navigate('UI');
      }catch(err){
        console.log(err);
        navigation.navigate('SeamlessX');
      }
      // let response = 201;
      //   setName('')
      //   setEmail('')
      //   setPassword('')
      //   console.log(response);
      //   setIsLoading(false);
      //   navigation.navigate('UI');
    }

    // switchToUI();

  };

  function switchToUI() {
    if(isLoggedIn){
      
    }else{
      navigation.navigate('LoginSignupScreen');
    }
  }

  return (
       
  
    <View style={styles.container}>
      <Text style={styles.header}>{isSignup ? 'Sign up' : 'Log in'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{isSignup ? 'Sign up' : 'Log in'}</Text>
      </TouchableOpacity>

      {/* //For Switching */}
      <TouchableOpacity onPress={() => setIsSignup(!isSignup)}>
        <Text style={styles.switchText}>
          {isSignup ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
        </Text>
      </TouchableOpacity>

      {/* <Spinner
        isVisible={isLoading}
        size={50}
        type={'ChasingDots'}
        color={'#007AFF'}
      /> */}


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  switchText: {
    color: 'blue',
    marginTop: 20,
  },
});

export default LoginSignupScreen;
