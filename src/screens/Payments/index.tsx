import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Animated, FlatList, SectionList, Text, View } from 'react-native';
import { CreditCard } from '../../components/CreditCard';
import { TransacaoCard } from '../../components/TransacaoCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { DotIdicator } from '../../components/DotIdicator';
import { cards, data } from './data'
import { GenZ } from '../GenZ';

export function Payments() {
  const [currentData, setCurrentData] = useState(data[0])
  const [totalValue, setTotalValue] = useState(0)

  const calculateTotalAmount = () => {
    var totalAmount = 0
    currentData.map((section) => {
      section.data.map((item) => {
        totalAmount += item.value
      })
    })

    const roundedTotalValue = Math.round(totalAmount * 100) / 100

    return roundedTotalValue
  }

  const _onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
    const index = viewableItems[0].index
    setCurrentData(data[index])
  }, []);

  const _viewabilityConfig = {
      itemVisiblePercentThreshold: 20
  }
  
  const scrollX = useRef(new Animated.Value(0)).current
  
  useEffect(() => {
    const amount = calculateTotalAmount()
    setTotalValue(amount)
  }, [currentData])


  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Text style={styles.title}>Seus Cartões</Text>
      <Text style={styles.subtitle}>{cards.length} cartão virtual</Text>
      <View style={{ marginRight: -24, marginLeft: -24 }}>
        <FlatList
          data={cards} 
          horizontal={true}
          keyExtractor={(item, index) => `${item}${index}`}
          renderItem={({ item }) => <CreditCard item={item}/>}
          pagingEnabled
          onViewableItemsChanged={_onViewableItemsChanged}
          viewabilityConfig={_viewabilityConfig}
          showsHorizontalScrollIndicator={false}
          style={{ height: 220 }}
          ListHeaderComponent={<View style={{ width: 24 }}></View>}
          ListFooterComponent={<View style={{ width: 24 }}></View>}
          ItemSeparatorComponent={() => <View style={{margin: 8}}/>}
          onScroll={Animated.event([{nativeEvent: { contentOffset: { x: scrollX } }}], { useNativeDriver: false })}
        />
        <View style={{ marginBottom: 32 }}>
          <DotIdicator
            data={data}
            expandingDotWidth={30}
            scrollX={scrollX}
            inActiveDotOpacity={0.6}
            inActiveDotColor="#4A69C4"
            containerStyle={{
              top: 16
            }}
            dotStyle={{
              width: 10,
              height: 10,
              backgroundColor: '#7c7c7c',
              borderRadius: 5,
              marginHorizontal:5
            }}
          />
        </View>
       
      </View>
      <SectionList
        sections={currentData}
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
        ListHeaderComponent={
          <View>
            <Text style={styles.transactionsTitle}>Transações Recentes</Text>
            <Text style={styles.totalValue}>Fatura atual: <Text style={{  color: '#c2433f', fontWeight: 'bold' }}>R$ {totalValue}</Text></Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}