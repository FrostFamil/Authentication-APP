import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

class SignUpForm extends Component {

  state = { phone: ''};

  handleSubmit = async () => {

    try {
      await axios.post('https://us-central1-one-time-password-c8fd6.cloudfunctions.net/createUser', { phone: this.state.phone })
      await axios.post('https://us-central1-one-time-password-c8fd6.cloudfunctions.net/requestOneTimePassword', {phone: this.state.phone})
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

        <Button
          title="Submit"
          onPress ={this.handleSubmit}
        />
      </View>
    );
  }
}

export default SignUpForm;
