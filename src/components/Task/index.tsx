import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import Checkbox from 'expo-checkbox';
import { LocalSvg } from "react-native-svg";
import { useState } from "react";

type Props = {
  title: string;
  status: boolean;
  onDeleteTask: () => void;
  onCompleteTask: () => void;
}

export function Task({ title, status, onDeleteTask, onCompleteTask }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  function completeTaskStatus() {
    setIsChecked(!isChecked);
    onCompleteTask();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Checkbox
          style={styles.checkbox}
          value={status}
          onValueChange={completeTaskStatus}
          color={isChecked ? '#5E60CE' : undefined}
        />
      </TouchableOpacity>
      <Text style={[styles.taskText, isChecked && styles.strikeText]}>
        {title}
      </Text>
      <TouchableOpacity
        onPress={onDeleteTask}
      >
        <LocalSvg asset={require('../../../assets/trash.svg')} />
      </TouchableOpacity>
    </View>
  )
}