import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import styles from './styles';

const CadastrarUsuario = () => {
  const [textCPF, setTextCPF] = useState('Insira aqui seu CPF');
  const [textFN, setTextFN] = useState('Primeiro Nome');
  const [textLN, setTextLN] = useState('Sobrenome');
  const [textNascimento, setTextNascimento] = useState('Data de Nascimento(YYYY-MM-DD)');
  const [textUsername, setTextUsername] = useState('Usuário');
  const [textPassword, setTextPassword] = useState('Senha');
  const [textTel, setTextTel] = useState('Telefone');

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
  const handleFocusFirstName = () => {
    if (textFN === 'Primeiro Nome') {
      setTextFN('');
    }
  };

  const handleBlurFirstName = () => {
    if (textFN === '') {
      setTextFN('Primeiro Nome');
    }
  };
  const handleFocusLastName = () => {
    if (textLN === 'Sobrenome') {
      setTextLN('');
    }
  };

  const handleBlurLastName = () => {
    if (textLN === '') {
      setTextLN('Sobrenome');
    }
  };
  const handleFocusNascimento = () => {
    if (textNascimento === 'Data de Nascimento(YYYY-MM-DD)') {
      setTextNascimento('');
    }
  };

  const handleBlurNascimento = () => {
    if (textNascimento === '') {
      setTextNascimento('Data de Nascimento(YYYY-MM-DD)');
    }
  };
  const handleFocusUsername = () => {
    if (textUsername === 'Usuário') {
      setTextUsername('');
    }
  };

  const handleBlurUsername = () => {
    if (textUsername === '') {
      setTextUsername('Usuário');
    }
  };
  const handleFocusPassword = () => {
    if (textPassword === 'Senha') {
      setTextPassword('');
    }
  };

  const handleBlurPassword = () => {
    if (textPassword === '') {
      setTextPassword('Senha');
    }
  };
  const handleFocusTel = () => {
    if (textTel === 'Telefone') {
      setTextTel('');
    }
  };

  const handleBlurTel = () => {
    if (textTel === '') {
      setTextTel('Telefone');
    }
  };

  return (
    <View>
      <View style={styles.titleCadastrar}>
        <Text style={styles.textCadastrar}> Cadastrar Usuario </Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onFocus={handleFocusFirstName}
          onBlur={handleBlurFirstName}
          onChangeText={(text) => setTextFN(text)}
          value={textFN}
        />
        <TextInput
          style={styles.input}
          onFocus={handleFocusLastName}
          onBlur={handleBlurLastName}
          onChangeText={(text) => setTextLN(text)}
          value={textLN}
        />
        <TextInput
          style={styles.input}
          onFocus={handleFocusCPF}
          onBlur={handleBlurCPF}
          onChangeText={(text) => setTextCPF(text)}
          value={textCPF}
        />
        <TextInput
          style={styles.input}
          onFocus={handleFocusNascimento}
          onBlur={handleBlurNascimento}
          onChangeText={(text) => setTextNascimento(text)}
          value={textNascimento}
        />
        <TextInput
          style={styles.input}
          onFocus={handleFocusUsername}
          onBlur={handleBlurUsername}
          onChangeText={(text) => setTextUsername(text)}
          value={textUsername}
        />
        <TextInput
          style={styles.input}
          onFocus={handleFocusPassword}
          onBlur={handleBlurPassword}
          onChangeText={(text) => setTextPassword(text)}
          value={textPassword}
        />
        <TextInput
          style={styles.input}
          onFocus={handleFocusTel}
          onBlur={handleBlurTel}
          onChangeText={(text) => setTextTel(text)}
          value={textTel}
        />
      </View>
      <View style={styles.btnView}>
          <TouchableOpacity style={styles.btnOk}>
            <Text style={{ fontFamily: 'semibold', fontSize: 20 }}>Ok</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default CadastrarUsuario