import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { MaterialCommunityIcons } from "react-native-vector-icons";

import ButtonHome from '../../components/ButtonsHome/ButtonHome';
import AtividadeCard from '../../components/AtividadeCard/AtividadeCard';

const Home = () => {
  return (
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
            source={require('../../assets/profile.jpg')}
            style={styles.avatar}
          />
        </View>
        <View style={styles.nomeOlho}>
          <Text style={{ fontSize: 22, fontFamily: 'semibold' }}>Olá, Fulano Prijas</Text>
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
            <Text style={{ fontFamily: 'semibold', fontSize: 20 }}>R$1000,00</Text>
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
      <View style={{alignItems: 'center', gap: 18}}>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <ButtonHome
            iconeName='attach-money'
            texto='Área PIX'
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
          <Text style={{fontSize: 17}}>Atividades Recentes</Text>
        </View>
        <AtividadeCard/>
      </View>


    </View>
  )
}

export default Home