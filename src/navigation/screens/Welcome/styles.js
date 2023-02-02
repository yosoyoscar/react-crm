import { StyleSheet } from 'react-native'

const stylesFn = () => {

  return StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
      fontWeight: 500,
      fontSize: 50,
      textAlign: 'center',
      marginBottom: 30,
    },
    button: {
      marginTop: 20,
      color: '#2196F3',
    }
  });
}

export default stylesFn