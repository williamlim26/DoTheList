import {StyleSheet, Text, View, Pressable } from 'react-native'
import { palette } from '../../theme/palette'

const ListItem = ({ isChecked, value, index, onPress }) => (
  <Pressable style={{ marginTop: 10 }} onPress={() => onPress(index)}>
    <View style={styles.row}>
      <View style={styles.col1}>
        <View style={isChecked ? styles.checked : styles.unChecked} />
      </View>
      <View style={styles.col11}>
        <Text style={{ fontSize: 17, justifyContent: 'center', height: 22 }}>
          {value}
        </Text>
      </View>
    </View>
  </Pressable>
)

const styles = StyleSheet.create({
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
})

export default ListItem
