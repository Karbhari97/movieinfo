import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {WebView} from 'react-native-webview'

const search = () => {
  return (
    <View className="flex-1 bg-primary">
      <Text>search</Text>
      <WebView
      source={{uri: 'https://github.com/Karbhari97/movieinfo'}}
      
      />
    </View>
  )
}

export default search

const styles = StyleSheet.create({})