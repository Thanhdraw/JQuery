//1.Chọn phần tử có chỉ số 1 =>
$("p:eq(0)").css("color", "red");
//2.Chọn phần p đầu tien => màu đỏ
$("p:first").css("color", "red");
//3.Chọn phần p cuối => màu đỏ
$("p:last").css("color", "red");
//4.Chọn phần tử có chỉ số lốn hơn 1
$("p:gt(1)").css("color", "green");
//5.chọn thằng thứ 2 trong thẻ div có class="box"
$("div.box p:eq(1)").css("color", "yellow");
//6.Chọn phần tử p có chỉ số bé hơn 3 => màu tím
$("p:lt(3)").css("color", "purple");
//7.Chọn phần tử chỉ số lẻ => background-color:#333
$("p:odd").css("background-color", "#333");
//8.Chọn phần tử chỉ số chẳn => background-color:#6868
$("p:even").css("background-color", "#6868");
//9.Chọn tất cả các phần tử ngoại trừ chỉ số: 2 =>màu đỏ
$("p:not(.p2)").css("color", "red");
