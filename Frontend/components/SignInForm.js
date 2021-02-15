import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

class SignInForm extends Component {

  state = { phone: '', code: ''};

  handleSubmit = async () => {

    try {
      let {data} = await axios.post('https://us-central1-one-time-password-c8fd6.cloudfunctions.net/verifyOneTimePassword', {
        phone: this.state.phone, code: this.state.code
      });

      firebase.auth().signInWithCustomToken(data.token);
    }catch(err) {
      console.log(err);
    }
  }

  render() {
    return(
      <View>
        <View  style={{ marginBottom: 10, width: 300 }}>
          <Input
            placeholder='Enter Your Phone Number'
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone: phone })}
          />
        </View>

        <View  style={{ marginBottom: 10, width: 300 }}>
          <Input
            placeholder='Enter Received Code'
            value={this.state.code}
            onChangeText={code => this.setState({ code: code })}
          />
        </View>

        <Button
          title="Login"
          onPress ={this.handleSubmit}
        />
      </View>
    );
  }
}

export default SignInForm;
