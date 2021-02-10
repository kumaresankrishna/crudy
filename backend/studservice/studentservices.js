const { query } = require("express");

function studentInsertData(postData) {
  console.log("services", postData);
  return new Promise((resolve, reject) => {
    var query = "insert into student(name,course,gender,phone)values(?,?,?,?)";
    var data = [
      postData.name,
      postData.course,
      postData.gender,
      postData.phone,
    ];
    db.query(query, data, (err, result, field) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        for (let i = 0; i < postData.subject.length; i++) {
          var query =
            "insert into studentsubject(studentid,subjectid)values(?,?)";
          var data = [result.insertId, postData.subject[i]];
          db.query(query, data, (err, result, field) => {
            if (err) {
              console.log(err);
              reject(err);
            } else {
              resolve(result);
              console.log("data added", result);
            }
          });
        }
        console.log("data added", result);
      }
    });
  });
}

module.exports = {
  studentInsertData,
};
