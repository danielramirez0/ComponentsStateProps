import React, { Component } from "react";

class SuperHeroCreateForm extends Component {
  state = {
    id: "",
    name: "",
    primaryAbility: "",
    secondaryAbility: "",
  };

  handleSubmit(event) {
    event.preventDefault();
    let record = {
      id: this.state.id,
      name: this.state.name,
      primaryAbility: this.state.primaryAbility,
      secondaryAbility: this.state.secondaryAbility,
    };

    this.props.addHero(record);
    this.setState({
      id: "",
      name: "",
      primaryAbility: "",
      secondaryAbility: "",
    });
  }

  handleChange(event) {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <>
        <h3>Add New Hero</h3>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div>
            <input type="text" name="id" onChange={(event) => this.handleChange(event)} value={this.state.id} placeholder="ID" />
          </div>
          <div>
            <input type="text" name="name" onChange={(event) => this.handleChange(event)} value={this.state.name} placeholder="Name" />
          </div>
          <div>
            <input type="text" name="primaryAbility" onChange={(event) => this.handleChange(event)} value={this.state.primaryAbility} placeholder="Primary Ability" />
          </div>
          <div>
            <input type="text" name="secondaryAbility" onChange={(event) => this.handleChange(event)} value={this.state.secondaryAbility} placeholder="Secondary Ability" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </>
    );
  }
}

export default SuperHeroCreateForm;
