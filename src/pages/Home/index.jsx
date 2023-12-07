import { View, Text, Image, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { useSelector } from 'react-redux';
import ButtonHome from '../../components/ButtonsHome/ButtonHome';
import AtividadeCard from '../../components/AtividadeCard/AtividadeCard';
import instance from '../../../services/axiosInstance';
import { useNavigation } from '@react-navigation/native';




const Home = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

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

  return (

    !loading ? (
      <View style={styles.container}>
        <View style={styles.infoUsuario}>
          <View style={styles.iconImage}>
            <MaterialCommunityIcons
              name='progress-question'
              color='black'
              style={{ paddingLeft: 10, paddingTop: 12 }}
              size={27}
            />
            <Image
              source={{ uri: data[0].id_cliente.foto }}
              style={styles.avatar}
            />
          </View>
          <View style={styles.nomeOlho}>
            <Text style={{ fontSize: 22, fontFamily: 'semibold' }}>Olá, {data[0].id_cliente.first_name}</Text>
            <MaterialCommunityIcons
              name='eye-outline'
              color='black'
              size={27} />
          </View>
        </View>
        <View style={styles.infoConta}>
          <View style={styles.saldoConta}>
            <View>
              <Text style={{ fontFamily: 'semibold', fontSize: 20 }}>Conta</Text>
              <Text style={{ fontFamily: 'semibold', fontSize: 20 }}>R${data[0].saldo}</Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name='chevron-right'
                color='black'
                size={25}
              />
            </View>
          </View>

        </View>
        <View style={{ alignItems: 'center', gap: 18 }}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <ButtonHome
              iconeName='attach-money'
              texto='Área PIX'
              onPress={() => navigation.navigate('AreaPix')}
            />
            <ButtonHome
              iconeName='compare-arrows'
              texto='Transferir'
            />
          </View>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <ButtonHome
              iconeName='credit-card'
              texto='Cartões'
            />
            <ButtonHome
              iconeName='money'
              texto='Empréstimo'
            />
          </View>
        </View>
        <View>

          <View style={styles.atividadeRecente}>
            <Text style={{ fontSize: 17 }}>Atividades Recentes</Text>
          </View>
          <AtividadeCard />
        </View>


      </View>
    ) : (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <ActivityIndicator size={30} color={'#000'} />
      </View>
    )

  )
}

export default Home