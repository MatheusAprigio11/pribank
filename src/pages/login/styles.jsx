import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
    
    containerLogo:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    loginText:{
        fontSize: 50,
        marginTop: 60,
        fontFamily: "semibold"
    },

    loginspace:{
        backgroundColor:'#ff364e',
        width:'100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingStart: '5%',
        paddingEnd: '5%',
        height: "50%"
    },

    inputcpfcnpj:{
        paddingTop: '10%',
    },
    textsinputs:{
        fontFamily: 'medium',
        color: '#FFF',
        fontSize: 21,
        marginBottom: 4,
        paddingTop: 10,
    },
    input:{
        backgroundColor: '#FDBCBC',
        borderRadius: 12,
        height: 40,
        fontFamily: 'regular',
        paddingLeft: 8
    },
    buttonOkView:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    cadastramentoSession:{
        flexDirection:'row',
        justifyContent:"center",
        alignItems: "center",
        gap: 30,
    },
    btnOk:{
        justifyContent: "center",
        borderRadius: 13,
        alignItems: "center",
        backgroundColor: '#FDBCBC',
        width: 130,
        height: 36,
        marginTop: 15,
        marginBottom:40,
        
    },
    btnsLogin:{
        justifyContent: "center",
        borderRadius: 13,
        alignItems: "center",
        backgroundColor: '#FDBCBC',
        width: 140,
        height: 36,
        marginTop: 10,
        
    },
})

export default styles