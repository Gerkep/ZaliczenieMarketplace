import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'

const BrandContainer = ({logo, background}) => {

    const navigation = useNavigation();
    
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Marketplace")} style={styles.container}>
            <Image resizeMode="contain" style={styles.logo} source={{uri:logo}}/>
            <View style={styles.dim}></View>
            <Image style={styles.image} source={{uri:background}}/>
        </TouchableOpacity>
    )
}

export default BrandContainer;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 250,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: "100%",
        zIndex: 5,
        position: "absolute"
    },
    dim: {
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(0,0,0,0.45)',
        zIndex: 10,
        position: "absolute"
    },
    logo: {
        zIndex: 15,
        alignSelf: "center",
        width: 90,
        height: 55,
        tintColor: "#ffffff",
    }
})