import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>Lasty!!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 1,

  }
})
