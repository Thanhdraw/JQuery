// 1.Cho menu cấp 1 thành màu đỏ
$("#main-menu>li>a").css("color", "gold");
// 2.Cho toàn bộ menu toàn bộ gold
$("#main-menu a").css("color", "red");
// 3.In vào giá của input đã có "label", nếu có "label"
$("form label+input").val("Đã có label");
// 4.Toàn bộ input phía sau label , có label có value "đứng sau label"
$("form label ~ input").val("dung sau label");
