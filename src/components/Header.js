import { Text, StyleSheet } from "react-native"

const Header = () => {
  return (
    <Text style={styles.title}>Do The List</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
})

export default Header