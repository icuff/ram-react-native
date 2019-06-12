import React, {Component} from 'react';
import {Button, StyleSheet, View, ToastAndroid} from 'react-native';
import moment from 'moment';

export default class App extends Component {
  state = {
    size: 1000000,
    repetitions: 100,
    showBtn: true,
  }

  start = () => {
    const timerBegin = moment().valueOf();
    this.setState({
      showBtn: false
    });
    var bar = new Promise((resolve, reject) => {
      for (let i = 1; i <= this.state.repetitions; i++) {
        let array = [];
        array = Array.from({ length: this.state.size }, () =>
          1
        );
        if (i == this.state.repetitions) {
          resolve();
        }
      }
    });

    bar.then(() => {
      const timerFinish = moment().valueOf();
      ToastAndroid.show('Finished in ' + (timerFinish - timerBegin) + 'ms', ToastAndroid.LONG);
    });
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
