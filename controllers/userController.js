const models = require("../models");

exports.post = (req, res, next) => {
  models.Users.create(req.body)
    .then((result) => {
      res.json({ success: true, status: "Created Successfully" });
    })
    .catch((err) => {
      res.json({ error: true, message: err });
    });
};

exports.get = (req, res, next) => {
  models.Users.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json({ error: true, message: err });
    });
};
