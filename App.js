import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// const [state, setState] = useState([{ name: 'John', age: 30 }, { name: 'John', age: 30 }, { name: 'John', age: 30 }, { name: 'John', age: 30 }]);
export default function App() {
  return (

    <LinearGradient colors={['#FBCB00', '#BF9A00']} style={styles.backgroundColor}>
      <View style={styles.container}>
        <Text style={styles.heading}>LOGIN</Text>
        <View style={styles.inputBox}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png',
            }}
            style={styles.imageStyle}
          />
          <TextInput placeholder='Name' style={styles.textInput}></TextInput>
        </View>
        <View style={styles.inputBox}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png',
            }}
            style={styles.imageStyle}
          />
          <TextInput placeholder='Password' style={styles.textInput}></TextInput>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png',
            }}
            style={styles.imageStyle}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>SIGN UP</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Forgot your password?</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    gap: 25,
  },
  heading: {
    fontSize: 25,
    fontWeight: 700,
    position: 'absolute',
    top: 25,
    color: '#000'
  },
  backgroundColor: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 0
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    width: '100%',
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  button: {
    color: '#000',
    marginTop: 15,
    backgroundColor: '#000',
    borderRadius: 5,
    height: 40,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontWeight: '700'

  },
  textInput: {
    flex: 1
  }
});
