/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/

// Variables / Array

const main = document.querySelector("main");
let html = "";

const pets = [
  {
    name: "Roscoe",
    type: "Dog",
    breed: "Chihuahua",
    age: "12",
    photo: "img/1.jpeg",
  },

  {
    name: "Jimmy",
    type: "Dog",
    breed: "Weimaraner",
    age: "2",
    photo: "img/2.jpeg",
  },

  {
    name: "Patch",
    type: "Dog",
    breed: "Australian Shepherd",
    age: "6",
    photo: "img/3.jpeg",
  },

  {
    name: "Sadie",
    type: "Dog",
    breed: "French Bulldog",
    age: "3",
    photo: "img/4.jpeg",
  },

  {
    name: "Jack",
    type: "Dog",
    breed: "Labrador Retriever",
    age: "9",
    photo: "img/5.jpeg",
  },
];

// Function

/**
 * @param  {string} pet - a parameter that stands in for the pets array.
 * @return  {string} returns a lopped through template of the object data structure "pets"
 */

function postDogsToDirectory(pet) {
  for (let i = 0; i < pet.length; i++) {
    html += `
    <h2>${pet[i].name}</h2>
    <h3>${pet[i].type} | ${pet[i].breed}</h3>
    <p>Age: ${pet[i].age}</p>
    <img src="${pet[i].photo}">
    `;
    console.log(html);
  }
  return html;
}

// Result returned to the document

main.insertAdjacentHTML("beforeend", postDogsToDirectory(pets));
