import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/login";
import CadastrarPJ from "../pages/cadastrarPj";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
           {/* <Stack.Screen 
                name="CadastrarPj"
                component={CadastrarPJ}
                options={{ headerShown: false }}
            /> */}
            <Stack.Screen 
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}