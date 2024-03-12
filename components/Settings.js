import React, { useState } from "react";
import { Button, Text, RadioButton } from "react-native-paper";
import { View } from "react-native";
import Style from "../styles/Style";

export default function Converter() {
    
    const [convertedValue, setConvertedValue] = useState('');
    const [displayUnit, setDisplayUnit] = useState('kilometers');


    return (
        
            <View>
            <Text variant="headlineLarge" style={Style.header}>Units</Text>
            <RadioButton.Group onValueChange={newValue => setDisplayUnit(newValue)} value={displayUnit}>
                <View style={Style.radioButton}>
                    <RadioButton.Item label="Display in Kilometers" value="kilometers" />
                    <RadioButton.Item label="Display in Miles" value="miles" />
                </View>
            </RadioButton.Group>
            <Button mode="contained">Convert</Button>
            <Text>{convertedValue}</Text>
        </View>
    );
}