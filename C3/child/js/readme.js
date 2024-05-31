// 1.Chọn bài biết đầu tiên cho màu đỏ
$(".list-post li:first-child").css("color", "red");
// 2.Chọn bài biết cuoi cung cho màu đỏ
$("ul li:last").css("color", "red");
// 3. nth-child(index,odd,even,openration)
// Chọn tất cả có chỉ số 2
$("ul.list-post :nth-child(3n)").css("color", "red");
// 4. chọn phần là con duy nhất của phần tử cha
$(".list-post li:only-child").css("color", "red");
