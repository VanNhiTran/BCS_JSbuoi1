// Bai 1

// - input: - luong 1 ngay, so ngay lam viec
// - giai thuat: luong nhan vien = luong 1 ngay * so ngay lam
// - output: consolelog luong nhan vien

var luong1Ngay = 100000;
var soNgaylv = 18;

var luongNhanVien = luong1Ngay * soNgaylv;

console.log("Lương nhân viên là: ", luongNhanVien);

// Bai 2

// -input: 5 số thực (14, 25, 26, 37, 93)
// - giải thuật: trung bình các số thực = tổng 5 số thực / 5
// - output: consolelog trung bình 5 số thực

var soThuc1 = 14;
var soThuc2 = 25;
var soThuc3 = 26;
var soThuc4 = 37;
var soThuc5 = 93;
var trungBinhSoThuc = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
console.log("Trung bình các số thực là: ", trungBinhSoThuc);

// Bai 3

// - Input: $1 = 23500vnd
// số tiền $ có: 5000
// - giải thuật:  số tiền (vnd) có = số tiền $ có * 23500
// - output: consolelog số tiền vnd có

var soTien$co = 5000;
var soTienVndCo = soTien$co * 23500;
console.log("Số tiền VND có nè: ", soTienVndCo);

// Bài 4
//  - input: chiều rộng = 30 (cm)
//  chiều dài = 50 (cm)
//  - giải thuật:
//  chu vi = (chiều rộng + chiều dài) * 2
//  diện tích = chiều dài * chiều rộng
//  - output: consolelog diện tích, chu vi
var chieuRong = 30;
var chieuDai = 50;
var chuVi = (chieuRong + chieuDai) * 2;
var dienTich = chieuRong * chieuDai;
console.log("Chu vi là: ", chuVi);
console.log("Diện tích là: ", dienTich);

// Bài 5
// - Input: Số có 2 chữ số (56)
// - Giải thuật: Tổng 2 ký số = số hàng chục + số hàng đơn vị
// - Output: consolelog tổng 2 kí số.

var number = 56;
var soHangChuc = 56 / 10;
var soHangDonVi = 56 % 10;
var tong2kySo = soHangChuc + soHangDonVi;
console.log("Tổng 2 kí sô là: ", tong2kySo);
