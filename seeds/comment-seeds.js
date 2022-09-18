const { Comment } = require("../models");

const commentData = [
  {
    id: 4,
    comment_text: "Kind of difficult!",
    user_id: 1,
    post_id: 8,
    createdAt: "2022-09-16T18:03:30.000Z",
    updatedAt: "2022-09-16T18:03:30.000Z",
  },
  {
    id: 5,
    comment_text: "Not sure",
    user_id: 3,
    post_id: 9,
    createdAt: "2022-09-16T18:06:03.000Z",
    updatedAt: "2022-09-16T18:06:03.000Z",
  },
  
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;