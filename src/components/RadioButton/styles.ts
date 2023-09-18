import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 30,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    marginTop: 10,
  },
  colorPicker: { 
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    borderWidth: 0,
  },
  selectedColor: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    height: '100%',

    borderWidth: 0.9,
    borderColor: '#020202'
  }
})