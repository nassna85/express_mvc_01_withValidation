class Controllers {
  constructor() {}

  static index(modelName, tableName, req, res) {
    modelName.findAll(tableName, (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  }

  static show(modelName, tableName, req, res) {
    modelName.findById(tableName, req.params.id, (error, result) => {
      if (error) throw error;
      res.json(result);
    });
  }

  static new(modelName, tableName, data, req, res) {
    modelName.create(tableName, data, (error, result) => {
      if (error) throw error;
      res.json(data);
    });
  }

  static edit(modelName, tableName, data, req, res) {
    modelName.update(tableName, data, req.params.id, (error, result) => {
      if (error) throw error;
      res.json(data);
    });
  }

  static remove(modelName, tableName, req, res) {
    modelName.delete(tableName, req.params.id, (error, result) => {
      if (error) throw error;
      res.json({ success: "Todo is deleted !" });
    });
  }
}

module.exports = Controllers;
