import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil'; 
import inputTextWallPaper from '../atoms/wallPaperInputText';

export default function () {
  const [onSearchValue, setOnSearchValue]= useRecoilState(inputTextWallPaper);

  onChangeOfText=(text)=>{
    setOnSearchValue(text);
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={this.onChangeOfText}

        style={styles.inputHolder}
        placeholder='Search anything...' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    width: '100%',
    // top: 20,
    // position: 'absolute'
  },
  inputHolder: {
    backgroundColor: 'wheat',
  }

})