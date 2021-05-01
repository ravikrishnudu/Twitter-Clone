const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres:123@localhost:5432/twitter"
);
async function connection() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connection();

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

const Tweets = sequelize.define("Tweets", {
  text: {
    type: DataTypes.STRING,
  },
});

module.exports = { sequelize, User, Tweets };
