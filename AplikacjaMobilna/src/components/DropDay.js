import {Text, StyleSheet} from "react-native";

const DropDay = ({day}) => {


    return (
        <Text style={styles.text}>{day}</Text>
    )
}

export default DropDay;

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontFamily: "Lato-Bold",
        marginLeft: 18,
        marginTop: 28,
        marginBottom: 10,
    }
})

