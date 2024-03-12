import { useContext, useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { MessagesContext } from "./Contexts";
import { View, Modal, Pressable, Alert } from "react-native";
import Style from "../styles/Style";
import { Calendar } from "react-native-calendars";
import { Icon } from 'react-native-paper';



export default function AddMessageView() {

    const values = ["run", "rowing", "skate"];
    const [value, setValue] = useState(values[0]);

    const { setMessages } = useContext(MessagesContext);
    const [duration, setDuration] = useState('');
    const [distance, setDistance] = useState('');

    const header = 'Add Workout'

    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState();
    const [dateShow, setDateShow] = useState();

    function ButtonSelector({values, SelectedValue, SelectionChanged}){
        return(
            <View style={Style.buttonRow}>
                {values.map(value =>
                <Pressable key={value} onPress={ ()=>SelectionChanged(value)}>
                    <Text style={[Style.button, value==SelectedValue && Style.selectedButton]}>
                            {value} <Icon color={"black"} source={value} size={24}/>
                    </Text>
                </Pressable>)}
            </View>
        )
    }

    function dateSelected(day) {
        setVisible(false);
        setDate(day);
        setDateShow(day.dateString);
    }

    function addMessage() {
        if (parseFloat(distance) < 0 || parseFloat(duration) < 0) {
            Alert.alert('Error', 'Distance and duration must be greater than or equal to zero');
            setDistance(0);
            setDuration(0);
            return;
        }
        setMessages(prev => [...prev, { distance, duration, dateShow, value }]);
        setDistance('');
        setDuration('');
        
    }

    return (
        <View style={Style.navview}>
            <Text variant="headlineLarge" style={Style.header}>{header}</Text>
                <View>
                    <View style={Style.container}>
                    <Text style={Style.label}>Select One:</Text>
                    <ButtonSelector values = {values} SelectedValue={value} SelectionChanged={setValue}/>
                    <Text style={Style.label}></Text>
                    </View>
                    <TextInput keyboardType="number-pad" style={Style.formfield} label={'Distance'} value={distance} onChangeText={setDistance} />
                    <TextInput keyboardType="number-pad" style={Style.formfield} label={'Duration'} value={duration} onChangeText={setDuration} />
                    <Modal visible={visible} transparent={true}>
                    <Calendar style={{ borderWidth: 2 }} onDayPress={dateSelected} />
                    </Modal>
                    <Pressable onPress={() => setVisible(true)}>
                    <Text style= {Style.calendar}><Icon source='calendar' size={24} /> {date ? date.dateString : 'Select date'}</Text>
                    </Pressable>

                    <Button style={Style.formfield} mode="contained" onPress={addMessage}>Add workout</Button>
                </View>
        </View>
    );
}