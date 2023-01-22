import { View, StyleSheet, Text, ScrollView, ActivityIndicator } from "react-native"
import ProductNavbar from "../components/ProductNavbar";
import ProductBigPreview from "../components/ProductBigPreview";
import ProductProps from "../components/ProductProps";
import ActionButton from "../components/ActionButton";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebase/config";
import { collection, getDoc, doc, updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useFocusEffect } from '@react-navigation/native';
import React from "react";

const ProductPage = ({isOwner, listed, route}) => {

    const navigation = useNavigation();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userEmail, setUserEmail] = useState("");
    const auth = getAuth();
    const { itemId } = route.params;

    const styles = StyleSheet.create({
        previewContainer: {
            width: "100%",
            paddingHorizontal: 20,
    
        },
        productInfoContainer: {
            marginTop: 30,
            flexDirection: "row",
            justifyContent: "space-between",
    
        },
        productName: {
            fontSize: 20,
            fontFamily: "beau"
        },
        brand: {
            fontSize: 14,
            color: "#777777",
            marginTop: 2,
            fontFamily: "beau"
        },
        price: {
            fontWeight: "900",
            fontSize: 20,
    
        },
        description: {
            fontSize: 14,
            marginTop: 20,
            fontFamily: "Lato-Regular"
        },
        propsContaienr: {
            marginTop: 20
        },
        loadingContainer: {
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            height: "100%"
        }
    });

    useFocusEffect(
        React.useCallback(() => {
          let isActive = true;
      
          const fetchItem = async () => {
            setLoading(true);
            let docRef = doc(db, "Items", `${itemId}`);
            await getDoc(docRef).then((docSnap) => {
                if (docSnap.exists()) {
                    if(isActive){
                        onAuthStateChanged(auth, (user) => {
                            if (user) {
                              setUserEmail(user.email);
                            } 
                        });
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

    const delist = async () => {
        let docRef = doc(db, "Items", `${itemId}`);
        try{
            await updateDoc(docRef, {
                listed: false,
                condition: "",
                invoice: "",
                price: ""
              }).then(() => {
                navigation.navigate("Profile")
              })
        } catch (e){
            console.log(e)
        }
    }

        return (
            <ScrollView showsVerticalScrollIndicator={false}>
             <ProductNavbar shareable={true}/>
             {!loading ?
             <View>
             <View style={styles.previewContainer}>
                <ProductBigPreview image={item.imageURL}/>
                <View style={styles.productInfoContainer}>
                    <View>
                        <Text style={styles.productName}>{item.itemName}</Text>
                        <Text style={styles.brand}>{item.brandName}</Text>
                    </View>
                    <Text style={styles.price}>${item.price}</Text>
                </View>
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.propsContaienr}>
                    <ProductProps owner={item.owner} size={item.size} condition={item.condition} invoice={item.invoice} />
                </View>
             </View>
            {item.owner === userEmail ? 
                    item.listed ?
                    <ActionButton text="DELIST" action={() => delist()}/>
                    :
                    <ActionButton text="SELL ITEM" action={() => navigation.navigate("ScanRequest", {itemId: item.id})}/>
                    :
                    item.listed ?
                    <ActionButton text="ORDER NOW" action={() => navigation.navigate("ShippingInfo", {itemId: item.id})}/>
                    :
                    <ActionButton text="PLACE AN OFFER" action={() => console.log()}/>
            }      
            </View>      
             :
             <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#1E1E27"/>
             </View>
             }
    
            </ScrollView>
        )

}

export default ProductPage;

