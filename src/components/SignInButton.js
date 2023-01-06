import { Pressable, StyleSheet, View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

function SignInButton({onPress, text, backgroundColor, icon, color}) {

  return (
    <View>
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}>
      <View style={[styles.button, {backgroundColor: backgroundColor}]}>
        <Ionicons name={icon} size={24} color='white' />
        <Text style={[styles.buttonText, {color: color}]}>{text}</Text>
      </View>
    </Pressable>
    </View>

  )
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    margin: 8,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    padding: 8,
  }, 
  pressed: {
    opacity: 0.7,
  },
});

export default SignInButton