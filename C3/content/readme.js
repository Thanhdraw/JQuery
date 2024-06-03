$(document).ready(function () {
    // 1.Tìm phần tử không có nội dung , cho border: 1px solid #333
    $("ol li:empty").css("border","1px solid #333").text("not content here");
    // 2.Tìm các phần tử có chứa nội dung "phần", cho màu đỏ
    $("ol li:contains('Phần')").css("color","red");
    // 3.Tìm tất cả các phần tử có phần tử con, hoặc có nội dung
    $("ol li:parent").css("color","red");
    // 4. Tìm phần tử con , có selector cho trước
    $("ul.sub:has('.color-red')").css("border", "1px solid red");
  });