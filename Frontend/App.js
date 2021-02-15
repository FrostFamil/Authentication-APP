import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

class App extends Component{

  componentDidMount() {
    const config = {
      apiKey: "AIzaSyCQzqKCBJw3LDadIzUo_3gLCFhq5IaqjWE",
      authDomain: "one-time-password-c8fd6.firebaseapp.com",
      databaseURL: "https://one-time-password-c8fd6.firebaseio.com",
      projectId: "one-time-password-c8fd6",
      storageBucket: "",
      messagingSenderId: "875171125945",
      appId: "1:875171125945:web:aca3a8b72aa3600f2f5968"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default App;
