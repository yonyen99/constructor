// class Person{
//     constructor(name,age,province){
//         this.mName = name;
//         this.mAge =age;
//         this.mProvince =province;
//     }
// }
// const person1 = new Person("romdul",24,"seim Reap");
// console.log(person1.mName);

class Computer {
    constructor(brand,price){
        this.mBrand = brand;
        this.mPrice = price;
    }
}
const c = new Computer("MSI",1000);
console.log(c.mBrand + " " + c.mPrice +"$");