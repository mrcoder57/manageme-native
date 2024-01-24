import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './screens/home';
import Edit from './screens/Edit';
import Working from './screens/Working';
import Finish from './screens/Finish';
import AddTodo from './screens/create';
export default function App() {

const Stack = createStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Manageme" component={List}/>
      <Stack.Screen name="Edit" component={Edit}/>
      <Stack.Screen name="Working" component={Working}/>
      <Stack.Screen name="Finish" component={Finish}/>
      <Stack.Screen name="AddNew" component={AddTodo}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
