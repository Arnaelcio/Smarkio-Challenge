const { Comment } = require('../models')

const getAll = async () => {

  const comments = await Comment.findAll();
  return comments.reverse();
};

const add = async (name, comment) => {
  const addedComment = await Comment.create({name, comment});
  return addedComment;
};

module.exports = {
  getAll,
  add,
};
