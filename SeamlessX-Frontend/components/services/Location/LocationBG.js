import React, { useContext,useState, useEffect } from 'react';
import MapView,{Marker,Callout,Circle} from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import * as Location from 'expo-location';
import LocationContext  from '../../../contexts/LocationContext';
import { useDispatch, useSelector } from 'react-redux';
import { addHistoryItem } from '../../../store/historySlice';
import axios from 'axios';

function Mark (pin){
  return  <>
   
   <Marker
                coordinate={pin}
                title="Title"
                pinColor="blue"
              >
                <Callout>
                <Text>Hello</Text>
              </Callout>
              </Marker>
  </>
}


function LocationBG() {
  const dispatch  = useDispatch();
  const [pin,setPin]=useState({
    latitude: 19.1231749,
    longitude: 72.8357434,
  });
// import OffersNearYou from '../OffersNear/OffersNearYou';



let lat= '19_1231749'
let long= '72_8357434'
// console.log(lat,"----------------------n-----------",long)
const[offersNear,setOffersNear]=useState([]);
let res
useEffect(() => {
    axios
      .get(
        'https://www.icicibank.com/content/icicibank.nearbyoffers.0.6.mumbai.19_1196976.72_8464205.store.sort.searchTerm.filters.json'
      )
      .then((response) => {
        res = response.data
      
        setOffersNear(res);
       

      });
  }, []);
  console.log('Near By Offer -> ',offersNear)



    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            // console.log('Permission to access location was denied');
            return;
          }
    
          let loc = await Location.getCurrentPositionAsync({});
          console.log(loc, 'Current Location');
        console.log("Location Cooredinates Latitide and longitude",loc.coords.latitude,"----",loc.coords.longitude)
        setPin({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude
        })

        dispatch(addHistoryItem({item:[e.nativeEvent.coordinate.latitude,e.nativeEvent.coordinate.longitude]}));

        // setLocation({latitude,longitude});
        });
      }, []);


      

  return <>
        <View style={styles.container}>
        <MapView style={styles.map} 
        initialRegion={{
          latitude: 19.1231749,
          longitude: 72.8357434,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} 
          // userLocationUpdateInterval={5000}
          showsUserLocation={true}
          onUserLocationChange={(e)=>{
            console.log("onUserLocationChange",e.nativeEvent.coordinate.latitude,"-----",e.nativeEvent.coordinate.longitude)
            // setPin({
            //   latitude: e.nativeEvent.coordinate.latitude,
            //   longitude: e.nativeEvent.coordinate.longitude
            // })
           

            // console.warn(latitude+''+longitude);

          }}
          >


            <Marker
            coordinate={pin}
            title="Title"
            pinColor='orange'
            >
                <Callout>
                    <Text>Your position</Text>
                </Callout>
                
            </Marker>
           
            {
              offersNear.map((offer)=>{
                const pin={
                  latitude : offer.latitude,
                  longitude : offer.longitude
                } 
                Mark(pin);             
              })
            }  
        
            <Circle
            center={pin}
            radius={100}
            >
                    
            </Circle>
        </MapView>

        </View>
    </>
}

export default LocationBG;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});