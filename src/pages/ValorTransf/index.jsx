import { View, Text, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import instance from '../../../services/axiosInstance';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from "react-native-vector-icons";

const ValorTransf = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [valorTransf, setValorTransf] = useState('R$0,00');
  const navigation = useNavigation();


  const { token } = useSelector(state => {
    return state.userReducer
  })

  const fetchData = async () => {
    try {
      const cliente = await instance.get('contas/',
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


  const handleFocusCPF = () => {
    if (valorTransf === 'R$0,00') {
      setValorTransf('');
    }
  };

  const handleBlurCPF = () => {
    if (valorTransf === '') {
      setValorTransf('R$0,00');
    }
  };


  const validarValor = () => {
    if (valorTransf > data[0].saldo) {
      console.log('Valor maior')
    } else {
      navigation.navigate('TransChave')
    }
  }

  return (
    !loading ? (
      <View>
        <View>
          <Text>Qual o Valor da Transferência?</Text>
        </View>
        <View>
          <Text>Saldo disponível R${data[0].saldo}</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            onFocus={handleFocusCPF}
            onBlur={handleBlurCPF}
            onChangeText={(valorTransf) => setValorTransf(valorTransf)}
            value={valorTransf}
          />
        </View>
        <TouchableOpacity style={styles.btnOk} onPress={() => navigation.navigate('ChaveTransf', valorTransf)}>
          <MaterialCommunityIcons
            name='chevron-right'
            color='black'
            size={30}
          />
        </TouchableOpacity>
      </View>
    ) : (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <ActivityIndicator size={30} color={'#000'} />
      </View>
    )
  )
}

export default ValorTransf