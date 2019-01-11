// ORIGINAL CODE WITH ERRORS
// {
//   const ModSquad = {
//       "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"]
//       "series": {
//           "start": "1968",
//           "end": "1973"
//       }
//   }

//   const HTMLRepresentation = `<h1>The Mod Squad</h1>`

//   ModSquad.members.forEach(member => {
//       const HTMLRepresentation += `<div>${member}</div>`
//   })
// }

// document.querySelector(".show-info").innerHTML = HTMLRepresentation;

// WORKING CODE

let HTMLRepresentation = `<h1>The Mod Squad</h1>`;
const ModSquad = {
  members: [
    "Pete Cochran",
    "Linc Hayes",
    "Julie Barnes",
    "Capt. Adam Greer",
    "Chief Barney Metcalf"
  ],
  series: {
    start: "1968",
    end: "1973"
  }
};

ModSquad.members.forEach(member => {
  HTMLRepresentation += `<div>${member}</div>`;
});

document.querySelector(".show-info").innerHTML = HTMLRepresentation;

// ORIGINAL CODE WITH ERRORS
// const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

// for (let k = 0; k < locations.length; k++) {
//     const currentLocation = locations[k]

//     if (currentLocation[0] > 2) {
//         const invalidLocation = true
//     }

//     if (invalidLocation) {
//         console.log("This location is invalid")
//     }
// }

// /*
//     Since k is used as the loop counter, it will be the
//     total number of locations, not the invalid ones. You
//     need to fix this somehow.
// */
// console.log(`There were ${k} invalid locations`)

//ERRORS CORRECTED
const locations = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3]];
let invalidLocation = false;

for (let k = 0; k < locations.length; k++) {
  let currentLocation = locations[k];

  if (currentLocation[0] > 2) {
    invalidLocation = true;
  }
  if (invalidLocation) {
    console.log("This location is invalid");
  } else {
    console.log("this is a valid location");
  }
}
/*r
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
// console.log(`There were ${k} invalid locations`);
