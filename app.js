"use strict";

// const seriesDB = {
//   count: 0,
//   series: {},
//   actors: {},
//   geners: [],
//   private: false,
//   start: function () {
//     seriesDB.count = +prompt("Nechta serial ko'rdingiz");
//     if (
//       seriesDB.count == null ||
//       seriesDB.count == "" ||
//       isNaN(seriesDB.count)
//     ) {
//       seriesDB.count = +prompt("Nechta serial ko'rdingiz");
//     }
//   },
//   rememberMySerials: function () {
//     const arr = ["Oxirgi ko'rgan serilanigiz", "Nechi baho berasiz"];
//     for (let j = 0; j < 2; j++) {
//       for (let i = 0; i < arr.length; i++) {
//         const questions = prompt(`${arr[i]}`);
//         if (questions != null && questions != "") {
//           if (arr[i] == arr[i]) {
//             seriesDB.series[arr[i]] = questions;
//           }
//         } else {
//           console.log("error");
//           i--;
//         }
//       }
//     }
//   },
//   detectLevelSerial: function () {
//     if (seriesDB.count <= 5) {
//       console.log("Siz kam serial ko'ripsiz");
//     } else if (10 > seriesDB.count > 5) {
//       console.log("Siz classic tomoshabinsiz");
//     } else if (seriesDB.count >= 10) {
//       console.log("Siz professional serial ko'ruvchisiz");
//     } else {
//       console.log("error");
//     }
//   },
//   showDB: function () {
//     if (!seriesDB.private) {
//       console.log(seriesDB);
//     }
//   },
//   visibleDB: function () {
//     if (seriesDB.private) {
//       seriesDB.private = false;
//     } else {
//       seriesDB.private = true;
//     }
//   },
//   writeGenres: function () {
//     for (let i = 0; i < 3; i++) {
//       const responseGenres = prompt("Yaxshi ko'rgan janringiz", "");

//       if (responseGenres === "" || responseGenres === null) {
//         console.log("Siz noto'g'ri ma'lumot kiritingiz");
//         i--;
//       } else {
//           seriesDB.geners.push(responseGenres)
//       }
//     }
//   },
// };


// console.log(document.body.childNodes)

const arr = [
    1,2,3,4
]

function arrFil(att) {
    let result = att.slice(0,1) 
    // att.forEach((item, index) => {
    //     if (index == 0) {
    //         result = item
    //     }
    // })

    return result
}

console.log(arrFil(arr))