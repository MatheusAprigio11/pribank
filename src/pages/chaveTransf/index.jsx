import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './styles';
import { useState } from 'react'


const ChaveTransf = ({route}) => {
    
    const valorTransf = route.params
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
            <View>
                <Text>Para quem seria a
                </Text>
                <Text>transfêrencia?</Text>
            </View>
            <View>
                <Text>Escolha a pessoa para quem você deseja</Text>
                <Text>transferir o valor</Text>
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
        </View>
    )
}

export default ChaveTransf