import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native'
import { useState } from 'react'
import { palette } from './theme/palette'
import Header from './src/components/Header'
import RemoveButton from './src/components/RemoveButton'
import DismissKeyboard from './src/components/DismissKeyboard'

const App = () => {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  const handleClickCheckBox = (index) => {
    const copiedList = [...list]
    const { isChecked, text } = copiedList[index]
    setList([
      ...list.slice(0, index),
      { isChecked: !isChecked, text },
      ...list.slice(index + 1),
    ])
  }

  const handleSubmitEditing = ({
    nativeEvent: { text, eventCount, target },
  }) => {
    if (text !== '') {
      setList([...list, { isChecked: false, text }])
      setInput('')
    } else {
      Keyboard.dismiss()
    }
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
          <Text style={{ fontSize: 17, justifyContent: 'center', height: 22 }}>
            {value}
          </Text>
        </View>
      </View>
    </View>
  )

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <DismissKeyboard>
        <View style={styles.appContainer}>
          <View>
            <Header />
            <TextInput
              style={styles.input}
              blurOnSubmit={false}
              onChangeText={setInput}
              returnKeyType={input === '' ? 'done' : 'send'}
              value={input}
              onSubmitEditing={handleSubmitEditing}
            />
            <View
              style={{ borderTopWidth: 1, marginTop: 15, marginBottom: 5 }}
            />
            {list.map(({ text, isChecked }, index) => (
              <Item
                key={index}
                value={text}
                isChecked={isChecked}
                index={index}
              />
            ))}
          </View>
          {!!list.length && <RemoveButton list={list} setList={setList} />}
        </View>
      </DismissKeyboard>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#fff',
    marginTop: 30,
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '95%',
  },
  input: {
    height: 40,
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 5,
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
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
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
    backgroundColor: palette.primary.main,
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

export default App
