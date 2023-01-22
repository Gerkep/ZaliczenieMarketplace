import { View, StyleSheet, TextInput, Text, ScrollView } from "react-native"
import PageName from "../components/PageName";
import ProductNavbar from "../components/ProductNavbar";
import ProductSummaryPreview from "../components/ProductSummaryPreview";

import ActionButton from "../components/ActionButton";
import { useNavigation } from "@react-navigation/native";
import buyIcon from "../../assets/buyIcon.png";
import { useState, useCallback } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useFocusEffect } from '@react-navigation/native';
import { db } from "../firebase/config";
import { collection, getDoc, doc, updateDoc } from "firebase/firestore";
import ProductProps from "../components/ProductProps";

const ShippingInfo = ({route}) => {

    const navigation = useNavigation();
    const { itemId } = route.params;
    const [userEmail, setUserEmail] = useState("");
    const [item, setItem] = useState({owner: ''});
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    useFocusEffect(
        useCallback(() => {
          let isActive = true;
      
          const fetchItem = async () => {
            setLoading(true);
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  setUserEmail(user.email);
                } 
            });
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

      const buy = async () => {
        let docRef = doc(db, "Items", `${itemId}`);
        try{
            await updateDoc(docRef, {
                listed: false,
                condition: '',
                invoice: '',
                price: '',
                owner: userEmail,
              }).then(() => {
                navigation.navigate("PurchaseSuccess", {itemId: item.id})
              })
        } catch (e){
            console.log(e)
        }
      }

    return (
        <View style={styles.page}>
            <ProductNavbar shareable={false}/>
            <ScrollView style={styles.mainContainer}>
            <PageName name="Delivery Details"></PageName>
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>First Name</Text>
                    <TextInput style={styles.input} placeholder="Name"/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Last Name</Text>
                    <TextInput style={styles.input} placeholder="Surname"/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput style={styles.input} placeholder="Słoneczna 5"/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>City</Text>
                    <TextInput style={styles.input} placeholder="Lusowo"/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Zip Code</Text>
                    <TextInput style={styles.input} placeholder="62-080"/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Tel. Num.</Text>
                    <TextInput style={styles.input} placeholder="721 783 342"/>
                </View>
            </View>
            {!loading && 
                <View>
                    <View style={styles.previewContainer}>
                        <ProductSummaryPreview name={item.itemName} image={item.imageURL} brand={item.brandName} price={item.price}/>
                    </View>
                    <View style={styles.propsContainer}>
                        <ProductProps owner={item.owner} condition={item.condition} size={item.size}/>
                    </View>
                    <ActionButton text="BUY NOW" action={() => buy()} icon={buyIcon}/>
                </View>            
            }
            </ScrollView>
        </View>
    )
}

export default ShippingInfo;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingBottom: 20
    },
    mainContainer: {
        paddingHorizontal: 20,
    },
    form: {
        justifyContent: "space-between",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    inputContainer: {
        marginTop: 20
    },
    label: {
        fontSize: 14,
        color: "#777777",
        marginLeft: 4,
    },
    input: {
        width: 155,
        height: 35,
        backgroundColor: '#F7F7F7',
        borderWidth: 1,
        borderColor: '#ECECEC',
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 4
    },
    propsContainer: {
        marginTop: 20
    },
    previewContainer: {
        marginTop: 20
    }
});