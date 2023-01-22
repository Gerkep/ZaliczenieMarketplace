import {Text, StyleSheet, Image, View, TouchableOpacity } from "react-native";

const DropContainer = ({name, date, image, logo}) => {

    return (
        <View style={styles.container}>
            <View style={styles.firstColumn}>
                <Text style={styles.productName}>{name}</Text>
                <Text style={styles.date}>{date}</Text>
                <TouchableOpacity style={styles.noifyButton}><Text style={{fontFamily: "Lato-Regular"}}>Notify me</Text></TouchableOpacity>
            </View>
            <Image style={styles.image} resizeMode="contain" source={image}/>
            <Image style={styles.logo} resizeMode="contain" source={logo}/>
        </View>
    )
}

export default DropContainer;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 170,
        backgroundColor: "#F7F7F7",
        marginTop: 5,
        padding: 20,
        flexDirection: "row"
    },
    firstColumn: {
        height: "100%",
        width: "40%"
    },
    productName: {
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: "Lato-Bold",
    },
    date: {
        fontSize: 10,
        color: "#777777",
        marginTop: 5,
        fontFamily: "Lato-Regular",
    },
    noifyButton: {
        width: "90%",
        height: 30,
        borderWidth: 1,
        borderColor: "#ECECEC",
        borderRadius: "10px",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        bottom: 0
    },
    image: {
        width: "40%",
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