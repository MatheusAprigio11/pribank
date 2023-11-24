import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
    textosComuns:{
        fontFamily: 'semibold',
    },
    infoUsuario:{
        height: 160,
        backgroundColor: '#FF364E'
    },
    iconImage:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding: 20
    },
    avatar: {
        width: 50, 
        height: 50,
        borderRadius: 9999,
    },
    nomeOlho:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop: 17,
        paddingLeft: 30,
        paddingRight: 30
    },
    infoConta:{
        marginTop:15,
    },
    saldoConta:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 27,
        paddingRight: 37,
        marginBottom: 83,
        },
    atividadeRecente:{
        marginTop: 50,
        borderBottomWidth: 2, // Largura da linha
        borderBottomColor: 'black',
        padding: 10,
        paddingLeft: 37
    }
});



export default styles