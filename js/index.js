"use strict";
let hoTen = "ABC";
let luongCB = 5000;
let valid = true;
let result = undefined; // Không phần để khai báo thường dùng để nhận giá trị
let result1 = null; // Không phần để khai báo thường dùng để nhận giá trị
let btn = {
    id: "btn1",
    name: "button1",
    innerHTML: "messsage 1",
    background: "red",
};
let btnRadius = {
    id: "btn1",
    name: "button1",
    innerHTML: "messsage 1",
    background: "red",
    borderRadius: "white",
};
// type Product = {}
let product1 = { id: "1", name: "ABCproduct", price: 1000 };
let sinhVien = {
    maSinhVien: "1",
    tenSinhVien: "AB",
    diaChi: "diaChi1",
};
// type Array
let arrNumber = [1, 2, 3, 4, 5, 6];
let arrString = ["1", "2", "3", "4"];
let arrProduct = [
    { id: "2", name: "product2", price: 2000 },
    { id: "2", name: "product2", price: 2000 },
    { id: "2", name: "product2", price: 2000 },
];
// function
function tinhTong(a, b) {
    return a + b;
}
let showMessage = (mess) => {
    return "Hello " + mess;
};
let sayHello = () => {
    console.log("say hi");
};
// Callback
function main(callback) {
    callback("Hello its me");
}
// function renderH1(title: string): void {
//   document.querySelector(
//     "#content"
//   ).innerHTML = `<h1 class="bg-dark text-white p-5 display-4">
//   ${title}
//   </h1>`;
// }
function renderSection(title) {
    let contetnt = document.querySelector("#content");
    contetnt.innerHTML = `
    ${title}
  `;
}
main(renderSection);
