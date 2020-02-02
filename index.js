const express = require("express");
const app = express();

const todoRouter = require("./routes/todo");
const userRouter = require("./routes/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/todos", todoRouter);
app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
