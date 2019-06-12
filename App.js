import React, {Component} from 'react';
import {Button, StyleSheet, View, ToastAndroid} from 'react-native';

export default class App extends Component {
  state = {
    size: 100000,
    showBtn: true,
  }

  start = () => {
    this.setState({
      showBtn: false
    });

    for (let i = 1; i <= 10; i++) {
      ToastAndroid.show('Loop: ' + i.toString(), ToastAndroid.SHORT);
      let array = [];
      array = Array.from({ length: this.state.size }, () =>
        1
      );
    }

    ToastAndroid.show('Finished', ToastAndroid.LONG);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.showBtn &&
          <Button title="Start" onPress={this.start} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
