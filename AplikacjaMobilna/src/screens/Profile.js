import {StyleSheet, ScrollView, View, Animated, Text, ActivityIndicator} from "react-native";
import { useState, useRef, useEffect } from "react";
import ProfileProductPreview from "../components/ProfileProductPreview";
import prophere from "../../assets/prophere.png";
import ProfileHeader from "../components/ProfileHeader";
import ProfileNavbar from "../components/ProfileNavbar";
import { db } from "../firebase/config";
import { collection, getDocs, where, query, getDoc, doc } from "firebase/firestore";
import { useFocusEffect } from '@react-navigation/native';
import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Profile = (route) => {

    const [displayAll, setDisplayAll] = useState(true);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();
    const scrollOffsetY = useRef(new Animated.Value(0)).current;
    const auth = getAuth();
    
    const fetchItems = async (isActive) => {
        let fetchedItems = [];
        let user = {};
        let email = "";
        await onAuthStateChanged(auth, (user) => {
            if (user) {
              email = user.email;
            } 
        });
        const itemsRef = collection(db, "Items");
        const q = query(itemsRef, where("owner", "==", email));
        try{
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                if(displayAll){
                    if(!doc.data().listed){
                        fetchedItems.push(doc.data());
                    }
                }else {
                    if(doc.data().listed){
                        fetchedItems.push(doc.data());
                    }
                }
            });
            let profileRef = doc(db, "Users", `${email}`);
            await getDoc(profileRef).then((docSnap) => {
                if (docSnap.exists()) {
                    if(isActive){
                        user = docSnap.data()
                    }
                }
            });
        } catch(e) {
            console.log(e)
            console.log("No such document!");
        }

        if(isActive){
            setItems(fetchedItems);
            setUser(user);
        }
        setLoading(false);
    }

    useFocusEffect(
        React.useCallback(() => {
          let isActive = true;
          setDisplayAll(true);
          fetchItems(isActive);
      
          return () => {
            isActive = false;
          };
        }, [])
      );

    useEffect(() => {
        setLoading(true);
        fetchItems(true);
    }, [displayAll])

    return (
        <View style={{flex: 1}}>
            {(user) &&
                <ProfileNavbar animHeaderValue={scrollOffsetY} name={user.name}/>
            }
            <ScrollView 
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollOffsetY}}}],
                    {useNativeDriver: false}
                )}
                numColumns={2}
                showsVerticalScrollIndicator={false} 
            >
            {user &&
                <ProfileHeader 
                    pfp={user.profilePic} 
                    name={user.name} 
                    sales={user.sales}
                    totalItems={user.totalItems}
                    animHeaderValue={scrollOffsetY} 
                    displayAll={displayAll} 
                    onOptionChange={() => setDisplayAll(!displayAll)}
                />
            }
            {loading ?
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#1E1E27"/>
            </View>
            :
            items.length > 0 ?
            <View style={styles.itemsContainer}>
                {items.map((item) => {
                    return (
                        <ProfileProductPreview key={item.id} price={item.price} image={item.imageURL} brand={item.brandName} id={item.id}/>
                    );
                })}
            </View>
            :
            <View style={styles.loadingContainer}>
                <Text>No items</Text>
            </View>
            }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        paddingTop: 40,
        flex: 1
    },
    profileContainer: {
        width: "100%",
        marginTop: 5,
        padding: 20,
    },
    profilePic: {
        width: 120,
        height: 120,
        borderRadius: "10px",
        alignSelf: "center"

    },
    name: {
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
        marginTop: 12,
        fontFamily: "beau"
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 20
    },
    stat: {
       alignItems: "center",
       marginHorizontal: 20
    },
    label: {
        fontSize: 12,
        fontFamily: "Lato-Regular",
    },
    statsNumber: {
        fontFamily: "Lato-Black",
        fontSize: 25

    },
    starsContainer: {
        flexDirection: "row"
    },
    star: {
        marginHorizontal: 3,
        marginVertical: 5,
        width: 16,
        height: 16
    },
    optionsContainer: {
        flexDirection: "row",
        marginTop: 20
    },
    optionSelected: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#000000",
        marginHorizontal: 45,
    },
    option: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 45,
    },
    itemsContainer: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        zIndex: 0,
    },
    loadingContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
    }
})

export default Profile;