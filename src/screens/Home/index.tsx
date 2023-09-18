import { Alert, FlatList, Text, TextInput, TouchableOpacity, View, } from "react-native";
import { styles } from "./styles";

import { LocalSvg } from 'react-native-svg';
import { Task } from "../../components/Task";
import { EmptyTask } from "../../components/EmptyTask";
import { useState } from "react";
import { RadioButton } from "../../components/RadioButton";

type TaskProps = {
  title: string;
  status: boolean;
  color: string;
}

const data = [
  { name: 'red', color: 'F2CBBD' },
  { name: 'blue', color: 'CBE7F8' },
  { name: 'gray', color: 'e2e2e2' },
];

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [pickedColor, setPickedColor] = useState('e2e2e2')

  function handleAddTasks() {

    if (taskTitle === '') {
      return Alert.alert('Alert 🟡', 'Please type a task to create!')
    }

    const newTask: TaskProps = {
      title: taskTitle,
      status: false,
      color: pickedColor
    }

    setTasks(prevState => [...prevState, newTask])

    setTaskTitle('')
    console.log(tasks)
  }

  function handleDeleteTask(title: string) {

    Alert.alert('Delete? 🔴', `Deleting ${title}?`, [
      {
        text: 'Yes',
        onPress: () => setTasks(prevState => tasks.filter(task => task.title !== title))
      },
      {
        text: 'No',
        style: 'cancel'
      }
    ])
  }

  function handleCompleteTask(title: string) {
    setTasks(prevState => prevState.map(task => task.title === title ? { ...task, status: !task.status } : task))
  }

  function handleSelectColor(selectedColor: string) {
    setPickedColor(selectedColor)
  }

  const filteredTasks = tasks.sort((a, b) => (a.status === b.status ? 0 : a.status ? 1 : -1));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LocalSvg asset={require('../../../assets/Logo.svg')} />
      </View>

      <View style={styles.wrapper}>

        <View style={styles.search}>
          <TextInput
            style={[{ backgroundColor: `#${pickedColor}` }, styles.inputTask]}
            placeholder="Add a new task"
            placeholderTextColor={'#808080'}
            onChangeText={setTaskTitle}
            value={taskTitle}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddTasks}
          >
            <LocalSvg asset={require('../../../assets/plus.svg')} />
          </TouchableOpacity>
        </View>

        <View>
          <RadioButton data={data} onSelect={handleSelectColor} />
        </View>

        <View style={styles.tasks}>

          <View style={styles.tasksHeader}>

            <View style={styles.createdTask}>
              <Text style={styles.createdTaskText}>Created</Text>
              <Text style={styles.countText}>{tasks.length}</Text>
            </View>

            <View style={styles.createdTask}>
              <Text style={styles.completedTaskText}>Completed</Text>
              <Text style={styles.countText}>{tasks.filter(task => task.status === true).length}</Text>
            </View>

          </View>

        </View>

        <FlatList
          data={filteredTasks}
          keyExtractor={item => item.title}
          showsVerticalScrollIndicator={false}
          style={styles.listOfTasks}
          renderItem={({ item }) => (
            <Task
              key={item.title}
              title={item.title}
              status={item.status}
              color={item.color}
              onDeleteTask={() => handleDeleteTask(item.title)}
              onCompleteTask={() => handleCompleteTask(item.title)}
            />
          )}
          ListEmptyComponent={() => (
            <EmptyTask />
          )}
        />


      </View>



    </View>
  )
}