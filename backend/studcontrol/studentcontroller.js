studentService = require("../studservice/studentservices");
router = require("express").Router();

router.post("/insertStudent", insertStudentData);

function insertStudentData(req, res) {
  console.log(req.body);
  var postData = req.body;
  studentService
    .studentInsertData(postData)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log("err", err);
    });
}

module.exports = router;
