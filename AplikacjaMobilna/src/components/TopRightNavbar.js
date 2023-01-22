import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import profileIcon from "../../assets/profileIcon.png";
import calendarIcon from "../../assets/calendarIcon.png";
import { useNavigation } from '@react-navigation/native'

const TopRightNavbar = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.navigate("Upcoming")}>
                <Image resizeMode="contain" style={styles.icon} source={calendarIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Image resizeMode="contain" style={styles.icon} source={profileIcon}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingHorizontal: 15,
        width: '100%',
        marginTop: 55
    },
    icon: {
        width: 25,
        height: 25,
        marginLeft: 25 
    }
})

export default TopRightNavbar;