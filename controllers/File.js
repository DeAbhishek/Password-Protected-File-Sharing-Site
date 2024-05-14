const bcrypt = require("bcrypt");
const { File } = require("../models/File");

exports.uploadFile = async (req, res) => {
  const fileData = {
    originalFilename: req.file.originalname,
    path: req.file.path,
  };

  req.body.password != null && req.body.password !== ""
    ? (fileData.password = await bcrypt.hash(req.body.password, 10))
    : null;

  const file = await File.create(fileData);

  res.render("index", { fileLink: `${req.headers.origin}/file/${file.id}` });
};

exports.getFile = async (req, res) => {
  const file = await File.findById(req.params.id);

  file.password != null
    ? req.body.password == null
      ? res.render("password")
      : null
    : null;

  file.downloadCount++;
  file.save();
  res.download(file.path, file.originalFilename);
};
