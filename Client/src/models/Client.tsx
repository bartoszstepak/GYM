export default class Client {
    private id: number;
    private trainerID: number;
    private name: string;
    private bodyParametersID: number;

  
    constructor(id: number, name: string, trainerID: number, bodyParametersID: number ) {
      this.id = id;
      this.name = name;
      this.trainerID = trainerID;
      this.bodyParametersID = bodyParametersID
    }
  
  }