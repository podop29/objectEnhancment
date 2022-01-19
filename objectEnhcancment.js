// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

const createInstructor = (firstName, lastName) =>{
    return{
        firstName,
        lastName 
    };
};
//console.log(createInstructor("stevan","grubac"))

/* var favoriteNumber = 42;
var instructor = {
  firstName: "Colt"
}
instructor[favoriteNumber] = "That is my favorite!" */

var favoriteNumber = 42;
var instructor = {
    firstName: 'Colt',
}
instructor[favoriteNumber] = "That is my favorite!"


// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

var instructor2 = {
    firstName: 'colt',
    sayHi(){
        return 'HI'
    },
    sayBye(){
        return 'BYE'
    }
}
//console.log(instructor2.sayBye())

function createAnimal(species, verb, noise){
    return {
      species,
      [verb](){
        return noise;
      }
    }
  }

 // console.log(createAnimal('dog','meow','MEOWOWOW').meow())