import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

type Props = {
  data: {
    name: string,
    color: string,
  }[]

  onSelect: (color: string) => void;
}

export function RadioButton({ data, onSelect }: Props) {
  const [userOption, setUserOption] = useState('');

  function selectColor(color: string) {
    onSelect(color)
    setUserOption(color)
  }

  return (
    <View style={styles.container}>
      {data.map((item) => {
        return (
          <Pressable
            key={item.color}
            style={[
              { backgroundColor: `#${item.color}` },
              item.color === userOption ? styles.selectedColor : styles.colorPicker,
            ]}
            onPress={() => selectColor(item.color)}
          >
            <Text >{item.name}</Text>
          </Pressable>
        )
      })}
    </View>
  )
}