import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

const Rootlayout = () => {
  return (
    <View style={styles.container}>
      <Text>Root Layout</Text>
      <Slot name="root" />
      <Text>_layout</Text>
    </View>
  )
}

export default Rootlayout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
