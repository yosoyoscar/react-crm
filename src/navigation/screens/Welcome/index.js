import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import welcomeStyles from './styles';
import Button from '../../../components/Button';

const Welcome = () => {
    const styles = StyleSheet.create(welcomeStyles());
    const { navigate } = useNavigation();
    return (
        <View style={styles.container}>
          <Text style={styles.text}>{'Customer Manager Plus'}</Text>

          <Button
            onPress={() => navigate('Regions')} 
            text='View Regions' 
            disabled={false} 
          />

          <Button
            onPress={() => navigate('Add Customer')} 
            text='Add a Customer' 
            disabled={false} 
          />

          <Button
            onPress={() => false} 
            text='Clear Local Storage' 
            disabled={false} 
          />

        </View>
    )
}

export default Welcome