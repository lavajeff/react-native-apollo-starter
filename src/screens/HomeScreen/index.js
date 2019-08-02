import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Hello world</Text>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
