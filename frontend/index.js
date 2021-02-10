$(document).ready(function () {
  $("#formAction").submit(function (e) {
    e.preventDefault();
    var subject = [];
    var name = $("#firstName").val();
    var course = $("#coursedrop").val();
    var gender = $("input[name=gender]:checked").val();
    var phone = $("#phone").val();
    $.each($("input[name='sub']:checked"), function () {
      subject.push($(this).val());
    });
    var data = {
      name: name,
      course: course,
      gender: gender,
      phone: phone,
      subject: subject,
    };
    console.log("data arrive", data);
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "http://localhost:5000/student/insertStudent",
      data: JSON.stringify(data),
      dataType: "json",
    });
  });
});
