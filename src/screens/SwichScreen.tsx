import React, { useState } from "react";
import { Platform } from "react-native";
import { View, Switch, StyleSheet } from "react-native";

export const SwichScreen = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(!isEnabled);
      

    return (
        <View style={styles.container}>
            <Switch
            trackColor={{ false: "#D9D9DB", true: "#red" }}
            thumbColor={(Platform.OS === 'android') ? '#5856D6':''}
            //ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            />
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  });
