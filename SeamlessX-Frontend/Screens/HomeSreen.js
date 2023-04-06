import { useCallback, useEffect, useState } from 'react';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { ActivityIndicator, ScrollView, SafeAreaView, Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ItemCard from './ItemCard';
import axios from 'axios'
const offerTypes = ["Dining", "Electronics", "Jwelery","Education", "Shopping" ];


export default function HomeScreen(props) {
   const [activeOfferType, setActiveOfferType] = useState("Dining");

   const[offers, setOffers] = useState([])
   let res;

   useEffect(() => {
       axios.get('https://pb8dug5fxj.execute-api.ap-southeast-2.amazonaws.com/offers')
         .then((response) => {
           res = response.data.result
         //   console.log('Offers in your City ',res)
           setOffers(res)
         });
     }, []);
     


   return (
         <SafeAreaView style={styles.container}>

            <View style={styles.headerContainer}>
               <View>
                  <Text style={styles.headerText}>Discover</Text>
               </View>  
               {/* <View style={styles.logo}>  
               </View> */}
            </View>
          
            <View
              style={{
                    borderBottomColor: 'black',
                      borderBottomWidth: 1,
                        borderStyle: 'solid',
                        marginTop:10
                   }}
                />

            <View style={styles.tabsContainer}>
               <FlatList
                  data={offerTypes}
                  keyExtractor={(item, index) => index.toString()}
                  horizontal={true}
                  showsHorizontalScrollIndicator={true}
                  renderItem={({ item }) => (
                     <View style={styles.item}>
                     <Text>{item}</Text>
                     </View>
                  )}
               />
            </View>
            <View>
               <Text style={styles.header2text}>Offers in your city</Text>
            </View>

            <ScrollView>
                  {
                     offers.map((offer)=>
                        <ItemCard data={offer}></ItemCard>
                     )
                     }
                  
            </ScrollView>
           </SafeAreaView >


         //  <View style={styles.cardItem}>
         //    <ScrollView>
         //    {offersData.map((item) => (
         //      <ItemCard shopName={item.shop} title={item.title} location={item.location} />
         //    ))}
         //  </ScrollView>
            
         //    </View>

         

         



   );
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     position: 'relative'
   },
   headerContainer:{
      flexDirection: 'row',
      backgroundColor: '#fff',
      position: 'relative',
      padding: 2,
      marginBottom:0,
      border:2

   },
   headerText:{
      fontSize: 40,
      color: '#0B646B',
      fontWeight: 'bold'
   },
//    tabContainer:{
//       width: "100%",
//       marginTop: 16,
     
//    },
//    tabText: (activeOfferType, item) => ({
//       fontFamily:"DMMedium" ,
//       color: activeOfferType === item ? "#444262" : "#C1C0C8",
//     }),
//     tab: (activeOfferType, item) => ({
//     paddingVertical: 6,
//     paddingHorizontal:12,
//     borderRadius: 16,
//     borderWidth: 1,
//     borderColor: activeOfferType === item ? "#444262" :"#C1C0C8" ,
//   }),
  tabsContainer: {
   height: 80,
   marginTop: 12,
   marginLeft: 5,
   marginRight: 5,
 },
 item: {
   backgroundColor: '#6facfc',
   padding: 14,
   marginVertical: 8,
   // marginHorizontal: 10,
   marginRight:8,
   borderRadius: 20,
   width: 120,
   alignItems: 'center',
   justifyContent: 'center',
 },

 cardItem:{
    padding:4,
    marginTop:8,
    flexDirection:'row',
    alignItems:'center',
    flexWrap: 'wrap'
 },
 header2text:{
     fontSize: 25,
      color: 'white',
      fontWeight: 'bold',
      // paddingTop:10,
      // paddingBottom:10,
      padding:10,
      alignItem:'center',
      alignContent:'center',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#ddd",
      marginLeft:20,
      marginRight:20,
      backgroundColor:'black',
      marginBottom:15,
      shadowColor: 'black', 
      shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.5, 
      shadowRadius: 10
      
 }

      

});