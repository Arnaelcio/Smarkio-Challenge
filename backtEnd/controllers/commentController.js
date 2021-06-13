const commentService = require("../services/commentService");
const status = require("../constants/statusCode");

const getAllComments = async (req, res) => {
  try {
    const comments = await commentService.getAll();
    res.status(status.OK).send(comments);
  } catch (err) {
    console.error(err);
    res
      .status(status.INTERNAL_SERVER_ERROR)
      .send({ message: "erro ao solicitar requisição" });
  }
};
const addComment = async (req, res) => {
    const { name, comment } = req.body;
    const newComment = await commentService.add(name, comment);
    if (newComment !== null) {
      return res.status(status.CREATED).send(newComment);
    } else {
        res
        .status(status.INTERNAL_SERVER_ERROR)
        .send({ message: "erro ao solicitar requisição" });
    }
  };

module.exports = {
  getAllComments,
  addComment
};
