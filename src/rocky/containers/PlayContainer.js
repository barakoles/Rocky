import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "../../shared/components/Button";
export default class PlayContainer extends Component {
  constructor(props) {
    super(props);
    // Initialize states
    this.state = {
      userChoice: "",
      computerChoice: "",
      result: "",
      countdown: ""
    };
  }

  // componentDidMount() {
  //   this.JokenPo("rock");
  // }
  //** JokenPo function
  JokenPo(userChoice) {
    // Reinitialize state
    this.setState({
      result: ""
    });
    // Initialize variables
    let result = "";
    let computerChoice = "";

    // Generate a random number
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
      case 0:
        computerChoice = "rock";
        break;
      case 1:
        computerChoice = "paper";
        break;
      case 2:
        computerChoice = "scissors";
        break;
    }
    // Initialize Countdown
    this.setState({
      countdown: 3
    });

    startCountdown = () => {
      this.handleClock = setInterval(() => {
        decrementClock();
      }, 1000);
    };
 
    decrementClock = () => {
      if (this.state.countdown === 1) clearInterval(this.handleClock);
      this.setState(prevState => ({ countdown: prevState.countdown - 1 }));
      if (this.state.countdown === 0) this.setState({ countdown: "" });
    };

    // Start Countdown
    startCountdown();

    // Compare answers
    let compare = function(computerChoice, userChoice) {
      if (computerChoice === userChoice) {
        result = "draw";
      } else if (computerChoice === "scissors" && userChoice === "paper") {
        result = "computer won";
      } else if (computerChoice === "rock" && userChoice === "scissors") {
        result = "computer won";
      } else if (computerChoice === "paper" && userChoice === "rock") {
        result = "computer won";
      } else {
        result = "user won";
      }
    };
    // Call compare function
    compare(computerChoice, userChoice);

    // Set state of result
    this.countdown = setTimeout(() => {
      this.setState({
        userChoice,
        computerChoice,
        result
      });
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 100, width: 100, justifyContent: "center" }}>
          <Text>{this.state.result}</Text>
          <Text>{this.state.countdown}</Text>
        </View>
        <Button
          title={"Rock"}
          onPress={() => {
            this.JokenPo("rock");
          }}
        />
        <Button
          title={"Paper"}
          onPress={() => {
            this.JokenPo("paper");
          }}
        />
        <Button
          title={"Scissors"}
          onPress={() => {
            this.JokenPo("scissors");
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
