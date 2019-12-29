import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dimensions } from 'react-native';
import { todo } from './assets/data';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Layout = {
 window: {
  width,
  height
 },
 isSmallDevice: width < 375
};

const headerTitles = [
 { name: 'ToDo' },
 { name: 'Time' },
];

const ToDoList = (props) => {
 return (
  <View style={styles.container}>

   <View style={styles.headerStyle}>
    {headerTitles.map((items, key) => {
     return (
      <Text key={key} style={styles.headerTitle}>
       {items.name}
      </Text>
     );
    })}</View>
   <View>
    {todo.map((value, index) => {
     return (
      <View style={styles.todoStyle}>
       <Text key={index} style={styles.todoName}>
        {value.name}
       </Text>
       <Text key={index} style={styles.todoTime}>
        {value.time}
       </Text>
      </View>)
    })}
   </View>
  </View>
 );
};

export default ToDoList;

const styles = StyleSheet.create({
 container: { flex: 1, backgroundColor: 'red' },
 headerStyle: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 85,
  paddingTop: 35,
 },
 headerTitle: {
  width: (Layout.window.width / 2),
  fontSize: 20,
  padding: 8,
  fontWeight: 'bold',
  textAlign: 'center',
  backgroundColor: '#ADFF2F'
 },
 todoStyle: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottomColor: '#D5D5D5',
  borderBottomWidth: 1,
  paddingBottom: 20,
  paddingTop: 20
 },
 todoName: { 
  width: (Layout.window.width/2),
  fontSize: 15, 
  fontWeight: 'bold', 
  padding: 15,
  textTransform: 'capitalize'
 },
 todoTime: { 
  width: (Layout.window.width/2),
  fontSize: 15, 
  fontWeight: 'bold', 
  padding: 15, 
  textAlign: 'center' 
 }
});
