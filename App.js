import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Platform, ScrollView, Alert } from 'react-native';

function TodayTaskPage() {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Task 1', completed: false },
    { id: 2, task: 'Task 2', completed: false },
    { id: 3, task: 'Task 3', completed: false },
    { id: 4, task: 'Task 4', completed: false },
    { id: 5, task: 'Task 5', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const handleTaskComplete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    
    };
    
  

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, { id: prevTasks.length + 1, task: newTask, completed: false }]);
      setNewTask('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Today's Tasks</Text>
      </View>
      <ScrollView>
        <FlatList
          contentContainerStyle={{ marginTop: 150, paddingHorizontal: 20 }}
          data={tasks}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.taskItem, { backgroundColor: 'white' }, { borderRadius: 15 }, { marginTop: 20 }, { borderColor: 'black' }]}
              onPress={() => handleTaskComplete(item.id)}
            >
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'' }}>
            <View style={styles.square} />
              
              <Text style={item.completed ? styles.completedTask : styles.incompleteTask}>
                {item.task}
              </Text>
              
              <View style={{ position: 'absolute', right:5 }}>
              <View style={[styles.circular]} />
              </View>
             </View>
             
             
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter new task"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  headerContainer: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  taskItem: {
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    position: 'relative',
  },
  taskText: {
    fontSize: 18,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#666',
  },
  incompleteTask: {
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    
   },
  addButtonText: {
    fontSize: 24,
    color: 'white',
  },
  square: {
    width: 22,
    height: 22,
    backgroundColor: 'black',
    marginRight: 12,
  },
  circular: {
    width: 22,
    height: 22,
    backgroundColor: 'white',
    borderRadius:12,
    borderWidth: 7, 
  borderColor: 'black'
    
    
    
    
  },
});

export default TodayTaskPage;





    
  
   
