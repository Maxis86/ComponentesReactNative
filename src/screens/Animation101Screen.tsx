import React, { useRef } from 'react'
import { Button, Easing } from 'react-native';
import { Animated, StyleSheet, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {
    
    const {opacity, position, fadeIn, fadeOut, startMovingPosition} = useAnimation();

    return (
        <View style = {styles.container}>
            <Animated.View style={{
                ...styles.purpleBlox,
                marginBottom: 20,
                opacity: opacity,
                transform:[{
                    translateY: position
                    // translateX: position
                }]
            }}/>

            <Button
                title="FadeIn"
                onPress={() => {
                    fadeIn(),
                    startMovingPosition(-100)
                }
                }
            />

            <Button
                title="FadeOut"
                onPress={fadeOut}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBlox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }
});
