import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    //backgroundColor: '#e2e2e2',
    borderRadius: 5,
    marginTop: 20,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkbox: {
    margin: 8,
    borderRadius: 50,
    padding: 12,
    borderWidth: 1,
    borderColor: '#4EA8DE',
    fontSize: 1,
  },
  taskText: {
    flex: 1,
    color: '#0D0D0D',
    flexWrap: 'wrap'
  },
  strikeText: {
    textDecorationLine:  'line-through',
    color: '#808080',
  }
})