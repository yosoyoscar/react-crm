import { StyleSheet } from 'react-native'

const stylesFn = () => {

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 40,
    }
  });
}

export default stylesFn