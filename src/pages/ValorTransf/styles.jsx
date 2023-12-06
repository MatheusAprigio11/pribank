import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    input:{
        backgroundColor: '#fff',
        borderRadius: 12,
        height: 40,
        fontFamily: 'semibold',
        paddingLeft: 8,
        marginTop: 35,
        marginLeft: 10,
        fontSize: 25
    },

    btnNext:{
        justifyContent: "center",
        borderRadius: 99,
        alignItems: "center",
        backgroundColor: '#FF364E',
        width: 45,
        height: 45,
        marginTop: 220,
        marginLeft: 340  
    },
    viewTxt:{
        marginTop: 50,
    },

    mainTxt:{
        fontFamily: 'semibold',
        fontSize: 25,
        marginLeft: 15,
    },
    saldoTxt:{
        fontFamily: 'medium',
        fontSize: 15,
        marginLeft: 15,
        marginTop: 5
    }
})

export default styles