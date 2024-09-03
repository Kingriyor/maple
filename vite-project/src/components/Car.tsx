import React from "react";

interface CarState {
  brand: string;
  model: string;
  color: string;
  year: number;
}

class Car extends React.Component<{}, CarState> {
  //   brand!: string;
  constructor(props: {}) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}.
        </p>
      </div>
    );
  }
}
export default Car;
