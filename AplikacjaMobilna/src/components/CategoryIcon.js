import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";

const CategoryIcon = ({title, icon}) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.iconContainer}>
                    <Image resizeMode="contain" style={styles.icon} source={icon}/>
                </View>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default CategoryIcon;

const styles = StyleSheet.create({
    container: {
        width: 65,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 30
    },
    iconContainer: {
        width: 65,
        height: 65,
        borderRadius: '50%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1E1E27"
    },
    icon: {
        width: 35,
        height: 35
    },
    title: {
        fontSize: 10,
        marginTop: 5,
        fontFamily: "Lato-Bold"
    }
})