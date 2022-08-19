import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomList } from '../../components/CustomList';
import { Icon } from '../../components/Icon';
import { styles } from './styles';

export function Profile({ navigation }) {
  const { width } = Dimensions.get('window')

  const handleGoBack = () => {
    navigation.goBack()
  }

  // const calculateMarginLeft = width - ()

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Icon icon="chevron-left" iconColor='#999998' onPress={handleGoBack}/>
        <Text style={[styles.title, { flex: 1, textAlign: 'center' }]}>Configurações</Text>
        <View style={{ height: 40, width: 40 }}/>
      </View>
      <Text style={styles.subtitle}></Text>
      <View style={styles.content}>
        <TouchableOpacity>
          <Image source={require('../../assets/images/profile.png')} style={styles.profile}/>
          <View style={styles.editButton}>
            <Text style={styles.editText}>Editar</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.name}>Tamires Brito</Text>
        <Text style={styles.accountData}> Agencia: 3214 | Conta: 12345-9</Text>
        <ScrollView style={{ width: '100%', height: '100%', marginTop: 32}}>
          <CustomList />

          <TouchableOpacity style={styles.logout}>
            <Text style={styles.logoutText}>Sair da conta</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

