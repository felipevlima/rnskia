import { FontAwesome5 } from '@expo/vector-icons'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from '../Icon'

const data = [
  { name: 'Dados pessoais', icon: 'address-card' },
  { name: 'Biometria', icon: 'fingerprint' },
  { name: 'Configuração do App', icon: 'cog' },
]

export const CustomList = () => {
  return (
    <View style={{ width: '100%', backgroundColor: '#eee', borderRadius: 14 }}>
      {data.map((item, index, data) => (
        <View key={index} style={{ borderBottomWidth: index + 1 !== data.length ? 1 : 0, borderBottomColor:"#ccc", }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12, paddingHorizontal: 24, paddingRight: 8}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome5 name={item.icon} size={22} color={"#000"} />
              <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 14}}>{item.name}</Text>
            </View>
            <Icon icon="chevron-right" iconColor="#4A69C4" backgroundColor='transparent'/>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )
}