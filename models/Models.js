const con = require("../config/database");

class Models {
  constructor() {}

  static create(tableName, data, callback) {
    const sql = `INSERT INTO ${tableName} SET ?`;
    con.query(sql, data, callback);
  }

  static findAll(tableName, callback) {
    const sql = `SELECT * FROM ${tableName}`;
    con.query(sql, callback);
  }

  static findById(tableName, id, callback) {
    const sql = `SELECT * FROM ${tableName} WHERE id = ?`;
    con.query(sql, id, callback);
  }

  static update(tableName, data, id, callback) {
    const sql = `UPDATE ${tableName} SET ? WHERE id = ?`;
    con.query(sql, [data, id], callback);
  }

  static delete(tableName, id, callback) {
    const sql = `DELETE FROM ${tableName} WHERE id = ?`;
    con.query(sql, id, callback);
  }
}

module.exports = Models;
