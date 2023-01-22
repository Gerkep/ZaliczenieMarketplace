import { Image, StyleSheet } from "react-native";

const ProductBigPreview = ({image}) => {
    return (
        <Image style={styles.image} resizeMode="contain" source={{uri:image}}/>
    )
}

export default ProductBigPreview;

const styles = StyleSheet.create({
    image: {
        width: "95%",
        height: 220,
        alignSelf: "center"
    }
})