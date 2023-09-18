import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  header: {
    height: '20%',
    width: '100%',
    backgroundColor: '#f2f2f2',

    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '100%',
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  inputTask: {
    height: 54,
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#e2e2e2',
    color: '#000',
    fontSize: 16,
    padding: 10,
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',

    marginTop: -32,
  },
  addButton: {
    backgroundColor: '#8284FA',
    justifyContent: 'center',
    alignItems: 'center',
    height: 52,
    width: 52,
    borderRadius: 5,
    marginLeft: 5,
  },
  tasks: {
    flexDirection: 'row',
    padding: 10,
    
  },
  tasksHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  createdTask: {
    flexDirection: 'row',
    marginTop: 32,
  },
  createdTaskText: {
    color: '#4EA8DE',
  },
  completedTaskText: {
    color: '#8284FA',
  },
  countText: {
    color: '#020202',
    marginLeft: 5,
  },
  line: {
    marginTop: 20,
    width: '100%',
    borderBottomColor: '#333333',
    borderBottomWidth: 1
  },
  taskList: {
    width: '100%',
    flex: 1,
  },
  listOfTasks: {
    marginBottom: 200,
  }
})