import { useContext ,useEffect, useState} from "react";
import { LocationContext } from "../../../contexts/LocationContext";
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';


function OfferCity(){
    const[offers, setOffers] = useState([])
    let res;

    useEffect(() => {
        axios.get('https://d2gu3bi7yvrhcm.cloudfront.net/offers')
          .then((response) => {
            res = response.data.result
            }
            );
            setOffers(res)
      }, []);
      return offers;
}

export default OfferCity;


