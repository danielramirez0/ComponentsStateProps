import React, { Component } from "react";
import "./IceCreamList.css";

class IceCreamList extends Component {
  state = {
    flavor: "",
  };

  handleSubmit(event) {
    event.preventDefault();
    let newFlavor = this.state.flavor;
    this.props.addNewFlavor(newFlavor);
    this.setState({
      flavor: "",
    });
  }

  handleChange(event) {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    let list = Array.from(this.props.iceCreamFlavors);
    return (
      <>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div>
            <div>
              <input type="text" name="flavor" onChange={(event) => this.handleChange(event)} value={this.state.flavor} placeholder="Add Ice Cream flavor" />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default IceCreamList;
