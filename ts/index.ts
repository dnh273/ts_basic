let hoTen: string = "ABC";
let luongCB: number = 5000;
let valid: boolean = true;
let result: undefined = undefined; // Không phần để khai báo thường dùng để nhận giá trị
let result1: null = null; // Không phần để khai báo thường dùng để nhận giá trị

// class SinhVien {
//   maSinhVien = "";
//   tenSinhVien = "";
// }

// let sv = new SinhVien();

// interface là gì? Interface là dùng để định dạng format kiểu dữ liệu của object.
// Interface thì khi khai báo nhiều interface trùng tên thì tsc sẽ gộp các interface trùng tên thành 1. Còn type thì không thể gộp
interface SinhVien {
  maSinhVien: string;
  tenSinhVien: string;
}

interface SinhVien {
  diaChi: string;
}
// Interface có thể kế thừa từ Interface khác
interface Button {
  id: string;
  name: string;
  innerHTML: string;
  background: string;
}

let btn: Button = {
  id: "btn1",
  name: "button1",
  innerHTML: "messsage 1",
  background: "red",
};

interface ButtonRadius extends Button {
  borderRadius: string;
}

let btnRadius: ButtonRadius = {
  id: "btn1",
  name: "button1",
  innerHTML: "messsage 1",
  background: "red",
  borderRadius: "white",
};

// type là định dạng format kiểu dữ liệu
type Product = {
  id: string;
  name: string;
  price: number;
};

// type Product = {}

let product1: Product = { id: "1", name: "ABCproduct", price: 1000 };

let sinhVien: SinhVien = {
  maSinhVien: "1",
  tenSinhVien: "AB",
  diaChi: "diaChi1",
};
