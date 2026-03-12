//var firstName ="Trien";
//function getName(){
//    var lastName ="Nguyen";
//    return lastName + " "+ firstName;
//}
//console.log(getName(firstName, "Nguyen"));

//vd1
//let a=10;
//function tich(){
//    let b=10;
//    return a*b;
//}
//console.log(tich(a,10));

//vd2
//let mark = 10;
//console.log(mark);
//mark = 5;
//console.log(mark);

//vd3
//for(var i = 0; i < 10; i++){
//    console.log(i);
//}
//console.log(i);

//vd4
//const week = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];
//console.log(week);
//let week = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];
//week = 9; //lỗi ko thể thay đổi giá trị của const
//console.log(week);

//let multiplyAndAddArow = (m, n) => {
//    let product = m * n;
//    let sum = m + n;
//    return product + sum;
//};
//let kq = multiplyAndAddArow(4, 5);
//console.log(kq);

//cách 1
//let person1 = (name, age) => {
//    return {"Họ và tên": name, "Tuổi": age};
//};
//console.log(person1("Triển", 20));
//cách 2
//let person2 = (name, age) => ({"Họ và tên": name, "Tuổi": age});
//console.log(person2("Nam", 50));

//ví dụ 1
//const Tenkhoahoc = 'Lập trình web nâng cao';
//const Mota ='K24TT ' + Tenkhoahoc;
//console.log(Mota);
//ví dụ 2
//const Tenkhoahoc1 = 'Thiết kế web';
//const Nienkhoa = '2024 - 2028';
//const Mota1 = `K24TT: \${Tenkhoahoc1} `;
//console.log(Mota1);

//ví dụ 1
//var array = ['Bóng đá', 'Bóng chuyền', 'Cầu lông'];
//var thethao1 = array[0];
//var thethao2 = array[1];
//var thethao3 = array[2];
//console.log(thethao1, thethao2, thethao3);

//ví dụ 2
//var array = ['Bóng đá', 'Bóng chuyền', 'Cầu lông'];
//var [mon1, mon2, mon3] = array;
//console.log(mon1, mon2, mon3);
//var [mon4, , mon6] = array;
//console.log(mon4, mon6);

//var array1 = ['Vịt', 'Gà', 'Ngỗng'];
//var [convat1] = array1;
//var [convat1, ...rest] = array1;
//console.log(convat1);
//console.log(rest);

//Bài 1: a) Vòng lặp for sử dụng let để in số từ 1 đến 5
//for (let i = 1; i <= 5; i++) {
//    console.log(i);
//}

//Bài 1: b) Khai báo const object chứa thông tin cá nhân
//const person = {
//    name: "Trien",
//    age: 19
//};
//console.log("Tuổi năm 2025:", person.age);
//person.age = 20;
//console.log("Tuổi năm 2026:", person.age);

//Bài 2: a) Viết một arrow function nhận một mảng số và trả về mảng mới với mỗi số nhân đôi.
//const mangGoc = [1, 2, 3, 4];
//const mangNhanDoi = mangGoc.map(n => n * 2);
//console.log("Mảng gốc:", mangGoc);
//console.log("Mảng nhân đôi:", mangNhanDoi);

//Bài 2: b) Tạo một object với một arrow function method để in tên của object đó.
//const myObject = {
//  name: "Đối tượng của tôi",
//  printName: () => console.log("Tên của object:", myObject.name)
//};
//myObject.printName();

//ví dụ 1
var mid = [3, 4];
var arr = [1, 2, mid, 5, 6];
console.log(arr);

//ví dụ 2
var mid = [3, 4];
var arr = [1, 2, ...mid, 5, 6];
console.log(arr);

//Mảng
const fruits = ['apple', 'banana'];
const moreFruits = ['orange', ...fruits];
console.log(moreFruits);

//Đối tượng
const user = {name: 'Triển', age: 20};
const newUser = {...user, city: 'Kon Tum'};
console.log(newUser);

//Math.max() cơ bản
Math.max(1, 2, 3);
Math.max(100, 3, 4);
console.log(Math.max(1, 2, 3))
console.log(Math.max(100, 3, 4));

//Áp dụng spread
var arr = [2, 4, 8, 6, 0];
var max = Math.max(...arr);
console.log(max);