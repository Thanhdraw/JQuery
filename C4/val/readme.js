$(document).ready(function () {
  $("input").css({
    display: "block",
  });
  // 1.lấy giá trị username và password và hiện lên alert
  $("#login").submit(function () {
    var name = $("#username").val();
    var password = $("#password").val();
    alert("Username: " + name + "\nPassword: " + password);
    // 2. trả lại kết quả vừa lấy đươc

    // cho 2 thẻ p: ẩn trong js
    const str_result_1 =
      "<p>Username:<strong id='val_username'>" + name + "</strong></p>";
    const str_result_2 =
      "<p>Password:<strong id='val_password'>" + password + "</strong></p>";
    $("#val_username").text(name).append;
    $("#val_password").text(password).append;
    $(".result").html(str_result_1 + str_result_2);
    return false;
  });
});
