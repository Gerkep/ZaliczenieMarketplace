import {View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductPreview = ({price, image, id}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Product", {pageType: "marketplace", itemId: id,})}>
                <Image resizeMode="contain" style={styles.image} source={{uri:image}}/>
                <View style={styles.details}>
                    <Text style={styles.price}>${price}</Text>
                </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "50%",
        aspectRatio: 1,
        backgroundColor: "#F7F7F7",
        padding: 15,
        borderWidth: 0.5,
        borderColor: "#ECECEC"
    },
    image: {
        width: 130,
        height: 130,
        alignSelf: "center",
        borderRadius: "10px",
    },
    details: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 12,
    },
    price: {
        fontFamily: "Lato-Regular",
    }
})

export default ProductPreview;
