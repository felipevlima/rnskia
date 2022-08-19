import { FontAwesome5 } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

type IconProps = {
  icon: string;
  iconColor: string;
  iconSize?: number;
  backgroundColor?: string;
  onPress?: (data?: any) => void;
}

export const Icon = ({ icon, iconColor, backgroundColor, onPress, iconSize }: IconProps) => {
  if (!onPress) {
   return (
    <View style={[styles.iconSquare, { backgroundColor: backgroundColor || '#d9dde8' }]}>
      <FontAwesome5 name={icon} size={iconSize || 18} color={iconColor} />
    </View>
   )
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.iconSquare, { backgroundColor: backgroundColor || '#d9dde8' }]}>
        <FontAwesome5 name={icon} size={iconSize || 18} color={iconColor} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  iconSquare: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    // backgroundColor: '#d9dde8',
    borderRadius: 12,
  },
})