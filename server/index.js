require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const todosRoutes = require("./routes/todosRoutes");


const app = express();

app.use(cors());


app.use(express.json());

app.use((req, res, next) => {
  console.log("middleware is invoked");
  console.log(req.path, req.method);
  next();
});


app.use("/api/todos",todosRoutes);



  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: "TODO_24",
    })
    .then(() => app.listen(process.env.PORT,()=>{
      console.log(`DB connected to port`,process.env.PORT)
    }))
    .catch((e) => console.log(e));




    // former

// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => {
//     app.listen(process.env.PORT, ()=>{
//         console.log("DB successful & Port",process.env.PORT)
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

