import { View, Text, StyleSheet } from 'react-native'
import Block from './components/Block'

export default function BlocksInfo() {
  return (
    <View style={styles.container} >
      <Text style={styles.title} >Blocos</Text>
      
      <Block
        blocks={[
          { blockHeight: 1, satPerVbyte: 1, size: 1, transactions: 1, timeAgo: '1' },
          { blockHeight: 2, satPerVbyte: 1, size: 1, transactions: 1, timeAgo: '1' },
          { blockHeight: 3, satPerVbyte: 1, size: 1, transactions: 1, timeAgo: '1' },
          { blockHeight: 4, satPerVbyte: 1, size: 1, transactions: 1, timeAgo: '1' },
        ]}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  title: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500'
  }
})