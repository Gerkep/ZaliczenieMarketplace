import {View, StyleSheet, Image, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import backIcon from "../../assets/backIcon.png";
import shareIcon from "../../assets/shareIcon.png";
import { useNavigation } from "@react-navigation/native";

const ProductNavbar = ({shareable}) => {

    const navigation = useNavigation();

    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image resizeMode="contain" style={styles.icon} source={backIcon}/>
            </TouchableOpacity>
            {shareable &&
             <TouchableOpacity>
                <Image resizeMode="contain" style={styles.icon} source={shareIcon}/>
            </TouchableOpacity>           
            }
        </View>
    )
}

export default ProductNavbar;

const styles = StyleSheet.create({
    navbar: {
        width: "100%",
        paddingVertical: 20,
        paddingLeft: 14,
        paddingRight: 20,
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    icon: {
        width: 25,
        height: 25
    },
})