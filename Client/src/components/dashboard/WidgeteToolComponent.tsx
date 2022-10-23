import { Container, Paper, Typography } from "@mui/material";
import React, { Component } from "react";

class WidgeteToolComponent extends Component<any, any> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  componentWillUnmount() {}

  getCurrentDate(separator = "") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`;
  }

  getCurrentTime(separator = "") {
    // TO_DO odświerzanie czasu co minute
    var newDate = new Date();
    var hour = newDate.getHours();
    var minutes = newDate.getMinutes()

    return `${hour < 10 ? `0${hour}` : `${hour}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}`
  }

  render() {
    return (
      <div>
        <Container>
          <Typography variant="h6">
            {this.getCurrentDate("/")} {this.getCurrentTime(":")}
          </Typography>
        </Container>
        DUPA {this.props.trainerID} - Tutaj godzina i data aktualna - aktualny i
        next trening info, jak !aktualny to tylko next (aktualny z kim; next
        data time z kim)
      </div>
    );
  }
}

export default WidgeteToolComponent;
