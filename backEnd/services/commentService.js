const commentModel = require("../models/commentModel");

const getAll = async () => {
  const comments = await commentModel.getAll();
  return comments;
};
const add = async (name, comment) => {
  const addedComment = await commentModel.add(name, comment);
  return addedComment;
};

module.exports = {
  getAll,
  add,
};
