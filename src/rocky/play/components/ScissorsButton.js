import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { deviceWidth, colors } from "../../../theme/theme";
import  FontAwesome  from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types';
export default class Scissors extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onPress}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <FontAwesome name={'hand-scissors-o'} size={50} color={colors.primary}/>
        </View>
      </TouchableOpacity>
    );
  }
}
Scissors.propTypes = {
  onPress: PropTypes.func.isRequired
}
Scissors.defaultProps = {
  onPress: () => {}
}
const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    width: deviceWidth / 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:25
  }
});
