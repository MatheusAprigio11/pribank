import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react'
import React from 'react'
import styles from './styles'
import instance from '../../../services/axiosInstance';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const ConfirmarPix = ({ route }) => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})

    const { valorTransf, chaveTransf } = route.params || {}
    const navigation = useNavigation();

    console.log(valorTransf)
    console.log(chaveTransf)
    const { token } = useSelector(state => {
        return state.userReducer
    })


    const fetchData = async () => {
        try {
            const cliente = await instance.get(`clienteConta?search=${chaveTransf}`,
                {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                }
            )
            setData(cliente.data)
            setTimeout(() => {
                setLoading(false)
            }, 1000)

            console.log(cliente.data)
        } catch (error) {
            console.log(error.response.data)

        }

    }

    useEffect(() => {
        fetchData()
    }, [])

    const fazerTransf = async () => {
        try {
            const responseData = await instance.post(`movimentacao/`,{
                cpf: chaveTransf,
                valor: valorTransf,
                tipo: 'Pix'
              },{
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
        } catch (error) {
            console.error(error)
        }
    }

    const executarEMudarTela = () => {
        fazerTransf()
        navigation.navigate('TransConfirmada')
    }

    return (
        !loading ? (
            <View>
                <View style={styles.viewTxt}>
                    <Text style={styles.mainTxt}>Transferência para:</Text>
                    <Text style={styles.nameTxt}>{data[0].first_name} {data[0].last_name}</Text>
                </View>
                <View>
                    <Text style={styles.saldoTxt}>R${valorTransf}</Text>
                </View>
                <View style={styles.chaveInfo}>
                    <Text style={styles.chaveTxt}>Chave</Text>
                    <Text style={styles.chaveTxtPf}>CPF</Text>
                </View>
                <View style={styles.btnConfirmarView}>
                    <TouchableOpacity
                        style={styles.btnConfirmar}
                        onPress={() => executarEMudarTela()}
                    >
                        <Text style={styles.btnTxt}>CONFIRMAR</Text>
                    </TouchableOpacity>
                </View>

            </View>
        ) : (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <ActivityIndicator size={30} color={'#000'} />
            </View>
        )
        )
}

export default ConfirmarPix