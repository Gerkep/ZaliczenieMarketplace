import { StyleSheet, StatusBar, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather , Octicons, Foundation} from '@expo/vector-icons';
import MainPage from './src/screens/MainPage';
import Profile from './src/screens/Profile';
import Upcoming from './src/screens/Upcoming';
import Marketplace from './src/screens/Marketplace';
import Product from './src/screens/Product';
import PurchaseSuccess from './src/screens/PurchaseSuccess';
import ShippingInfo from './src/screens/ShippingInfo';
import Sell from './src/screens/Sell';
import ProductListed from './src/screens/ProductListed';
import ScanRequest from './src/screens/ScanRequest';
import Login from './src/screens/Login';
import { useFonts } from 'expo-font';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

// const MainLoader = () => {
//   const [initialised, setInitialised] = useState(false);
//   const [initialRoute, setInitialRoute] = useState('Login')
//   const auth = getAuth();
  
//   useEffect(() => {
//     async function getStorageValue() {
//       await onAuthStateChanged(auth, (user) => {
//         if (user) {
//           console.log("user")
//           setInitialRoute("MainPage")
//         } 
//       });
//       setInitialised(true)
//     }
//     getStorageValue();
//   }, []);

//   return initialised
//     ? <App initialRoute={initialRoute} />
//     : ''

// }

const Tabs = () => {

  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={{
        tabBarActiveTintColor: '#1E1E27',
        tabBarShowLabel: false,
      }}
      
      backBehavior="history"
    >
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          headerShown: false,
          tabBarStyle: { display: "none" }
        }}
      />
      <Tab.Screen
        name="MainPage"
        component={MainPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" color={color} size={30} />
          ),
          headerShown: false,
          tabBarStyle: { display: "none" }
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={Upcoming}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="calendar" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Marketplace"
        component={Marketplace}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="person" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="PurchaseSuccess"
        component={PurchaseSuccess}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ShippingInfo"
        component={ShippingInfo}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Sell"
        component={Sell}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ProductListed"
        component={ProductListed}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ScanRequest"
        component={ScanRequest}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  }
})

export default function App() {

  const [loaded] = useFonts({
    'beau': require('./assets/fonts/beau.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
  });
  if(!loaded) {
    return;
  }

  return (
    <View style={{flex: 1}}>
    <StatusBar animated={true} barStyle="dark-content"/>
    <NavigationContainer theme={MyTheme}>
      <Tabs/>
    </NavigationContainer>
    </View>
  );
}