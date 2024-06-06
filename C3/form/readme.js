$(document).ready(function () {
  // 1.Đếm số input trên form chúng ta
  var num_input = $("form :input").length;
  // console.log(num_input);
  // 2.Cho inputtext  => chuyển background: red
  $("form :text").css("background-color", "#9999");
  // 3.Đếm số lượng selected đã được chọn, và in tên thằng vừa selected
  var select = $("form option:selected");
  select.each(function () {
    alert($(this).text());
  });
  // 4.Checkbox
  var checkbox = $("form input:checked");
  checkbox.each(function () {
    alert($(this).val());
  });
});
