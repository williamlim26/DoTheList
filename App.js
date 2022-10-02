import {
  StyleSheet,
  View,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native'
import { useState } from 'react'
import Header from './src/components/Header'
import RemoveButton from './src/components/RemoveButton'
import DismissKeyboard from './src/components/DismissKeyboard'
import ListItem from './src/components/ListItem'

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
              <ListItem
                key={index}
                value={text}
                isChecked={isChecked}
                index={index}
                onPress={handleClickCheckBox}
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
})

export default App
