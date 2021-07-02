import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Animation102Screen = () => {
    return (
        <View style = {{flex:1}}>
            <View style={styles.purpleBlox}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    purpleBlox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }
});
