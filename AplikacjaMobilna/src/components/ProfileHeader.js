import * as React from 'react';
import { Text, View, StyleSheet, Animated, Image, TouchableOpacity } from 'react-native';
import profilePic from "../../assets/profile.png";
import emptyStarIcon from "../../assets/emptyStarIcon.png";
import fullStarIcon from "../../assets/fullStarIcon.png";

const Max_Header_Height = 308;
const Min_Header_Height = 200;
const Scroll_Distance = Max_Header_Height - Min_Header_Height

const ProfileHeader = ({animHeaderValue, onOptionChange, displayAll, name, pfp, sales, totalItems}) => {


    const animatedHeaderHeight =  animHeaderValue.interpolate({
        inputRange: [0, Scroll_Distance],
        outputRange: [Max_Header_Height , Min_Header_Height],
        extrapolate: 'clamp'
      })

      const animateContentOpacity = animHeaderValue.interpolate({
        inputRange: [0, Max_Header_Height - Min_Header_Height],
        outputRange: ['1', '0'],
        extrapolate: 'clamp'
      })
  return (
    <Animated.View style={[styles.mainContainer]}>
        <View style={styles.profileContainer}>
            <Animated.View style={{opacity: animateContentOpacity}}>
                <Image style={styles.profilePic} source={{uri:pfp}}/>
                    <Text style={styles.name}>{name}</Text>
                <View style={styles.statsContainer}>
                    <View style={styles.stat}>
                        <Text style={styles.label}>Total items</Text>
                        <Text style={styles.statsNumber}>{totalItems}</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.label}>Rating</Text>
                        <View style={styles.starsContainer}>
                            <Image style={styles.star} source={fullStarIcon}/>
                            <Image style={styles.star} source={fullStarIcon}/>
                            <Image style={styles.star} source={fullStarIcon}/>
                            <Image style={styles.star} source={fullStarIcon}/>
                            <Image style={styles.star} source={emptyStarIcon}/>
                        </View>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.label}>Total sales</Text>
                        <Text style={styles.statsNumber}>{sales}</Text>
                    </View>
                </View>
            {displayAll ?
            <View style={styles.optionsContainer}>
                <TouchableOpacity onPress={() => onOptionChange()} style={styles.optionSelected}>
                    <Text style={{fontFamily: "Lato-Regular"}}>ALL ITEMS</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onOptionChange()} style={styles.option}>
                    <Text style={{color: "#A8A8A8", fontFamily: "Lato-Regular"}}>LISTED</Text>
                </TouchableOpacity>
            </View>
            :
            <View style={styles.optionsContainer}>
                <TouchableOpacity onPress={() => onOptionChange()} style={styles.option}>
                    <Text style={{color: "#A8A8A8", fontFamily: "Lato-Regular"}}>ALL ITEMS</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onOptionChange()} style={styles.optionSelected}>
                    <Text style={{fontFamily: "Lato-Regular"}}>LISTED</Text>
                </TouchableOpacity>
            </View>
            }
            </Animated.View>
            </View>

    </Animated.View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
    mainContainer: {
    },
    profileContainer: {
        width: "100%",

    },
    profilePic: {
        width: 120,
        height: 120,
        borderRadius: "10px",
        alignSelf: "center",

    },
    name: {
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
        marginTop: 12,
        fontFamily: "beau"
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 20
    },
    stat: {
       alignItems: "center",
       marginHorizontal: 20
    },
    label: {
        fontSize: 12,
        fontFamily: "Lato-Regular",
    },
    statsNumber: {
        fontFamily: "Lato-Black",
        fontSize: 25

    },
    starsContainer: {
        flexDirection: "row"
    },
    star: {
        marginHorizontal: 3,
        marginVertical: 5,
        width: 16,
        height: 16
    },
    optionsContainer: {
        flexDirection: "row",
        marginTop: 20
    },
    optionSelected: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#000000",
        marginHorizontal: 45,
    },
    option: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 45,
    }
  });