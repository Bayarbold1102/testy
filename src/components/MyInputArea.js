import React from 'react';

import { StyleSheet, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

export default function MyInputArea(props){

    return (
        <TextInput
        multiline={true}
        numberOfLines={5}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="number-pad"
        {...props}
        style={[css.inputField, props.style]}
        />
    );
}


const css = StyleSheet.create({
inputField:{
    borderWidth:1,
    borderColor:"gray",
    marginHorizontal:20,
    marginVertical:10,
    padding:10
}

});
