import { StyleSheet, Text } from "react-native"

const Button = ({ title, handlePress }) => (
  <Text onPress={handlePress} style={styles.main}>
    {title}
  </Text>
)

const styles = StyleSheet.create({
  main: {
    color: "white",
    backgroundColor: "#2196F3",
    padding: 11,
    fontWeight: "bold",
  },
})

export default Button
