import { Text, View } from "react-native";
import { LocalSvg } from "react-native-svg";
import { styles } from "./styles";


export function EmptyTask() {
  return (
    <View style={styles.container}>
      <LocalSvg asset={require('../../../assets/Clipboard.svg')} />
      <Text style={styles.emptyTitle}>You do not have any tasks yet!</Text>
      <Text style={styles.emptyText}>Create tasks and organize your TODO list</Text>
    </View>
  )
}