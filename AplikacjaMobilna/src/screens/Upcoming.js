import {Text, StyleSheet, View, ScrollView} from "react-native";
import DropContainer from "../components/DropContainer";
import DropDay from "../components/DropDay";
import PageName from "../components/PageName";
import shoe from "../../assets/shoe.png";
import jacket from "../../assets/diorjacket.png";
import handbag from "../../assets/lvhandbag.png";
import diorlogo from "../../assets/brands/dior/diorlogoblack.png"
import lvlogo from "../../assets/brands/louisvuitton/lvlogoblack.png"
import {useState, useEffect} from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const Upcoming = () => {

    const [drops, setDrops] = useState([]);

    const fetchDrops = async () => {
        let fetchedDrops = [];
        const querySnapshot = await getDocs(collection(db, "Drops"));
        querySnapshot.forEach((doc) => {
            const timestamp = doc.data().time.seconds * 1000;
            const date = new Date(timestamp);
            const day = date.getDate();
            const monthName = date.toLocaleString('default', {
                month: 'short',
              });
            fetchedDrops.push(doc.data());
        });

        setDrops(fetchedDrops);
    }

    useEffect(() => {
        fetchDrops();
    }, []);

    return (
        <View style={styles.page}>
            <View style={styles.headerContainer}>
                <PageName name="UPCOMING"/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
            <DropDay day="Today"/>
            <DropContainer name="B23 High-Top Sneaker" date="Today 9:00 AM" image={shoe} logo={diorlogo}/>
            <DropDay day="07 Jan"/>
            <DropContainer name="Dior Winter Jacket" date="07 Jan 5:00 PM" image={jacket} logo={diorlogo}/>
            <DropContainer name="Graceful Handbag Mono" date="07 Jan 8:00 PM" image={handbag} logo={lvlogo}/>
            </ScrollView>
        </View>
    )
}

export default Upcoming;

const styles = StyleSheet.create({
    headerContainer: {
        marginLeft: 20
    },
    page: {
        paddingTop: 60,
        flex: 1
    }
})

