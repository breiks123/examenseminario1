import UserModel from "../models/ToDo.js";
var inittest = async () => {
  var usermodel = new ToDo();
  usermodel.createUser(
    "Ariel",
    "Test 1 probando",
    new Date(),
    "16:00",
  );
  usermodel.createUser(
    "Antonio",
    "Test 2 probando",
    new Date(),
    "17:00",
  );
  console.log(await usermodel.getUsers());
  //usermodel.deleteUser("60146018e49f7308a951795c");
  //await usermodel.updateModel("60146018e49f7308a951795d", { name: "Ramon" });
  console.log(await usermodel.getUsers());
};
inittest();
