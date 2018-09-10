var express = require("express");
var router = express.Router();
const fshelper = require("../fs-helper.js");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "SWekster" });
});

/* GET corgies page */
router.get("/corgies", (req, res, next) => {
  res.render("corgies", { title: "Corgies Browser" });
});

/* GET cats page */
router.get("/cats", (req, res, next) => {
  res.render("cats", { title: "Cats Browser" });
});

/* Read the Images */
router.get("/corgies/:filename", async (req, res, next) => {
  const imageData = await fshelper.readImage(
    `./public/images/corgies/${req.params.filename}`
  );
  res.write(imageData);
  res.end();
});

router.get("/cats/:filename", async (req, res, next) => {
  const imageData = await fshelper.readImage(
    `./public/images/cats/${req.params.filename}`
  );
  res.write(imageData);
  res.end();
});

/* GET authors list. */
router.get("/authors-client", function(req, res, next) {
  res.render("authors-cl", {});
});

router.get("/authors-rest", function(req, res, next) {
  res.render("authors-rest", {});
});

module.exports = router;
