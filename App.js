
import { useState } from 'react';
import { MessagesContext, UserContext } from './components/Contexts';
import { Icon, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AddMessageView from './components/AddMessageView';
import MessagesView from './components/MessagesView';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Style, { MyTheme } from './styles/Style';
import Settings from './components/Settings';

export default function App() {

  const [messages, setMessages] = useState([]);

  console.log(messages);

  return (
      <MessagesContext.Provider value={{ messages, setMessages }}>
        <PaperProvider theme={MyTheme}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </PaperProvider>
      </MessagesContext.Provider>
  );
}

const Tab = createMaterialTopTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        tabBarPosition='top' 
        style={Style.container} 
        screenOptions={{
          tabBarActiveTintColor: 'black', 
          tabBarInactiveTintColor: MyTheme.colors.primary,
          tabBarStyle: {backgroundColor: MyTheme.colors.surfaceVariant}
        }}
        > 
        <Tab.Screen
          name='Add Workout'
          options={{ title: 'Add Workout', tabBarIcon: ({color}) => <Icon color={color} source='plus' size={24} /> }}
          component={AddMessageView}
        />
        <Tab.Screen
          name='workout'
          options={{ title: 'Workouts', tabBarIcon: ({color}) => <Icon color={color} source='arm-flex' size={24} /> }}
          component={MessagesView} 
       />
        <Tab.Screen
          name='Settings'
          options={{ title: 'Settings', tabBarIcon: ({color}) => <Icon color={color} source='cog' size={24} /> }}
          component={Settings}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}