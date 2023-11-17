import React from 'react'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import styles from './styles'


export default function Login(){

    const [text, onChangeText] = React.useState('Useless Text');

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
                        onChangeText={onChangeText}
                        value={text}
                    />
                </View>
                <View>
                    <Text style={styles.textsinputs}>Senha</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                    />
                </View>
                <View style={styles.buttonOkView}>
                    <TouchableOpacity style={styles.btnOk}>
                        <Text>Ok</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ textAlign: 'center' }}>Faça parte do Pribank!</Text>
                <View style={styles.cadastramentoSession}>
                    <TouchableOpacity style={styles.btnOk}>
                        <Text>Abrir Conta</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.btnOk}>
                        <Text>Abrir Conta PJ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}