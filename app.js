// let obj = new Object ();
// obj.name = 'John';
// obj.age = 35;
// console.log(obj);

// obj.dayBirth = '10.05.1988'
// console.log(obj.dayBirth);


// function Car(model,year,speed) {
//     this.model = model;
//     this.year = year;
//     this.speed = speed;
//     this.getSpeedUp = getSpeedUp;
// }

// let myCar = new Car('superb',2019,240);



// function getSpeedUp(myCar) {
//         this.speed = this.speed + 10
//     }

    
// myCar.speedUp = getSpeedUp;

// myCar.speedUp(myCar);
// console.log(myCar.speed);


// let customer = {
//     name : 'Karl',
//     adress: 'Sydney',
//     order : {
//         good_art : 'microwave',
//         quantity : 10
//     }

// }


// function createObj() {
//     let user = {}
//     user.name = 'Ivan';
//     user.surname = 'Smith';
//     user.name = 'Petro'
//     delete user.name
//     return user
// }

// createObj();
// ncosole.log(createObj());


// function isEmpty (obj) {
//     let emptyObj = !Object.keys(obj).length;
//     return emptyObj
// }

// isEmpty({
//     John : 100,
//     Ann : 160,
//     Pete : 130,
// });
// console.log(isEmpty({
//     John : 100,
//     Ann : 160,
//     Pete : 130,
// }));


// function sum(obj) {
//      let result = 0;
//      for (key in obj) {
//         result += obj[key];
//      }
//      return result
// }

// sum({
//     John : 100,
//     Ann : 160,
//     Pete : 130,
// });

// console.log(sum({
//     John : 100,
//     Ann : 160,
//     Pete : 130,
// }));



// function multiplyNum (obj) {
//      Object.keys(obj).map(i => obj[i] *= 2)
     
//      return obj
// }

// multiplyNum({
//     John : 100,
//     Ann : 160,
//     Pete : 130,
// });

// console.log(multiplyNum({
//     John : 100,
//     Ann : 160,
//     Pete : 130,
// }));


// let calculator = {
//     sum: function() {
//       return this.a + this.b;
//     },
  
//     mul: function() {
//       return this.a * this.b;
//     },
  
//     readValues: function() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     }
//   }
  
//   calculator.readValues();
//   alert(calculator.sum());
//   alert(calculator.mul());


// let ladder = {
//     step: 0,
//      up() {
//         this.step++;
//         return this
//     },
//      down() {
//         this.step--;
//         return this
//     },
//     showStep: function () {
//         alert(this.step);
//         return this
//     }
// };

// ladder.up().up().down().showStep().down().showStep()


// function addFullName (user) {
//     user.fullName = user.name + ' ' + user.surname
//     return user
// }

// addFullName ({
//     name: 'Ivan',
//     surname:'Vasylchenko'
// });

// console.log(addFullName ({
//     name: 'Ivan',
//     surname:'Vasylchenko'
// }));


