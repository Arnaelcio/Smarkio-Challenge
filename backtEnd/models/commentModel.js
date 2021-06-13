const connection = require("../config/DBconnection");

const getAll = async () => {
  const [rows] = await connection().execute("SELECT * FROM smarkio_db.comments ORDER BY id DESC");
  return rows;
};

const add = async (name, comment) => {
    const [
      row,
    ] = await connection().execute(
      'INSERT INTO smarkio_db.comments (name, comment) VALUES (?, ?)',
      [name, comment]
    );
    const result = {
      id: row.insertId,
      name,
      comment,
    };
    return result;
  };

module.exports = {
  getAll,
  add,
};
