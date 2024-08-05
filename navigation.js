import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import ExploreScreen from './screen/ExploreScreen';
import Profile from './screen/Profile';
import Products from './components/Items/Products';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Explore" component={ExploreScreen} />
            <Stack.Screen name="Profile" component={Profile} />
            {/* <Stack.Screen name="Products" component={Products} /> */}
        </Stack.Navigator>
    </NavigationContainer>
  );
}