import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'


export default props =>
    <View>
        {
            props.numero % 2 == 0 ?
                <Text style={Padrao.ex} >Número Par</Text> :
                <Text style={Padrao.ex} >Número Ímpar</Text>
        }
    </View>
