import Trainer from "../models/Trainer";

class UserController { // TO_DO zrobić kontroler dla wszytkich typów usera

  getTrainer(id: number): Trainer {
    var trainer = new Trainer(1, "Marcin");
    
    return trainer;
  }

  getClients (trainerID: number) {
    var clients
  }

}

export default  UserController;
