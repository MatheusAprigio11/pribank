import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialIcons';
import styles from './styles';

export default function AtividadeCard() {
  return (
    <View style={styles.container}>
        <View style={styles.iconeArea}>
            <MaterialCommunityIcons
                name='lock-outline'
                color='white'
                size={26}
            />
        </View>
      <Text>AtividadeCard</Text>
    </View>
  )
}