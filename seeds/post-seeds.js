const { Post } = require("../models");

const postData = [
  {
    id: 11,
    title: "How many hours per week do you spend coding?",
    post_text:
      "Are you getting burnt out? Take these steps to ensure you stay on your game. ",
    created_at: "2022-09-16T18:08:06.000Z",
    user: {
      username: "Melt",
    },
  },
  {
    id: 10,
    title: "Stick to the javaScript",
    post_text: "If you don't know it, you should probably learn.",
    created_at: "2022-09-16T18:05:48.000Z",
    user: {
      username: "John",
    },
  },
  {
    id: 9,
    title: "What kind of projects are you into?",
    post_text: "I think I like things that are a bit more creative.",
    created_at: "2022-09-16T18:03:20.000Z",
    user: {
      username: "Christian",
    },
  },
  {
    id: 8,
    title: "What is your favorite code editor?",
    post_text: "I have experimented with xcode and I am a fan.",
    created_at: "2022-09-16T18:01:18.000Z",
    user: {
      username: "Luis",
    },
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;