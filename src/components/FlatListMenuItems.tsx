import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons'
import { MenuItem } from '../interfaces/appInterfaces'

interface Props{
    menuItem: MenuItem
}

export const FlatListMenuItems = ({menuItem}:Props) => {
    
    const navigation = useNavigation ();
    
    return(

        <TouchableOpacity
            activeOpacity={0.5} // para que no se haga tan transparente
            onPress={()=>navigation.navigate(menuItem.conponent)}        
        >
            <View style = {styles.container}>
                <Icon
                    name={menuItem.icon}
                    color="grey"
                    size= {19}
                />
                <Text style = {styles.itemText}>
                    {menuItem.name} - {menuItem.icon}
                </Text>

                <View style={{flex:1}}/>
                    <Icon
                        name= "chevron-forward-outline"
                        color="grey"
                        size= {19}
                    />
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 15
    }
});
