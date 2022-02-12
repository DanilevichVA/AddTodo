import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';
export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title: title
    }])
 }
  return <View >
    <Navbar title = "Todo App"/>
    <ScrollView style={styles.container}>
      <AddTodo onSubmit={addTodo} /> 
      <View>
        {todos.map(todo =>{
          return <Todo todo={todo} key={todo.id} />
        })}
      </View>
      </ScrollView>
  </View>
  
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    paddingBottom: 30
    
  }

  
});
