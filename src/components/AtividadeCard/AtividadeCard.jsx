import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialIcons';
import styles from './styles';

export default function AtividadeCard() {
  return (
    <View style={styles.container}>
      <View style={styles.cardsmov}>
        <View style={styles.iconeArea}>
            <MaterialCommunityIcons
                name='lock-outline'
                color='black'
                size={26}
            />
        </View>
        <View style={styles.infoCard}>
          <Text>Tranfêrencia Enviada</Text>
          <Text>Aprigio de Jesus</Text>
          <Text>R$2,00</Text>
        </View>
      </View>
    </View>
  )
}