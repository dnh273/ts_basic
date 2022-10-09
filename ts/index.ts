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

// type Array
let arrNumber: number[] = [1, 2, 3, 4, 5, 6];
let arrString: string[] = ["1", "2", "3", "4"];
let arrProduct: Product[] = [
  { id: "2", name: "product2", price: 2000 },
  { id: "2", name: "product2", price: 2000 },
  { id: "2", name: "product2", price: 2000 },
];

// function
function tinhTong(a: number, b: number): number {
  return a + b;
}

let showMessage = (mess: string): string => {
  return "Hello " + mess;
};

let sayHello = (): void => {
  console.log("say hi");
};

// Callback

function main(callback: (title: string) => void) {
  callback("Hello its me");
}

// function renderH1(title: string): void {
//   document.querySelector(
//     "#content"
//   ).innerHTML = `<h1 class="bg-dark text-white p-5 display-4">
//   ${title}
//   </h1>`;
// }

function renderSection(title: string): void {
  let contetnt = <HTMLElement>document.querySelector("#content");
  contetnt.innerHTML = `
    ${title}
  `;
}

main(renderSection);

// tuple mảng hỗn hợp [number,string, ()=>void]

let sv = {
  id: 1,
  name: "Nguyen Van A",
  showInfo: (): void => {
    console.log("showInfo");
  },
};

let result5: [number, string, () => void] = [
  1,
  "Nguyen Van B",
  () => {
    console.log("showInfo");
  },
];

let [state, setState]: [number, (newState: number) => number] = [
  1,
  (newState: number): number => {
    state = newState;
    return state;
  },
];

// type, union type: cho phép giá trị nhận được nhiều hơn 1 type

type IdUserName = string | number;

let userName:IdUserName = 1;
