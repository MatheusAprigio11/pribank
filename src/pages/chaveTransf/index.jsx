import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';
import { useState } from 'react'
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native'


const ChaveTransf = ({ route }) => {

  const navigation = useNavigation();

  const valorTransf = route.params || {}
  console.log(valorTransf)

  const [chaveTransf, setChaveTransf] = useState('CPF');

  const handleFocusCPF = () => {
    if (chaveTransf === 'CPF') {
      setChaveTransf('');
    }
  };

  const handleBlurCPF = () => {
    if (chaveTransf === '') {
      setChaveTransf('CPF');
    }
  };

  return (
    <View>
      <View style={styles.viewTxt}>
        <Text style={styles.mainTxt}>Para quem seria a
        </Text>
        <Text style={styles.mainTxt}>transfêrencia?</Text>
      </View>
      <View>
        <Text style={styles.saldoTxt}>Escolha a pessoa para quem você deseja</Text>
        <Text style={styles.saldoTxt}>transferir o valor</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onFocus={handleFocusCPF}
          onBlur={handleBlurCPF}
          onChangeText={(chaveTransf) => setChaveTransf(chaveTransf)}
          value={chaveTransf}
        />
      </View>
      <TouchableOpacity style={styles.btnNext} onPress={() => navigation.navigate('ConfirmarPix',  { valorTransf, chaveTransf })}>
        <MaterialCommunityIcons
          name='chevron-right'
          color='black'
          size={40}
        />
      </TouchableOpacity>
    </View>
  )
}

export default ChaveTransf