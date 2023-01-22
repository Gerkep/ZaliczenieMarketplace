import { View, FlatList, StyleSheet, Animated } from "react-native";
import ProductPreview from "../components/ProductPreview";
import { useRef, useCallback, useState } from "react";
import MarketHeader from "../components/MarketHeader";
import { db } from "../firebase/config";
import { collection, getDocs, where, query } from "firebase/firestore";
import { useFocusEffect } from '@react-navigation/native';
const Marketplace = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const scrollOffsetY = useRef(new Animated.Value(0)).current;
    
    useFocusEffect(
        useCallback(() => {
          let isActive = true;
          let fetchedItems = [];

          const fetchItem = async () => {
            setLoading(true);
            const itemsRef = collection(db, "Items");
            const q = query(itemsRef, where("listed", "==", true));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                fetchedItems.push(doc.data());
            });
            if(isActive){
                setLoading(false);
                setItems(fetchedItems);
            }
        }
          fetchItem();
      
          return () => {
            isActive = false;
          };
        }, [])
      );

    return (
        <FlatList 
            stickyHeaderIndices={[0]}
            scrollEventThrottle={16}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollOffsetY}}}],
                {useNativeDriver: false}
            )}
            ListHeaderComponent={
                <MarketHeader animHeaderValue={scrollOffsetY} />
            }
            showsVerticalScrollIndicator={false} 
            numColumns={2}
            keyExtractor={item => item.image} 
            data={items}
            renderItem={({item}) => (
                <ProductPreview price={item.price} image={item.imageURL} id={item.id}/>
            )} 
      />
    )
}

export default Marketplace;

const styles = StyleSheet.create({
    filterBarContainer: {
        marginTop: 15
    },
    itemsContainer: {
        marginTop: 10
    }
})