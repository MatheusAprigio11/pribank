import React from 'react'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { useState } from 'react';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import instance from '../../../services/axiosInstance';
import { useDispatch } from 'react-redux'
import { setToken } from '../../../services/reducers/actions';

const Login = () => {

    const navigation = useNavigation();
    const [textCPF, setTextCPF] = useState('Insira aqui seu CPF');
    const [password, setPassword] = useState('Senha');

    const dispatch = useDispatch()

    const login = async() => {
      try {
        const user = await instance.post('authtoken/login/', {
          cpf: textCPF,
          password: password
        })   
        console.log(user.data.auth_token)     
        dispatch(setToken(user.data.auth_token))
        navigation.navigate('TelaHome')
      } catch (error) {
        console.error(error.response.data)
      }
    }

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
    
      const handleFocusPassword = () => {
        if (password === 'Senha') {
          setPassword('');
        }
      };
    
      const handleBlurPassword = () => {
        if (password === '') {
          setPassword('Senha');
        }
      };


    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    source={require('../../assets/PBLogo.png')}
                    style={{width: '100%'}}
                    resizeMode='contain'
                />
                <Text style={styles.loginText}>Login</Text>
            </View>
            <View style={styles.loginspace}>
                <View style={styles.inputcpfcnpj}>
                    <Text style={styles.textsinputs}>CPF ou CNPJ</Text>
                    <TextInput
                        style={styles.input}
                        onFocus={handleFocusCPF}
                        onBlur={handleBlurCPF}
                        onChangeText={(text)  => setTextCPF(text)}
                        value={textCPF}
                    />
                </View>
                <View>
                    <Text style={styles.textsinputs}>Senha</Text>
                    <TextInput 
                        style={styles.input}
                        onFocus={handleFocusPassword}
                        onBlur={handleBlurPassword}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                </View>
                <View style={styles.buttonOkView}>
                    <TouchableOpacity style={styles.btnOk} onPress={login}>
                        <Text style={{ fontFamily: 'semibold', fontSize:20 }}>Ok</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ textAlign: 'center', color:'#fff', fontFamily:'semibold', fontSize:24 }}>Faça parte do Pribank!</Text>
                <View style={styles.cadastramentoSession}>
                    <TouchableOpacity style={styles.btnsLogin}>
                        <Text style={{ fontFamily: 'semibold', fontSize: 16 }}>Abrir Conta</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.btnsLogin}>
                        <Text style={{ fontFamily: 'semibold', fontSize: 16 }}>Abrir Conta PJ</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default Login