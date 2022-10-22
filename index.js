
// // task 1 


// // დაწერეთ ფუნქცია რომელიც შეამოწმებს გადაცემული ტექსტი არის თუ არა პალინდრომი . 
// // პალინდრომი არის სიტყვა რომელიც შებრუნებულ მდგომარეობაშიც იგივეა . მაგ. madam - მარცხნიდანაც და მარჯვნიდანაც ერთი და იგივეა(შებრუნებულიც და ჩვეულებრივადაც) .


// function palindrome(txt){
//   let reverseTxt = txt.split('').reverse().join('');
//   return reverseTxt === txt;
// }

// console.log(palindrome('hello'));
// console.log(palindrome('madam'));



// //Task 2

// /*
// დაწერეთ ფუნქცია რომელიც დაგვიბრუნებს პირველ არაგამეორებადი ქარაქტერი/სიმბოლოს. 
// მაგალითად გვაქვს string 'bcskbrk' -> c - პირველი არაგამეორებადი ქარაქტერი არის 'c'
// 'cbcbdde' -> 'e'
// 'worsdorw' -> 's' 
// 'worsdorws'-> 'd'
// */
// function firstNotOccured(txt){
//   for(let i=0; i<txt.length; i++){
//     if(txt.indexOf(txt[i]) === txt.lastIndexOf(txt[i])){
//       return txt[i];
//     }
//   }
// }

// console.log(firstNotOccured("cbcbdde"));

// function firstNotOccured(txt){
//   let tempArr = [];
//     for(let i=0; i<txt.length; i++){
//       if(tempArr.includes(txt[i])){
//         tempArr.slice---------------------
//     }else{
//     tempArr.push(txt[i]);
//     }
//   }
// }

// console.log(firstNotOccured('cbcbdde'));


// /*
// Task 3 : 
// დაწერეთ ფუნქცია რომელიც გადაცემულ ტექსტის camelCase ში კონვერტაციას გააკეთებს
// camelize("sad midis Matarebeli") -> "sadMidisMatarebeli"
// */

// function wordToUpper(word){
//   return word.charAt(0).toUpperCase() + word.substring(1);
// }


// function camelize(txt) {
//   let splittedTxt = txt.split(' ');
//   let camelizedTxt = splittedTxt[0];
//   for(let i=1; i<splittedTxt.length; i++){
//     camelizedTxt += " " + wordToUpper(splittedTxt[i]);
//   }
//   return camelizedTxt;
// }

// console.log(camelize('sad midis matarebeli'));




// /*
// Task 4: 
// დაწერეთ ფუნქცია რომელიც დაგვიბრუნებს რიცხვს სწორი სუფიქსით , როგორიცაა 1st, 2nd, 3rd or 4th და ა.შ

// მაგ . normilize(121) -> '121st' 
// normilize(124) -> '124th' 
// normilize(33) -> '33rd' 
// */

// function normilize (num){
//   if(num % 10 === 1){
//     return num + "st";
//   } else if (num % 10 === 2){
//     return num + "nd";
//   } else if (num % 10 === 3) {
//     return num + "rd";
//   } else if (num % 10 === 4) {
//     return num + "th";
//   }

  
// }

// console.log(normilize(121));
// console.log(normilize(124));
// console.log(normilize(33));



// /*
// Task 6 : 
// დაწერეთ ფუნქცია რომელიც იღებს ორ მასივს და უნდა დაგვიბრუნოს 
// ამ ორი მასივის დამერჯილი მასივი , გაერთიანებული , არადუბლირებული მნიშვნელობებით .
// let array1 = [1, 2, 3];
// let array2 = [2, 30, 1];

// შედეგი უნდა იყოს : [1,2,3,30]
// */
// let array1 = [1, 2, 3];
// let array2 = [2, 30, 1];
// let mergedArr = array1.concat(array2);
// let resultArr = [];
// for (let i=0; i<mergedArr.length; i++){
//     if(!resultArr.includes(mergedArr[i])){
//       resultArr.push(mergedArr[i]);      
//     }

// }

// console.log(resultArr);


// /*
// Task 7 : 
// ფუნქციამ უნდა დააბრუნოს მასივი ისე როგორც კომენტარშია ნაჩვენები . 
// გამოიყენეთ map
// */

// function readyToPutInTheDOM(arr) {
//   return arr.map((el)=>{
//     return `<h1>${el.name}</h1><h2>${el.age}</h2>`
//   })
// }
// console.log(
//   readyToPutInTheDOM([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );

// // ["<h1>Angelina Jolie</h1><h2>80</h2>",
// // "<h1>Eric Jones</h1><h2>2</h2>",
// // "<h1>Paris Hilton</h1><h2>5</h2>",
// // "<h1>Kayne West</h1><h2>16</h2>",
// // "<h1>Bob Ziroll</h1><h2>100</h2>"]
