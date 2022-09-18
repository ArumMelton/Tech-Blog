const { Post } = require("../models");

const postData = [
  {
    id: 11,
    title: "How many hours per week do you spend coding?",
    post_text:
      "Are you getting burnt out? Take these steps to ensure you stay on your game. ",
    created_at: "2022-09-16T18:08:06.000Z",
    user: {
      username: "",
    },
  },
  {
    id: 9,
    title: "What kind of projects are you into?",
    post_text: "I think I like things that are a bit more creative.",
    created_at: "2022-09-16T18:03:20.000Z",
    user: {
      username: "",
    },
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;