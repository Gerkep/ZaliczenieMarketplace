import { View, StyleSheet, Text, Image } from "react-native"
import ShipmentIcon from "../../assets/shipmentIcon.png";
import jacket from "../../assets/diorjacket.png"
import ActionButton from "../components/ActionButton";
import buyIcon from "../../assets/buyIcon.png";
import { useState, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { db } from "../firebase/config";
import { collection, getDoc, doc, updateDoc } from "firebase/firestore";

const PurchaseSuccess = ({route, navigation}) => {

    const [item, setItem] = useState({owner: ''});
    const [loading, setLoading] = useState(true);
    const { itemId } = route.params;

    useFocusEffect(
        useCallback(() => {
          let isActive = true;
      
          const fetchItem = async () => {
            setLoading(true);
            let docRef = doc(db, "Items", `${itemId}`);
            await getDoc(docRef).then((docSnap) => {
                if (docSnap.exists()) {
                    if(isActive){
                        setItem(docSnap.data())
                        setLoading(false);
                    }
                } else {
                    console.log("No such document!");
                 }
            });
        }
          fetchItem();
      
          return () => {
            isActive = false;
          };
        }, [itemId])
      );

    return (
       <View>
           <Image style={styles.icon} resizeMode="contain" source={ShipmentIcon}/>
           <Text style={styles.title}>ORDER PLACED</Text>
           {!loading &&
           <View>
                <Text style={styles.message}>{item.itemName} is now on its way to your doorstep.</Text>
                <Image style={styles.preview} resizeMode="contain" source={{uri:item.imageURL}}/>
            </View>
           }
           <View style={styles.buttons}>
                <ActionButton text="CONTINUE SHOPPING" icon={buyIcon} action={() => navigation.navigate("Marketplace")}/>
           </View>
       </View>
    )
}

export default PurchaseSuccess;

const styles = StyleSheet.create({
    icon: {
        marginTop: 85,
        alignSelf: "center",
        width: 120,
        height: 120
    },
    title: {
        fontWeight: "900",
        fontFamily: 'beau',
        fontSize: 40,
        marginTop: 10,
        alignSelf: "center"
    },
    message: {
        alignSelf: "center",
        textAlign: "center",
        width: "80%",
        fontSize: 18,
        fontFamily: "Lato-Regular",
        marginTop: 10,
    },
    preview: {
        marginTop: 50,
        alignSelf: "center",
        width: 200,
        height: 200
    },
    buttons: {
        marginTop: 30
    }
});