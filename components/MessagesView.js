import React, { useContext } from "react";
import { Divider, Text } from "react-native-paper";
import { MessagesContext } from "./Contexts";
import { FlatList, View } from "react-native";
import Style from "../styles/Style";
import { Icon } from 'react-native-paper';

export default function MessagesView(){

    const {messages} = useContext(MessagesContext);

    const calculateTotalDistance = (type) => {
        let totalDistance = 0;
        messages.forEach(message => {
            if (message.value === type) {
                totalDistance += parseFloat(message.distance);
            }
        });
        return totalDistance;
    };

    return(
        <View style={Style.navview}>
            <Text variant="headlineLarge" style={Style.header} >
                <Icon source='arm-flex' size={50} />

                Your Workouts:
        
            </Text>
            <View style={Style.workshow}>
                        <Text style={Style.itemText}><Icon color={"black"} source={"run"} size={24}></Icon> Distance:</Text>
                        <Text>{calculateTotalDistance('run')} Km</Text>
                        <Text style={Style.itemText}><Icon color={"black"} source={"rowing"} size={24}></Icon> Distance:</Text>
                        <Text>{calculateTotalDistance('rowing')} Km</Text>
                        <Text style={Style.itemText}><Icon color={"black"} source={"skate"} size={24}></Icon> Distance:</Text>
                        <Text>{calculateTotalDistance('skate')} Km</Text>
                    </View>
            <FlatList
                data={messages}
                renderItem={({ item }) => <Item message={item} />}
                
            />
        </View>
    );
}

function Item({ message }) {
    return (
        <View style={Style.workshow}>
            <Text style={Style.itemText}>Workout:</Text>
            <Text>{message.distance} Km</Text>
            <Text>{message.duration} Min</Text>
            <Text>{message.dateShow}<Icon source='calendar-outline' size={20} /></Text>
            <Text>{message.value} <Icon color={"black"} source={message.value} size={20} /></Text>
            <Divider bold={false} style={Style.divider} />
        </View>
    );
}