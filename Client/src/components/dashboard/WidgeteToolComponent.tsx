import React, { Component } from "react";

class WidgeteToolComponent extends Component<any, any> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        DUPA {this.props.trainerID} - Tutaj godzina i data aktualna - aktualny i next trening info, jak
        !aktualny to tylko next (aktualny z kim; next data time z kim)
      </div>
    );
  }
}

export default WidgeteToolComponent;
