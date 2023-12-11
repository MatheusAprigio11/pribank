import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react'
import React from 'react'
import styles from './styles'
import instance from '../../../services/axiosInstance';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from "react-native-vector-icons";


const ConfirmarPix = ({ route }) => {


    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.closeBtn}>
                <TouchableOpacity
                onPress={() => navigation.navigate('TelaHome')}
                >
                    <MaterialCommunityIcons
                        name='close'
                        color='red'
                        style={{ paddingRight: 12, paddingTop: 15 }}
                        size={40}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.viewTxt}>
                <Text style={styles.mainTxt}>Transferência</Text>
                <Text style={styles.nameTxt}>Confirmada</Text>
            </View>
            <View style={styles.chaveInfo}>
                <Text style={styles.chaveTxt}>Chave</Text>
                <Text style={styles.chaveTxtPf}>CPF</Text>
            </View>
            <View style={styles.btnConfirmarView}>
                <MaterialCommunityIcons
                    name='check-circle-outline'
                    color='red'
                    style={{ paddingLeft: 10, paddingTop: 12 }}
                    size={50}
                />
            </View>

        </View>
    )
}

export default ConfirmarPix