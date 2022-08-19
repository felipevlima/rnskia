import React from 'react'
import { Dimensions, View } from 'react-native'
import { Canvas, Circle, Group, LinearGradient, RoundedRect, vec, useFont, Text, TextPath, Skia, Blur } from '@shopify/react-native-skia'
import CaitoFont from '../../assets/fonts/Cairo-Regular.ttf'
import { LoadIndicator } from '../LoadIndicator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GenZ } from '../../screens/GenZ';

const width  = Dimensions.get('screen').width - 80;
const height = 220;

interface CardItem {
  item: { 
    cardName: string, 
    cardNumber: string, 
    dueDate: string, 
    ccv: number 
    cardColors: string[]
  },
}

export function CreditCard({ item }: CardItem) {
  const font16 = useFont(CaitoFont, 16)
  const font32 = useFont(CaitoFont, 24)

  const circle = Skia.Path.Make();
  circle.addCircle(30, -10, 50);

  if (font16 === null) {
    return (
      <View style={{ height: height }}>
        <LoadIndicator />
      </View>
    )
  }
  return (
    <View>
      <Canvas style={{ height, width }}>
        <RoundedRect x={0} y={0} height={height} width={width} r={10}>
          <LinearGradient 
            start={vec(0, 0)}
            end={vec(256, 256)}
            colors={item.cardColors}
          />            
        </RoundedRect>
        <Group>
          <Circle cx={width - 60} cy={40} r={20} color="#eb001b"/>
          <Circle cx={width - 35} cy={40} r={20} color="#f79e1b" />
        </Group>
        <Text y={50} x={20} font={font16} color="#FFF" text={item.cardName}/>
        <Text y={height - 90} x={20} font={font32} color="#FFF" text={item.cardNumber}/>
        <Text y={height - 30} x={20} font={font16} color="#FFF" text={item.dueDate}/>
        <Text y={height - 30} x={width - 60} font={font16} color="#FFF" text={item.ccv.toString()}/>
        {/* <TextPath text="Cartão de Crédito virtual" font={font16} path={circle} color="#000" opacity={0.3}>
          <Blur blur={1} />
        </TextPath> */}
      </Canvas>
    </View>
  )
}