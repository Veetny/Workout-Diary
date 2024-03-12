import { StatusBar, StyleSheet } from "react-native";
import { MD3LightTheme } from "react-native-paper";


export default Style = StyleSheet.create({
    button:{
        borderWidth:1,
        paddingBottom: 7,
        paddingTop: 7,
        paddingLeft: 15,
        paddingRight: 15,
        textAlign:'center',
        fontWeight:'bold',
        borderRadius: 10,
        textTransform: 'capitalize',
    },
    selectedButton:{
        backgroundColor:'pink',
    },
    navview:{
        padding: 20,
    },
    workshow:{
        backgroundColor:'pink',
        borderRadius: 1,
    },
    header: {
        fontWeight: 'bold',
        margin: 5,
    },
    formfield:{
        margin: 5,
        padding: 3,
    },
    itemText:{
        fontWeight: 'bold',
        fontSize: 18
    },
    divider:{
        marginTop:5, 
        marginBottom: 5,
        backgroundColor: 'black'
    },
    calendar:{
        fontSize: 26,
        padding: 12,
        borderColor: 'pink',
        borderstyle: 'solid',
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: 'pink',
        paddingTop: 20,
    },
    label:{
        fontSize:16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    result:{
        marginTop: 10, 
        fontSize:16,
        color: 'Pink',
    },
    buttonRow:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'flex-start',
        color: 'Pink',
        padding: 10,
    },
    container:{
        marginTop: 25,
    },
    selectedButton:{
        backgroundColor: 'pink',
        marginLeft: 10,
        marginRight: 10,
    },
})

export const MyTheme = {
    ...MD3LightTheme,
    roundness: 2,
    colors: {
        ...MD3LightTheme.colors,
        primary: 'blue',
        surfaceVariant: 'pink',
        onSurface: 'black'
    }
}