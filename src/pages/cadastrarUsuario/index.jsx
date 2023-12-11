import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react';
import styles from './styles';

const CadastrarUsuario = () => {
    const [textCPF, setTextCPF] = useState('Insira aqui seu CPF');

    const handleFocusCPF = () => {
        if (textCPF === 'Insira aqui seu CPF') {
          setTextCPF('');
        }
      };
    
      const handleBlurCPF = () => {
        if (textCPF === '') {
          setTextCPF('Insira aqui seu CPF');
        }
      };

    return (
        <View>
            <View>
                <Text> Cadastrar Usuario </Text>
            </View>
            <View>
                <TextInput
                        style={styles.input}
                        onFocus={handleFocusCPF}
                        onBlur={handleBlurCPF}
                        onChangeText={(text)  => setTextCPF(text)}
                        value={textCPF}
                    />
            </View>
        </View>
    )
}

export default CadastrarUsuario