import {Text, StyleSheet, Image, View } from "react-native";

const ProductSummaryPreview = ({name, image, brand, price}) => {
    return (
        <View style={styles.container}>
            <View style={styles.firstColumn}>
                <Text style={styles.productName}>{name}</Text>
                <Text style={styles.brand}>{brand}</Text>
                <Text style={styles.price}>${price}</Text>
            </View>
            <Image style={styles.image} resizeMode="contain" source={{uri:image}}/>
        </View>
    )
}

export default ProductSummaryPreview;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 140,
        backgroundColor: "#1E1E27",
        marginTop: 5,
        padding: 20,
        flexDirection: "row",
        borderRadius: 10
    },
    firstColumn: {
        height: "100%",
        width: "50%"
    },
    productName: {
        fontSize: 14,
        fontWeight: "bold",
        color: "white"
    },
    brand: {
        fontSize: 10,
        color: "#F1F1F1",
        marginTop: 5
    },
    price: {
        fontWeight: "900",
        fontSize: 20,
        position: "absolute",
        bottom: 0,
        color: "white"
    },
    image: {
        width: "45%",
        height: "100%",
        marginHorizontal: 20,
        zIndex: 1
    },
    logo: {
        width: 50,
        height: 30,
        top: 20,
        right: 12,
        position: "absolute",
        zIndex: 2
    }
})