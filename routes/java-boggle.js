var express = require('express');
const util = require('util');
var router = express.Router();

/* GET new boggle board/word list. */
router.get('/', async (req, res, next) => {
  var exec = util.promisify(require('child_process').exec);
  const { stdout, stderr } = await exec('/usr/bin/java -jar util/JavaBoggle.jar');
  console.log(stdout);
  res.send(stdout.split("\n")[0]);
});

module.exports = router;
