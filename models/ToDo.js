import mongoose from "../connection/connect.js";
import modelenum from "../utils/enumModel.js";
import RolesModel from "./rolesModel.js";
class UserModel {
  constructor() {
    //var roles = new RolesModel();
    this.Schema = mongoose.Schema;
    this.UserSchema = new this.Schema({
        name:String,
        description:String,
        date: Date,
        hour: String,
        done: Boolean,
    });
    this.mymodel = mongoose.model("users", this.UserSchema);
  }
  /* 
  C. create
  */
  createUser(name, description, date, hour) {
        var user = {
            name,
            description,
            date,
            hour,
            done: [],
        };
        var newuser = new this.mymodel(user);
        return new Promise((resolve, reject) => {
            newuser.save().then((err,docs) => {
                console.log("Usuario registrado");
                resolve(docs);
            });
        });
    }
  /* 
  R. read
  */
  getUsers() {
    return new Promise((resolve, reject) => {
      this.mymodel.find(filter, (err, docs) => {
        if (err) {
          console.log(err);
          resolve(err);
          return;
        }
        resolve(docs);
      });
    });
  }
  /*
  U. update
   */
  updateModel(id, userUpdate) {
    return new Promise((resolve, reject) => {
      this.mymodel.update({ _id: id }, { $set: userUpdate }, (err, docs) => {
        if (err) {
          console.log(err);
          resolve(err);
          return;
        }
        resolve(docs);
      });
    });
  }
  /*
  D. delete
   */
  deleteUser(id) {
    return new Promise((resolve, reject) => {
      this.mymodel.remove({ _id: id }).then((err, docs) => {
        if (err) {
          console.log(err);
          resolve(err);
          return;
        }
        resolve(docs);
      });
    });
  }
  getModel() {
    return this.mymodel;
  }
  getSchema() {
    return this.UserSchema;
  }
  
  
  
}
export default ToDo;