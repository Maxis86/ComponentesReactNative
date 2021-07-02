import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import { MenuItem } from '../interfaces/appInterfaces'

interface Props{
    menuItem: MenuItem
}

export const FlatListMenuItems = ({menuItem}:Props) => {
    return(
        <View style>
            <Text>{menuItem.name} - {menuItem.icon}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
});
