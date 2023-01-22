import {Text, Image, TouchableOpacity, StyleSheet, View} from "react-native";
import searchIcon from "../../assets/searchIcon.png";

const ProductProps = ({owner, size, condition, invoice}) => {
    

    return (
        <View style={styles.propsContainer}>
            {owner &&
            <View style={styles.prop}>
                <Text style={styles.label}>Owner</Text>
                <View style={{flexDirection: "row"}}>
                    <Text style={styles.value}>{owner}</Text>
                    {/* <TouchableOpacity><Image resizeMode="contain" style={styles.icon} source={searchIcon}/></TouchableOpacity> */}
                </View>
            </View>
            }
            {condition &&            
            <View style={styles.prop}>
                <Text style={styles.label}>Condition</Text>
                <Text style={styles.value}>{condition}</Text>
            </View>
            }
            {size &&
            <View style={styles.prop}>
                <Text style={styles.label}>Size</Text>
                <Text style={styles.value}>{size}</Text>
            </View>
            }
            {invoice &&
            <View style={styles.prop}>
                <Text style={styles.label}>Invoice</Text>
                <Text style={styles.value}>{invoice}</Text>
            </View>
            }
        </View>
    )
}

export default ProductProps;

const styles = StyleSheet.create({
    propsContainer: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    prop: {
        marginRight: 40,
        marginVertical: 10
    },
    label: {
        fontSize: 14,
        color: "#777777",
        fontFamily: "Lato-Regular"
    },
    value: {
        fontSize: 14,
        fontFamily: "Lato-Bold"
    },
    icon: {
        width: 14,
        height: 14,
        marginLeft: 6
    }
})