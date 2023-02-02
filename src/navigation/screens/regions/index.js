import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import regionsStyles from './styles';
import Button from '../../../components/Button';
import { REGIONS } from '../../../utilities/helpers';

const Regions = () => {
    const styles = StyleSheet.create(regionsStyles());
    const { navigate } = useNavigation();
    const customers = useSelector(state => state.customer.list.customers)
    console.log('Regions.customers:', customers);
    const Item = ({title}) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
    return (
        <View style={styles.container}>
          <Text style={styles.text}>{'Select a Region'}</Text>

          {REGIONS.map( (region) => 
            <Button
              key={region.id}
              style={styles.button} 
              onPress={() => navigate('Customers', region)} 
              text={region.title}
              disabled={false} 
            />
          )}

          <Button
            style={styles.button} 
            onPress={() => navigate('Add Customer')} 
            text='Add a Customer' 
            disabled={false} 
          />

        </View>
    )
}

export default Regions