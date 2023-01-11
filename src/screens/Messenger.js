import { StyleSheet, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, View, TextInput } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';
import Button from '../components/Button';

function Messenger() {
  return (
    <View style={globalStyles.container}>
      <View style={styles.container}>
        <View style={styles.messageContainer}>
        </View>
          <KeyboardAvoidingView 
            behavior="height"
            style={styles.inputContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.textInputContainer}>
                <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                />
                <Button text={'SEND'} color="white" onPress={()=>console.log('send')} backgroundColor={globalStyles.colors.primary100}/>
              </View>
            </TouchableWithoutFeedback> 
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  messageContainer: {
    flex: 3,
    width: '100%',
    marginHorizontal: 4,
    borderRadius: 24,
    backgroundColor: '#fff',
    overflow: 'scroll',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 40,
    justifyContent: 'center',
  },
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  textInput: {
    borderWidth: 2,
    borderColor: globalStyles.colors.primary100,
    borderRadius: 24,
    fontSize: 16,
    paddingHorizontal: 8,
    marginVertical: 10,
    width: '100%',
    height: 42,
  }
});

export default Messenger;