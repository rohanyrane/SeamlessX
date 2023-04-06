import { useContext ,useEffect, useState} from "react";
import { LocationContext } from "../../../contexts/LocationContext";
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useSelector } from "react-redux";

function OffersNearYou(){
 
    // console.log('History-----',history);
    // const latitude = history[0];
    // const longitude = history[1];
    // console.log(latitude,"-------------------t---------",longitude)
    // const lat = (latitude.toString()).replace('.','-');
    // const long = (longitude.toString()).replace('.','-');
    let lat= '19-1231749'
    let long= '72-8357434'
    // console.log(lat,"----------------------n-----------",long)
    const[offersNear,setOffersNear]=useState();

    useEffect(() => {
        axios
          .get(
            'https://www.icicibank.com/content/icicibank.nearbyoffers.0.6.mumbai.'+lat+'.'+long+'.'+'store.sort.searchTerm.filters.json'
          )
          .then((response) => {
            setOffersNear([response.data]);
           

          });
      }, [lat,long]);
      // console.log('Offers',offers);
      return offersNear
    }

export default OffersNearYou;