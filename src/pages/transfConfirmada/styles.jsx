import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainTxt :  {
        color: '#000',
        fontFamily: 'semibold',
        fontSize: 25,
    },

    nameTxt: {
        color: "#ff364e",
        fontFamily: 'semibold',
        fontSize: 25

    },

    viewTxt : {
        marginTop: 180,
        justifyContent: 'center',
        alignItems: 'center',
    },

    saldoTxt:{
        fontFamily: 'regular',
        color: "000",
        fontSize: 35,
        marginTop: 20,
        marginLeft: 10
    },
    chaveInfo :{
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 10,
        marginTop: 40
    },

    chaveTxt:{
        fontFamily: 'regular',
        fontSize: 18,
    },

    chaveTxtPf:{
        fontFamily: 'regular',
        fontSize: 18,
        marginRight: 40,
    },
    btnConfirmar:{
        backgroundColor: '#ff364e',
        borderRadius: 40,
        height: 55,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnConfirmarView :{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 80,
    },
    btnTxt:{
        fontSize: 15,
        color: '#fff',
        fontFamily: 'regular'
    },
    closeBtn:{
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }

})

export default styles