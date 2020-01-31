const con = require("../config/database");

module.exports = {
  /**
   * @param {Object} todo - Table Name
   * @return {Object}
   */
  create: (todo, callback) => {
    const sql = "INSERT INTO todos SET ?";
    con.query(sql, todo, callback);
  },

  /**
   * @param callback
   * @return {Array}
   */
  findAll: callback => {
    const sql = "SELECT * FROM todos";
    con.query(sql, callback);
  },

  /**
   * @param {Number} id - Id Todo
   * @param callback
   * @return {Array}
   */
  findById: (id, callback) => {
    const sql = "SELECT * FROM todos WHERE id = ?";
    con.query(sql, id, callback);
  },

  /**
   * @param {Object} todo - Table Name
   * @param {Number} id - Id Todo
   * @param callback
   */
  update: (todo, id, callback) => {
    const sql = "UPDATE todos SET ? WHERE id = ?";
    con.query(sql, [todo, id], callback);
  },

  delete: (id, callback) => {
    const sql = "DELETE FROM todos WHERE id = ?";
    con.query(sql, id, callback);
  }
};
