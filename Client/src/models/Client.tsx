export default class Client {
    private id: number;
    private trainerID: number;
    private name: string;
    private bodyParametersID: number;
    private initials: string;

  
    constructor(id: number, name: string, trainerID: number, bodyParametersID: number, initials: string ) {
      this.id = id;
      this.name = name;
      this.trainerID = trainerID;
      this.bodyParametersID = bodyParametersID;
      this.initials = initials;
    }
  
  }