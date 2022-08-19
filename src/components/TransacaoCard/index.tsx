import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'

import { styles } from './styles';
import { Icon } from '../Icon';

type TransactionCardType = {
  item: {
    icon: string,
    title: string,
    description: string,
    value: number,
  }
}

export function TransacaoCard({ item }: TransactionCardType) {

  return (
    <View style={styles.container}>
      <View style={styles.infoSide}>
        <Icon icon={item.icon} iconSize={18} iconColor="#4A69C4" />
       
        <View style={styles.textInfo}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
      <Text style={styles.value}>-R$ {item.value}</Text>
    </View>
  );
}