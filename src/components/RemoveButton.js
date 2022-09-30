import { Text, Pressable, StyleSheet } from 'react-native'
import { palette } from '../../theme/palette'

const RemoveButton = ({ list, setList }) => {
  const handleRemoveCheckedItems = () => {
    const copiedList = [...list].filter(({ isChecked }) => !isChecked)
    setList(copiedList)
  }
  return (
    <Pressable style={styles.button} onPress={handleRemoveCheckedItems}>
      <Text style={styles.text}>Remove</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.secondary.light,
    height: 40,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
})

export default RemoveButton
