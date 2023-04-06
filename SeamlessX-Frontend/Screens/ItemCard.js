import { ActivityIndicator, ScrollView, SafeAreaView, Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default ItemCard= ( {data})=>{
    return (
         <TouchableOpacity style={styles.cardItem}>
              <View>
                <Text style={styles.cardHeader}>{data.ShopName}</Text>
              </View>
            <View style={styles.info}>
            <Icon name="map-marker" style={styles.userSymbol} />

                  <Text style={styles.cardText} >
                   Address -  {data.Address} 
                  </Text>
            </View>
            <View style={styles.info}>
            <Icon name="shopping-cart" style={styles.userSymbol} />
                  <Text style={styles.cardText} >
                  Category - {data.Category} 
                  </Text>
            </View>
            <View style={styles.info}>
            <Icon name="shopping-cart" style={styles.userSymbol} />
                  <Text style={styles.cardText} >
                  SubCategory -  {data.SubCategory} 
                  </Text>
            </View>
            <View style={styles.info}>
            <Icon name="clock-o"  style={styles.userSymbol} />
                  <Text style={styles.cardText} >
                   Start Date - {data.StartDate} 
                  </Text>
            </View>
            <View style={styles.info}>
            <Icon name="clock-o"  style={styles.userSymbol} />
                  <Text style={styles.cardText} >
                   End Date - {data.EndDate} 
                  </Text>
            </View>
             
         </TouchableOpacity>

    );
}

const styles= StyleSheet.create({
    cardHeader: {
        fontSize: 22,
        color:'#6facfc',
        marginBottom:8
      },
      cardItem: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        
        padding: 10,
        marginVertical: 5,
        marginLeft:6,
        MarginRight:6,
        backgroundColor: "#fff",
        width: "100%",
        shadowColor: 'black', 
        shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.5,
        shadowRadius: 15
      },
      cardText: {
        fontSize: 14,
        alignItems: 'center',
        justifyContent: 'center',

      },
      userSymbol: {
       
        color:'gray',
        marginRight:7
      },
      info:{
        flex:1,
        flexDirection:'row'
      }

})
