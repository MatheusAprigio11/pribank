import { View, Text } from 'react-native'
import React from 'react'
import ButtonsPix from '../../components/ButtonsPix/ButtonsPix'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

const AreaPix = () => {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.viewTexts}>
                <Text style={styles.textoStyle}>Área PIX</Text>
                <Text style={styles.textoStyle2}>Recebimento e envios sem nenhum tipo de</Text>
                <Text style={styles.textoStyle2}>cobrança adicional, a qualquer momento!</Text>
            </View>
            <Text style={{ fontFamily: 'semibold', fontSize: 22, paddingLeft: 15, paddingTop: 55 }}>Enviar</Text>
            <View style={styles.btnsPix}>
                <View>
                    <ButtonsPix
                        iconeName='attach-money'
                        texto='Área PIX'
                        onPress={() => navigation.navigate('ValorTransf')}
                    />
                    <Text style={{ fontFamily: 'regular', fontSize: 15, paddingLeft: 0, paddingTop: 10 }}>Transferir</Text>
                </View>
                <View>
                    <ButtonsPix
                        iconeName='content-copy'
                        texto='Área PIX'
                    />
                    <Text style={{ fontFamily: 'regular', fontSize: 15, paddingLeft: 10, paddingTop: 10 }}>Copia e</Text> 
                    <Text style={{ fontFamily: 'regular', fontSize: 15, paddingLeft: 20, paddingTop: 0 }}>Cola</Text>
                </View>
                <View>
                    <ButtonsPix
                        iconeName='qr-code'
                        texto='Área PIX'
                    />
                    <Text style={{ fontFamily: 'regular', fontSize: 15, paddingLeft: 10, paddingTop: 10 }}>QR Code</Text>
                </View>
            </View>
        </View>
    )
}

export default AreaPix