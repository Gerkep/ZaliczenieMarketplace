import { View, StyleSheet, Text, Image } from "react-native"
import successIcon from "../../assets/successIcon.png";
import prophere from "../../assets/prophere.png"
import ActionButton from "../components/ActionButton";
import buyIcon from "../../assets/buyIcon.png";
import { useFocusEffect } from '@react-navigation/native';
import { db } from "../firebase/config";
import { collection, getDoc, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";

const ProductListed = ({route, navigation}) => {

    const {itemId} = route.params;
    const [item, setItem] = useState({owner: ''});
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
           <Image style={styles.icon} resizeMode="contain" source={successIcon}/>
           <Text style={styles.title}>PRODUCT LISTED</Text>
           <Text style={styles.message}>Your product has been listed and is now waiting for a buyer.</Text>
           {!loading &&
                <Image style={styles.preview} resizeMode="contain" source={{uri:item.imageURL}}/>
           }
           <View style={styles.buttons}>
                <ActionButton text="BACK TO PROFILE" action={() => navigation.navigate("Profile")}/>
           </View>
       </View>
    )
}

export default ProductListed;

const styles = StyleSheet.create({
    icon: {
        marginTop: 85,
        alignSelf: "center",
        width: 100,
        height: 100
    },
    title: {
        fontWeight: "900",
        fontFamily: 'beau',
        fontSize: 40,
        marginTop: 25,
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