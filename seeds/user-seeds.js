const { User } = require("../models");
const bcrypt = require("bcrypt");

const userData = [
  {
    id: 1,
    username: "Melt",
    email: "melt@email.com",
    password: "",
  },
  {
    id: 3,
    username: "John",
    email: "john@email.com",
    password: "",
  },
  {
    id: 4,
    username: "Christian",
    email: "christian@email.com",
    password: "",
  },
  {
    id: 5,
    username: "Luis",
    email: "luis@email.com",
    password: "",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;