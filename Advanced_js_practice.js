// let a=10
// function outer()
// {
//     let b=20
//     function inner()
//     {
//         let c=30
//         console.log(a,b,c)
//     }
//     inner()
// }
// outer()

// function outer(){
//     let counter=0
//     function inner(){
//         counter++
//         console.log(counter)
//     }inner()
// }
// outer()
// outer()

// function outer(){
//     let counter=0
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//     return inner
// }
// const fn= outer()
// fn()
// fn()

// function sum(a,b,c){
//     return a+b+c
// }
// //console.log(sum(2,3,5))

//  //sum(2,3,5) sum(2)(3)(5)

//  function curry(fn){
//      return function(a){
//          return function(b){
//              return function(c){
//                  return fn(a,b,c)
//              }
//          }
//      }
//  }
//  const curriedsum=curry(sum)
//  //console.log(curriedsum(2)(3)(5))

//  const add2= curriedsum(2)
//  const add3= add2(3)
//  const add4= add3(5)
//  console.log(add4)

// function MyName(name){
//  console.log(`my name is ${name}`)
// }
// MyName('aith')

// const person={
//     name:'vishnu',
//     MyName: function (){
//       console.log ('my name is '+this.name)
//     },
// }
// person.MyName()


// function person(fname, lname)
// {
//     this.firstname= fname
//     this.lastname=lname
// }

// const person1= new person('bruce','wayne')
// const person2= new person('clark','kent')

// person1.getfullname= function(){
//     return this.firstname+' '+this.lastname
// }
// console.log(person1.getfullname())

//Prototypeee//

// function person(fname, lname)
// {
//     this.firstname= fname
//     this.lastname=lname
// }

// const person1= new person('bruce','wayne') //constructor function
// const person2= new person('clark','kent')  //constructor function

// person.prototype.getfullname= function(){
//     return this.firstname+' '+this.lastname
// }
// console.log(person1.getfullname())
// console.log(person2.getfullname())



//Prototypal Inheritance

// function person(fname, lname)
// {
//     this.firstname= fname
//     this.lastname=lname
// }

// const person1= new person('bruce','wayne') //constructor function
// const person2= new person('clark','kent')  //constructor function

// person.prototype.getfullname= function(){
//     return this.firstname+' '+this.lastname
// }

// function superhero(fname,lname){
//    // this={}
//    person.call(this,fname,lname)
//     this.issuperhero= true
// }
// superhero.prototype.fightcrime= function(){
//     console.log('fiht crime')
// }
// superhero.prototype=Object.create(person.prototype)
// const batman= new superhero('bruce','wayne')
// superhero.prototype.constructor= superhero
// console.log(batman.getfullname())

            //Class

            
// class Person{
//     constructor(fname,lname){
//         this.firstname= fname,
//         this.lastname=lname
//     }
//     MyName(){
//         return this.firstname+' '+this.lastname
//     }
// }
// const classP1=new Person('Megha','Bipin')
// console.log(classP1.MyName())

// class superhero extends Person {
//     constructor(fname,lname)
//     {
//         super(fname,lname)
//         this.issuperhero=true
//     }
//     fightcrime(){
//         console.log('fight crime')
//     }
// }

// const batman=new superhero('Bruce','Wayne')
// console.log(batman.MyName())

        //Iterables

const obj={
    [Symbol.iterator]: function(){
        let step=0
        const iterator={
            next: function(){
                step++
                if(step==1)
                {
                    return { value:'hello', done: false } 
                }else if(step==2)
                {
                    return { value:'world', done: false }
                }
                return {value:undefined, done: true }
        }
        }
        return iterator            
        },
    }
 
    // for(const word of obj)
    // {
    //     console.log(word)
    // }


            //Generator function
  
    function normalfunction(){
        console.log('hello')
        console.log('world')
    }
    // normalfunction()
    // normalfunction()

    function* generatorfunction(){
        yield 'hello'
        yield 'world'
    }
    const generatorobj= generatorfunction()
    for(const word of generatorobj){
        console.log(word)
    }