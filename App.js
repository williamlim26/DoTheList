import { StyleSheet, Text, View, TextInput } from "react-native"
import { useState } from "react"
import Button from "./src/components/Button"

export default function App() {
  const [input, setInput] = useState("")
  const [list, setList] = useState([])

  const handleAddToList = () => {
    setList([...list, input])
    setInput("")
  }

  const Item = ({ value }) => (
    <View style={{ marginTop: 10 }}>
      <View style={styles.row}>
        <View style={styles.col1}>
          <View style={styles.checkBox} />
        </View>
        <View style={styles.col11}>
          <Text>{value}</Text>
        </View>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Will's App</Text>
      <View style={styles.row}>
        <View style={styles.col10}>
          <TextInput
            style={styles.input}
            onChangeText={setInput}
            value={input}
          />
        </View>
        <View style={styles.col2}>
          <Button title="Add" handlePress={handleAddToList} />
        </View>
      </View>
      {list.map((text) => (
        <Item value={text} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 30,
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    marginTop: 10,
    borderWidth: 0.5,
    padding: 10,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-end",
  },
  col1: { flex: 1 },
  col2: { flex: 2 },
  col3: { flex: 3 },
  col4: { flex: 4 },
  col5: { flex: 5 },
  col6: { flex: 6 },
  col7: { flex: 7 },
  col8: { flex: 8 },
  col9: { flex: 9 },
  col10: { flex: 10 },
  col11: { flex: 11 },
  checkBox: {
    // backgroundColor: 'black',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '1px',
    borderRadius: "50%",
    height: 25,
    width: 25,
  },
})
