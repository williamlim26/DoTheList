import { StyleSheet, Text, View, TextInput, Pressable } from "react-native"
import { useState } from "react"
import Button from "./src/components/Button"

export default function App() {
  const [input, setInput] = useState("")
  const [list, setList] = useState([])

  console.log(list)

  const handleAddToList = () => {
    if (input !== '') {
      setList([...list, { isChecked: false, text: input }])
      setInput("")
    }
  }

  const handleClickCheckBox = (index) => {
    console.log(index)
    const copiedList = [...list]
    const { isChecked, text} = copiedList[index]
    setList([...list.slice(0, index), { isChecked: !isChecked, text}, ...list.slice(index+1)])
  }

  const handleRemoveCheckedItems = () => {
    const copiedList = [...list].filter(({ isChecked }) => !isChecked)
    setList(copiedList)
  }

  const Item = ({ isChecked, value, index }) => (
    <View style={{ marginTop: 10 }}>
      <View style={styles.row}>
        <View style={styles.col1}>
        <Pressable
          style={isChecked ? styles.checked : styles.unChecked}
          onPress={() => handleClickCheckBox(index)}
        />
        </View>
        <View style={styles.col11}>
          <Text style={{ fontSize: 17, justifyContent: 'center', height: 22 }}>{value}</Text>
        </View>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Will's Appa</Text>
      <View style={styles.row}>
        <View style={styles.col10}>
          <TextInput
            style={styles.input}
            onChangeText={setInput}
            value={input}
          />
        </View>
        <View style={styles.col2}>
          <Pressable
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#03DAC5',
              height: 40,
            }}
            onPress={handleAddToList}
          >
            <Text style={styles.text}>Add</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ borderTopWidth: 1, marginTop: 15, marginBottom: 5 }} />
      {list.map(({text, isChecked}, index) => (
        <Item key={index} value={text} isChecked={isChecked} index={index} />
      ))}
      <Pressable
        style={{
          marginTop: 15,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
          height: 40,
        }}
        onPress={handleRemoveCheckedItems}
      >
        <Text style={styles.text}>Remove</Text>
      </Pressable>
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
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderBottomWidth: 0.5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRight: "none",
    padding: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
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
  checked: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '1px',
    borderRadius: '50%',
    height: 25,
    width: 25,
    backgroundColor: 'green',
  },
  unChecked: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '1px',
    borderRadius: '50%',
    height: 25,
    width: 25,
  },
})
