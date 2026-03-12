//ES5 - Cách cũ
//var employee = {
//    name: null,
//    age: null,
//    setName: function (name) {
//        this.name = name;
//    },
//    getName: function () {
//        return this.name;
//    },
//    setAge: function (age) {
//        this.age = age;
//    },
//    getAge: function () {
//        return this.age;
//    }
//};
//employee.setName('Triển');
//employee.setAge(20);
//console.log(employee.getName());
//console.log(employee.getAge());

//ES6 - Cách mới
//class Employee {
//    setName(name) {
//        this.name = name;
//    }
//    getName() {
//        return this.name;
//    }
//    setAge(age) {
//        this.age = age;
//    }
//    getAge() {
//        return this.age;
//    }
//}
//let doi_tuong = new Employee();
//doi_tuong.setName('Triển');
//doi_tuong.setAge(20);
//console.log(doi_tuong.getName());
//console.log(doi_tuong.getAge());

//Bài tập 1: Tính tổng giá trị của một thuộc tính trong mảng đối tượng. Có 1 mảng các sản phẩm, mỗi sản phẩm là một đối tượng với thuộc tính số lượng. Viết hàm Arrow function để tính tổng số lượng.
const products = [
    { name: 'Bút bi', quantity: 123 },
    { name: 'Bút chì', quantity: 165 },
    { name: 'Bút màu', quantity: 170 },
];
const totalQuantity = (arr) => arr.reduce((sum, item) => sum + item.quantity, 0);
console.log('Tổng số lượng:', totalQuantity(products));

//Bài tập 2: Bài tập 2: Tìm sản phẩm có số lượng nhiều nhất từ dữ liệu bài tập 1.
const SanPhamNhieuNhat = (arr) => arr.reduce((max, item) => item.quantity > max.quantity ? item : max);
console.log('Sản phẩm có số lượng nhiều nhất:', SanPhamNhieuNhat(products));

//Bài tập 3: Ghép nhiều sản phẩm vào một mảng duy nhất.
//Mô tả: Viết một hàm nhận vào nhiều mảng sản phẩm và trả về mảng tất cả sản phẩm.
const productList1 = [
    {name: 'Cá hồi', price: 250},
];
const productList2 = [
    {name: 'Cá tầm', price: 350},
    {name: 'Cá lăng', price: 180},
];
const GhepMangSanPham = (...arrays) => arrays.flat();
console.log('Mảng tổng hợp:', GhepMangSanPham(productList1, productList2));