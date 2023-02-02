import { StyleSheet } from 'react-native'

const stylesFn = () => {

  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      //fontWeight: 500,
      fontSize: 40,
      textAlign: 'center',
      marginBottom: 30,
    }
  });
}

export default stylesFn