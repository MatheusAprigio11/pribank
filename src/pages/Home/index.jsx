import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { MaterialCommunityIcons } from "react-native-vector-icons";

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
      </View>
    </View>
  )
}

export default Home