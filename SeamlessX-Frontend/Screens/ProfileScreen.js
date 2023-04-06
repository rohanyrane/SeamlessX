import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import LoginSignupScreen from './LoginSignupScreen';
// import { useSelector } from 'react-redux';

const ProfileScreen = () => {

    const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('SeamlessX');
  };


  return (
    <View style={styles.container}>
      <View style={styles.userSymbolContainer}>
        <Icon name="user" size={100} color="#fff" style={styles.userSymbol} />
      </View>
   
      <View
              style={{
                    borderBottomColor: 'black',
                      borderBottomWidth: 1,
                        borderStyle: 'solid',
                        marginTop:10
                   }}
                />


      <Text style={styles.name}>John Doe</Text>

      <View
              style={{
                    borderBottomColor: 'black',
                      borderBottomWidth: 1,
                        borderStyle: 'solid',
                        marginTop:10
                   }}
                />

      <Text style={styles.email}>john.doe@example.com</Text>
      
      <TouchableOpacity onPress={handlePress} style={styles.logout}>
          <Text>LogOut</Text>
       </TouchableOpacity>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userSymbolContainer: {
    backgroundColor: '#f00',
    borderRadius: 100,
    padding: 10,
    marginBottom: 30,
  },
  userSymbol: {
    alignSelf: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  email: {
    fontSize: 18,
    color: '#888',
  },
  logout:{
    backgroundColor: '#6facfc',
    padding: 14,
    marginVertical: 8,
    // marginHorizontal: 10,
    marginRight:8,
    borderRadius: 20,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ProfileScreen;