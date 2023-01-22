import {View, Text, StyleSheet} from "react-native";


const PageName = ({name}) => {
    return (
        <View>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 40,
        paddingBottom: 10,
        fontFamily: 'beau',

    },
})

export default PageName;
