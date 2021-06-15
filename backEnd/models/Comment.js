const defineCommentModel = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    name: DataTypes.STRING,
    comment: DataTypes.STRING,
  });
  return Comment;
};

module.exports = defineCommentModel;
