import * as React from 'react';
import { Text, View, StyleSheet, Animated, Image } from 'react-native';
import diorlogo from "../../assets/brands/dior/diorlogoblack.png";
import filterIcon from "../../assets/filterIcon.png";
const Max_Header_Height = 200;
const Min_Header_Height = 70;
const Scroll_Distance = Max_Header_Height - Min_Header_Height

const MarketHeader = ({animHeaderValue}) => {

    const animatedHeaderHeight =  animHeaderValue.interpolate({
        inputRange: [0, Scroll_Distance],
        outputRange: [Max_Header_Height , Min_Header_Height],
        extrapolate: 'clamp'
      })
      const animateBigLogoOpacity = animHeaderValue.interpolate({
        inputRange: [0, Max_Header_Height - Min_Header_Height],
        outputRange: ['1', '0'],
        extrapolate: 'clamp'
      })
      const animateSmallLogoOpacity = animHeaderValue.interpolate({
        inputRange: [0, Max_Header_Height - Min_Header_Height],
        outputRange: ['0', '1'],
        extrapolate: 'clamp'
      })
      const animateMarginTop = animHeaderValue.interpolate({
        inputRange: [0, Max_Header_Height - Min_Header_Height],
        outputRange: [55, 0],
        extrapolate: 'clamp'
      })
  return (
    <Animated.View 
        style={[
          styles.header,
          {
            height: animatedHeaderHeight,
          }

        ]}
      >
        <Animated.Image 
            style={[styles.logo, {opacity: animateBigLogoOpacity, marginTop: animateMarginTop}]} 
            resizeMode="contain" 
            source={diorlogo}
        />   
        <View style={styles.bar}>
            <Animated.Image style={[styles.smallLogo, {opacity: animateSmallLogoOpacity}]} resizeMode="contain" source={diorlogo}/>
            <View style={{flexDirection: "row"}}>
                <Image style={styles.icon} resizeMode="contain" source={filterIcon}/>
                <Text style={styles.text}>FILTERS</Text>
            </View>
        </View>
    </Animated.View>
  );
};

export default MarketHeader;

const styles = StyleSheet.create({
    header: {
      justifyContent: 'center',
      alignItems: 'center',      
      left: 0,
      right: 0,
      backgroundColor: "white",
    },
    headerText: {
      color: '#fff',
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    logo: {
        width: 140,
        height: 50,
        alignSelf: "center",
        marginBottom: 10
    },
    bar: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 14,
        alignItems: "center",
        paddingVertical: 15,
        backgroundColor: "white"
    },
    icon: {
        width: 20, 
        height: 20
    },
    text: {
        fontSize: 15,
        marginLeft: 10,
        fontFamily: "Lato-Regular",
    },
    smallLogo: {
        width: 50,
        height: 30
    }
  });