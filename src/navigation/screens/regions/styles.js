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
    },
    button: {
      color: '#2196F3',
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
}

export default stylesFn