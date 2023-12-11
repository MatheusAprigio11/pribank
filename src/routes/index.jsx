import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/login";
import Home from "../pages/Home";
import AreaPix from "../pages/areaPix";
import ValorTransf from "../pages/ValorTransf";
import ChaveTransf from "../pages/chaveTransf";
import ConfirmarPix from "../pages/confimarTransf";
import TransfConfirmada from "../pages/transfConfirmada";
import CadastrarCliente from "../pages/cadastrarCliente";

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
                <Stack.Screen 
                    name="AreaPix"
                    component={AreaPix}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="ValorTransf"
                    component={ValorTransf}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="ChaveTransf"
                    component={ChaveTransf}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="ConfirmarPix"
                    component={ConfirmarPix}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="TransConfirmada"
                    component={TransfConfirmada}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="CadastrarCliente"
                    component={CadastrarCliente}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>

    )
}