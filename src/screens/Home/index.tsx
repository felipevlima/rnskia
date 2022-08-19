import React, { useEffect, useState } from 'react';
import { Image, Pressable, SectionList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Chart } from '../../components/Chart';
import { TransacaoCard } from '../../components/TransacaoCard';

import { styles } from './styles';

import { data } from './data'
import { useNavigation } from '@react-navigation/native';
import { Label } from '../../components/Chart/Label';

const handleCalculateTotalValue = () => {
  var totalValue = 0;

  data.map((item) => {
    item.data.map((itemData) => {
      totalValue += itemData.value
    })
  })

  return totalValue
}

export function Home({ navigation }) {
  const [totalAmount, setTotalAmount] = useState(0)

  const StickHeader = () => (
    <View>
      <Text style={styles.transactionsTitle}>Transações Recentes</Text>
      <Text style={styles.totalValue}>Gasto total: <Text style={{  color: '#c2433f', fontWeight: 'bold' }}>R$ {totalAmount}</Text></Text>
    </View>
  )

  const handleGoToProfile = () => {
    navigation.navigate('Profile')
  }

  useEffect(() => {
    const amount = handleCalculateTotalValue()
    setTotalAmount(amount)
  }, [])

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>R$ 27.890,07</Text>
          <Text style={styles.subtitle}>Saldo disponível</Text>
        </View>
        <Pressable onPress={handleGoToProfile}>
          <View style={styles.profile}>
            <Image source={require('../../assets/images/profile.png')} style={styles.profile}/>
          </View>
        </Pressable>
      </View>
      <Chart/>
      <StickHeader />
      <SectionList
        sections={data}
        keyExtractor={(item, index) => `${item}${index}`}
        renderItem={({ item }) => <TransacaoCard item={item}/>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionTitle}>{title}</Text>
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View>
            <Text style={{ color: '#7c7c7c' }}>Sem novas cobranças por aqui! 😊</Text>
          </View>
        }
        ListFooterComponentStyle={{ height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        alwaysBounceVertical
      />
    </SafeAreaView>
  );
}