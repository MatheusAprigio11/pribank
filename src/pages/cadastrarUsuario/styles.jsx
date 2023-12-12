import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#FDBCBC',
        borderRadius: 8,
        height: 40,
        width: 350,
        fontFamily: 'regular',
        paddingLeft: 8,
        marginLeft: 10,
        marginTop: 10,
        
    },

    textCadastrar:{
        color: '#ff364e',
        fontFamily: 'semibold',
        fontSize: 30,
    },

    titleCadastrar:{
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 50
    },

    btnOk:{
        justifyContent: "center",
        borderRadius: 13,
        alignItems: "center",
        backgroundColor: '#ff364e',
        width: 140,
        height: 40,
        marginTop: 15,
        marginBottom:40,
        
    },

    btnView:{
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default styles