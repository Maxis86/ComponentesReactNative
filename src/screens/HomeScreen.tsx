

import React from 'react'
import { FlatList } from 'react-native'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { FlatListMenuItems } from '../components/FlatListMenuItems'
import { MenuItem } from '../interfaces/appInterfaces'
import { styles } from '../theme/appTheme'



const manuItems:MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        conponent: 'Animation101Screen'
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        conponent: 'Animation102Screen'
    }
]

export const HomeScreen = () => {

    const {top} = useSafeAreaInsets();

    const renderListHeader = () => {
        return (
            <View style={{marginTop: top+20, marginBottom: 20}}>
                <Text style={styles.title}>Opciones de Menú</Text>
            </View>
        )
    }

    const itemSeparator = () =>{
        return (
            <View style={{
                borderBottomWidth: 1,
                opacity: 0.4,
                marginVertical:8
            }}>

            </View>
        )
    }

    return (
        <View style={{flex:1, ...styles.globalMargin}}>

            <FlatList
                data={manuItems}
                renderItem={({item}) => <FlatListMenuItems menuItem={item}/>}
                keyExtractor={(item)=>item.name}
                ListHeaderComponent={()=>renderListHeader()}
                ItemSeparatorComponent={()=>itemSeparator()}
            />

        </View>
    )
}
