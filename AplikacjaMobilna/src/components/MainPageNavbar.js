import messageIcon from "../../assets/messageIcon.png";
import moreIcon from "../../assets/moreIcon.png";
import {TextInput, Image, StyleSheet, FlatList, Animated} from "react-native";
import TopRightNavbar from "../components/TopRightNavbar";
import CategoryIcon from "../components/CategoryIcon";
import clothesIcon from "../../assets/clothesIcon.png";
import accessoriesIcon from "../../assets/accessoriesIcon.png";
import sneakersIcon from "../../assets/sneakersIcon.png";
import bagIcon from "../../assets/bagIcon.png";
import fireIcon from "../../assets/fireIcon.png";
import PageName from "../components/PageName";
import searchIcon from "../../assets/searchIcon.png";

const Max_Header_Height = 300;
const Min_Header_Height = 150;
const Scroll_Distance = Max_Header_Height - Min_Header_Height

const categories = [{title: "Clothes", icon: clothesIcon}, {title: "Accessories", icon: accessoriesIcon}, {title: "Bags", icon: bagIcon}, {title: "Sneakers", icon: sneakersIcon}, {title: "Latest drops", icon: fireIcon}]
const MainPageNavbar = ({animHeaderValue}) => {

    const animatedHeaderHeight =  animHeaderValue.interpolate({
        inputRange: [0, Scroll_Distance],
        outputRange: [Max_Header_Height , Min_Header_Height],
        extrapolate: 'clamp'
      })

      const animateYTranslation = animHeaderValue.interpolate({
        inputRange: [0, Max_Header_Height - Min_Header_Height],
        outputRange: [0, -35],
        extrapolate: 'clamp'
    })
    const animateYTranslationCategories = animHeaderValue.interpolate({
        inputRange: [0, Max_Header_Height - Min_Header_Height],
        outputRange: [0, -55],
        extrapolate: 'clamp'
    })
    const animateCategoriesOpacity = animHeaderValue.interpolate({
        inputRange: [0, Max_Header_Height - Min_Header_Height - 100],
        outputRange: ['1', '0'],
        extrapolate: 'clamp'
      })

    return (
        <Animated.View style={{backgroundColor: "white", height: animatedHeaderHeight}}>
            <TopRightNavbar />
            <Animated.View style={[styles.pageNameContainer, {transform: [{ translateY: animateYTranslation }]} ]}>
                <PageName name="SNIP IT"/>
            </Animated.View>
            <Animated.View style={[styles.inputContainer, {transform: [{ translateY: animateYTranslation }]}]}>
                <Image style={styles.icon} source={searchIcon}/>
                <TextInput style={styles.input} placeholder="Search"/>
            </Animated.View>
            <Animated.View style={{opacity: animateCategoriesOpacity, transform: [{ translateY: animateYTranslationCategories }] }}>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle={styles.categoriesContainer} 
                keyExtractor={category => category.title} 
                data={categories} 
                renderItem={({item}) => (
                    <CategoryIcon title={item.title} icon={item.icon}/>
                )} 
            />
            </Animated.View>
        </Animated.View>
    )
}

export default MainPageNavbar;

const styles = StyleSheet.create({
    pageNameContainer: {
        marginHorizontal: 20,
    },
    categoriesContainer: {
        paddingVertical: 20,
        paddingHorizontal: 13,
    },
    inputContainer: {
        width: 350,
        height: 35,

        alignSelf: 'center',
        backgroundColor: '#F7F7F7',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    icon: {
        width: 15,
        height: 15
    },
    input: {
        flex: 1,
        marginLeft: 12,
        height: 35
    }
})