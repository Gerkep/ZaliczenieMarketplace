import {TouchableOpacity, Text, StyleSheet, Image} from "react-native";

const ActionButton = ({text, icon, action}) => {

    return (
        <TouchableOpacity onPress={action} style={styles.button}>
            {icon && <Image resizeMode="contain" style={styles.icon} source={icon}/>}
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ActionButton;

const styles = StyleSheet.create({
    button: {
        width: "90%",
        height: 50,
        backgroundColor: "#1E1E27",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: "10px",
        marginTop: 20,
        marginBottom: 20,
    },
    text: {
        fontWeight: "900",
        fontSize:20,
        color: "white",
        fontFamily: 'beau',
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 12
    }
})