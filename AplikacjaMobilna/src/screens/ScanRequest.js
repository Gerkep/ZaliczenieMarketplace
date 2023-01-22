import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"
import scan from "../../assets/scan.png";
import prophere from "../../assets/prophere.png"
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { db } from "../firebase/config";
import { collection, getDoc, doc } from "firebase/firestore";
import React from "react";

const ScanRequest = ({route}) => {

    const navigation = useNavigation();
    const [item, setItem] = useState(null);
    const { itemId } = route.params;
    const [loading, setLoading] = useState(true);

    useFocusEffect(
        React.useCallback(() => {
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
            <Image style={styles.icon} resizeMode="contain" source={scan}/>
           <Text style={styles.title}>SCAN ITEM</Text>
           <Text style={styles.message}>Please scan a snip on your item before you list it.</Text>
           {!loading ? 
           <View>
                <Image style={styles.preview} resizeMode="contain" source={{uri:item.imageURL}}/>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.magicButton} onPress={() => navigation.navigate("Sell", {itemId: item.id})}><Text></Text></TouchableOpacity>
                </View>
           </View>
            :
                <View></View>
            }           
       </View>
    )
}

export default ScanRequest;

const styles = StyleSheet.create({
    icon: {
        marginTop: 90,
        alignSelf: "center",
        width: 120,
        height: 120
    },
    title: {
        fontWeight: "900",
        fontFamily: 'beau',
        fontSize: 40,
        marginTop: 20,
        alignSelf: "center"
    },
    message: {
        alignSelf: "center",
        textAlign: "center",
        width: "70%",
        fontSize: 18,
        fontFamily: "Lato-Regular",
        marginTop: 10,
    },
    preview: {
        marginTop: 70,
        alignSelf: "center",
        width: 270,
        height: 200
    },
    buttons: {
        marginTop: 30
    },
    magicButton: {
        width: "100%",
        height: 70,
        alignSelf: "center"
    }
});