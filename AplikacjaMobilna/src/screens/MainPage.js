import {Text, StyleSheet, View, FlatList, Animated} from "react-native";
import BrandContainer from "../components/BrandContainer";
import {useRef} from "react";
import MainPageNavbar from "../components/MainPageNavbar";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const MainPage = () => {

    const scrollOffsetY = useRef(new Animated.Value(0)).current;
    const [brands, setBrands] = useState([]);

    const fetchBrands = async () => {
        let fetchedBrands = [];
        const querySnapshot = await getDocs(collection(db, "Brands"));
        querySnapshot.forEach((doc) => {
            fetchedBrands.push(doc.data());
        });
        setBrands(fetchedBrands);
    }

    useEffect(() => {
        fetchBrands();
    }, []);

    return (
        <FlatList 
            stickyHeaderIndices={[0]}   
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollOffsetY}}}],
                {useNativeDriver: false}
            )}
            ListHeaderComponent={
                <MainPageNavbar animHeaderValue={scrollOffsetY}/>
                }
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={styles.itemsContainer} 
                keyExtractor={item => item.brandName} 
                data={brands} 
                renderItem={({item}) => (
                    <BrandContainer logo={item.brandLogo} background={item.brandBanner}/>
                )} 
        />
    )
} 

const styles = StyleSheet.create({
    categoriesContainer: {
        paddingVertical: 20,
        paddingHorizontal: 13,
    },
    itemsContainer: {

    },
    pageNameContainer: {
        marginHorizontal: 20
    }
})

export default MainPage;