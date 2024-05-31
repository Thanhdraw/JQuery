// 1. Tô màu đỏ cho trang chủ
$("a[href='home.html']").css("color", "red");
//  2.Khong phai la trang chu
$("a[href!='home.html']").css("color", "#3333");
//  3.Lấy tất ca menu product
$("a[href*='product']").css("color", "#f3f3f3");
//  4.Lấy tất cả những product nó có chứa product , theo sao là dấu "-"
$("a[href|='product']").css("color", "gold");
//  5. Tìm tất cả những menu bắt đầu bằng product, cho nó màu f5f5f5
$("a[href^='product']").css("color", "#4444");
// //  6. Lấy tất cả menu có link kết thúc, bằng clothes.html
$("a[href$='t.html']").css("color", "#8888");
//  7.Lấy tất cả menu, có title 2 từ Trang và xung quanh co dau cach va cho nó màu green
$("a[title~='trang']").css("color", "#6666");
//  8.Lấy tất cả menu có href là màu đỏ
$("a[href]").css("color", "red");
//  9. Lấy menu product có 2 từ trở lên và cho nó màu grey
$("a[href*='product'][title*=' ']").css("color", "#3333");
