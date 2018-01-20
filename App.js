import React from 'react';
import { StyleSheet, Text, View, Slider, Image } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { heartRate: 70, o2: 98, img:"./img/alive.jpg" }
   } 
  getVal(val) {
    if (this.state.heartRate < 30 || this.state.o2 < 50) {
      this.state.img = "./img/dead.jpg";
    } else {
      this.state.img = "./img/alive.jpg";
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>This is also here</Text> */}
        <View style={{flexDirection: 'row'}}>
          <Text> Heart Rate </Text>
          <Slider
            style={{ width: 200 }}
            step={1}
            minimumValue={20}
            maximumValue={150}
            value={this.state.heartRate}
            onValueChange={val => this.setState({ heartRate: val })}
            onSlidingComplete={ val => this.getVal(val)}
          />
          <Text>{this.state.heartRate} BPM </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text> O2 sat </Text>
          <Slider
            style={{ width: 200 }}
            step={1}
            minimumValue={1}
            maximumValue={100}
            value={this.state.o2}
            onValueChange={val => this.setState({ o2: val })}
            onSlidingComplete={ val => this.getVal(val)}
          />
          <Text>{this.state.o2}% o2 sat </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
