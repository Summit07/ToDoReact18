const ToDoModel = require("../models/ToDoModel");

const getToDos = async (req, res) => {
  const toDos = await ToDoModel.find();
  res.send(toDos);
};

const saveToDo = (req, res) => {
  const { toDo } = req.body;
  console.log(toDo);

  ToDoModel.create({ toDo })
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

const updateToDo = (req, res) => {
  const { id } = req.params; //  localhost:5000/:"klsdfnsadfhds"
  const { ids } = req.query; //   localhost:5000/?ids="hasdfhdfha"
  const { toDo } = req.body;

  ToDoModel.findByIdAndUpdate(id, { toDo })
    .then(() => {
      res.send("Updated Successfully....");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

const deleteToDo = (req, res) => {
  const { id } = req.params;

  ToDoModel.findByIdAndDelete(id)
    .then(() => {
      res.send("Deleted Successfully....");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports = {
  getToDos,
  saveToDo,
  updateToDo,
  deleteToDo,
};
