import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/login";
import Home from "../pages/Home";


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="TelaHome"
                    component={Home}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>

    )
}