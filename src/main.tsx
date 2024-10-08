// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



// Notion  N50
// const fn50 = function (arr: (number | boolean)[]): number[] {
//   return arr.filter(item => typeof item === 'number' && arr.indexOf(item) === arr.lastIndexOf(item));
// };

// // Test
// const res = fn50([4, 1, 2, 1, 2, 9, true]);
// console.log(res, 'fn 50');



// Notion N35

// interface NumObj {
//   [key: string]: number;
// }

// const fn35 = (obj: NumObj, n: number): NumObj => {
//   const result: NumObj = {};
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       result[key] = obj[key] * n;
//     }
//   }
//   return result;
// };

// const obj: NumObj = { a: 2, b: 3, c: 4 };
// const n = 3;

// const res = fn35(obj, n);
// console.log(res, '35ci');

// 36 masala 

// const fn36 = (str: string): number => {
//   const nums = str.match(/\d/g);
//   return nums ? nums.length : 0;
// };

// const str = "Salom 2024-yilda, 3 ta  7 loyihada ishlayman";
// const res = fn36(str);
// console.log(res, 'fn 36');


// 42 masala
// interface StringLengthMap {
//   [key: string]: number;
// }

// const fn42 = (words: string[]): StringLengthMap => {
//   const lengthMap: StringLengthMap = {};
//   words.forEach(word => {
//     lengthMap[word] = word.length;
//   });
//   return lengthMap;
// };

// const wordArray = ["text", "world", "laptop"];
// const lengthResult = fn42(wordArray);
// console.log(lengthResult, 'fn42');


// 37 masala

// const fn37 = (...nums: number[]): number[] => {
//   const sum = nums.reduce((acc, num) => acc + num, 0);
//   return String(sum).split('').map(Number);
// };

// const res2 = fn37(1, 22, 3);
// console.log(res2, 'res2');


// // 38 masala 

// const fn38 = (str: string): number => {
//   const arr = str.split(' ');
//   const res = arr.filter(item => item.toLowerCase().includes('a'));
//   return res.length;
// };

// const str = "Salom dunyo, qanday ishlar?";
// const res2 = fn38(str);
// console.log(res2, 'fn38');


// 39 masala

// const fn39 = (a: number): number | null => {
//   let b = 0;
//   while (a > 1) {
//     if (a % 2 !== 0) return null;
//     a /= 2;
//     b++;
//   }
//   return b;
// };

// const s = 8;
// const res = fn39(s);
// console.log(res, 'fn39');






// 41 masala

// interface Book {
//   title: string;
//   author: string;
//   read: boolean;
// }

// const books: Book[] = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     read: false,
//   },
//   {
//     title: "Dunyoning ishlari",
//     author: "O'tkir Hoshimov",
//     read: true,
//   },
//   {
//     title: "Iymon",
//     author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//     read: true,
//   },
// ];

// const checkReadStatus = (books: Book[]): void => {
//   books.forEach((book, index) => {
//     const status = book.read ? "o'qilgan" : "o'qilmagan";
//     console.log(
//       `${index + 1}. ${book.author} ning ${book.title} kitobi ${status}`
//     );
//   });
// };

// checkReadStatus(books);



// 44 masala

// interface IPowerArr {
//   [index: number]: number;
// }

// const fn44 = (n: number): IPowerArr => {
//   const powers: IPowerArr = [];

//   for (let i = 1; i <= n; i++) {
//     powers.push(2 ** i);
//   }

//   return powers;
// };

// const res1: IPowerArr = fn44(4);
// console.log(res1, 'fn44');

// const res2: IPowerArr = fn44(5);
// console.log(res2);

// 45 masala
// interface ICountObj {
//   [key: string]: number;
// }

// const fn45 = (words: string[]): ICountObj => {
//   const count: ICountObj = {};

//   for (const itam of words) {
//     if (count[itam]) {
//       count[itam] += 1;
//     } else {
//       count[itam] = 1;
//     }
//   }

//   return count;
// };

// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// const res = fn45(animals);
// console.log(res, 'fn 45');

// 46 masala

// const fn46 = (arr: number[]): number[] => {
//   return arr.map(num => num ** 2);
// };

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = fn46(arr1);
// console.log(arr2, 'fn46');




// // Notion N48

// const fn48 = (name: string): string => {
//   return name.split(' ').map(item => item.charAt(0).toUpperCase()).join('');
// };

// const str = 'George Raymond Richard Martin';
// console.log(fn48(str));


// // Notion N49

// interface IUser {
//   name: string;
//   age: number;
// }

// const fn49 = (array: IUser[]): number => {
//   if (array.length === 0) return 0;

//   const sortUser = array.sort((a, b) => a.age - b.age);
//   const yong = sortUser[0].age;
//   const old = sortUser[sortUser.length - 1].age;

//   return old - yong;
// };

// const peopleArray: IUser[] = [
//   { name: 'John', age: 13 },
//   { name: 'Mark', age: 56 },
//   { name: 'Rachel', age: 45 },
//   { name: 'Nate', age: 67 },
//   { name: 'Jeniffer', age: 65 }
// ];

// const result = fn49(peopleArray);
// console.log(result, 'fn49');

























