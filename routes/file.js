const { uploadFile, getFile } = require("../controllers/File");

const route = require("express").Router();
route.post("/upload", uploadFile).get("/:id", getFile);

module.exports = route;
