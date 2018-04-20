import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { color } from '../../../widget'

export default class GroupButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.submit}>
          <Text style={styles.text}>投简历</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    position: 'absolute',
    bottom: 0,
  },
  submitBotton: {
    height: 40,
    width: DEVICE_WIDTH-40,
    padding: 20,
    borderRadius: 7,
    backgroundColor: color.primary,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});
