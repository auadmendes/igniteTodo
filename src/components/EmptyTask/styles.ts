import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#333333',

    marginTop: 20,
    padding: 30,
  },
  emptyTitle: {
    color: '#808080',
    fontWeight: '700',
    marginTop: 20,
  },
  emptyText: {
    color: '#808080',
    marginTop: 5,
  }
})