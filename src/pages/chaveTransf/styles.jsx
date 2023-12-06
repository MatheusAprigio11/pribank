import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    input: {
        backgroundColor: '#fff',
        borderBottomWidth: 2, // Largura da borda na parte inferior
        borderBottomColor: '#000', // Cor da borda na parte inferior
        paddingHorizontal: 8,
        height: 40,
        width: '90%',
        fontFamily: 'regular',
        color: "#858585",
        paddingLeft: 8,
        marginTop: 35,
        marginLeft: 10,
        fontSize: 20
    },

    viewTxt: {
        marginTop: 50,
    },

    mainTxt: {
        fontFamily: 'semibold',
        fontSize: 25,
        marginLeft: 15,
    },
    saldoTxt: {
        fontFamily: 'medium',
        fontSize: 15,
        marginLeft: 15,
        marginTop: 5
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
})

export default styles