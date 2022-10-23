import React, { Component } from "react";

import Trainer from "../../models/Trainer";
import UserController from "../../controllers/UserController";
import WidgeteToolComponent from "./WidgeteToolComponent";
import ClinetsBoxesComponent from "./ClinetsBoxesComponent";

import { Button } from "react-bootstrap";

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
    var trainer = userController.getTrainer(1); // TO_DO pobieranie ID zalogowanego user z cache
    this.setState({ trainer: trainer });
  }

  render() {
    return (
      <div className="container-fluid container-custom dashboard-component">
        <div className="text-center">
          <h1>Witaj, {this.state.trainer.name}!</h1>
          <div className="widgete-tool-container">
            <WidgeteToolComponent trainerID={this.state.trainer.id}/>
          </div>
          <div className="clients-box-container">
            <ClinetsBoxesComponent trainerID={this.state.trainer.id}/>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardComponent;
