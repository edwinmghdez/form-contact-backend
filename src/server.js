const express = require("express");
const cors = require("cors");
const path = require("path");
const userRoutes = require("./routes/UserRoutes");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const errorHandler = require("./middlewares/errorHandler");
const userTable = require("./config/UserTable");
require("dotenv").config();
const app = express();
const port = process.env.APP_PORT || 3000;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      version: "1.0",
      title: process.env.APP_NAME + " API",
      description: "API for " + process.env.APP_NAME,
    },
  },
  apis: [path.join(__dirname, "./routes/*.js")],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use(cors());

app.use(express.json());

userTable();

app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use("/api/v1/users", userRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
