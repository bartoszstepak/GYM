import React, { Component } from "react";

import Trainer from "../../models/TrainerModel";
import UserController from "../../controllers/UserController";

import "./DashboardComponent.css";

class DashboardComponent extends Component<any, any> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      trainer: Trainer,
    };
  }

  componentDidMount() {
    this.initializeDashboardData();
  }

  componentWillUnmount() {}

  initializeDashboardData() {
    const userController = new UserController();
    var trainer = userController.getTrainer(1);
    this.setState({ trainer: trainer });
  }

  render() {
    return <div>Witaj, {this.state.trainer.name}!</div>;
  }
}

export default DashboardComponent;
