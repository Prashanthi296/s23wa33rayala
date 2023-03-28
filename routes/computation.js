var express = require("express");
var router = express.Router();
const url = require("url");
const querystring = require("querystring");
router.get("/", function (req, res, next) {
  console.log(req.url);
  link = url.parse(req.url);
  console.log(link.query);
  searchParam = new URLSearchParams(link.query);
  console.log(random);
  if (searchParam.get("x")) {
    res.send(`Math.cbrt() applied to ${searchParam.get("x")} is ${Math.cbrt(
      searchParam.get("x")
    )}
        <br> Math.atan2() applied to ${searchParam.get("x")} is ${Math.atan2(
      searchParam.get("x")
    )}
        <br> Math.atanh() applied to ${searchParam.get("x")} is ${Math.atanh(
      searchParam.get("x")
    )}
        `);
  } else {
    var random = Math.floor(Math.random() * 360);
    res.send(`Math.cbrt() applied to ${random} is ${Math.cbrt(random)}
    <br> Math.atan2() applied to ${random} is ${Math.atan2(random)}
    <br> Math.atanh() applied to ${random} is ${Math.atanh(random)}
    `);
  }
});

module.exports = router;
