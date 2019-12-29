import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './ToDoList';
import AlarmScreen from './AlarmScreen';

export default function App() {
  // <ToDoList />
  return (
    <View>
      <ToDoList />
      {/*<AlarmScreen />*/}
    </View>
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
