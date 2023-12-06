import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const ConfirmarPix = ({ route }) => {
    const valorTransf = route.params
    console.log(valorTransf)
    return (
        
        <View>
            <View>
                <Text>Transferência para:</Text>
                <Text>Fulano de fulane filanu</Text>
            </View>
            <View>
                <Text>R${valorTransf}</Text>
            </View>
            <View>
                <Text>Chave</Text>
                <Text>CPF</Text>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.btnConfirmar}
                    onPress={() => navigation.navigate('ChaveTransf', valorTransf)}
                    >
                    <Text>CONFIRMAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ConfirmarPix