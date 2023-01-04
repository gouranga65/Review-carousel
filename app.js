const naam = document.querySelector(".name");
const kaam = document.querySelector(".position");
const sameeksha = document.querySelector(".review");
const photo = document.querySelector(".image");
let arr = [
  {
    name: "Kallirroi Samaras",
    position: "Auto Mechanic",
    review:
      "This Coca-Cola works outstandingly well. It beautifully improves my basketball by a lot.",
  },
  {
    name: "Theodosia Spiros",
    position: "Chemist",
    review: "My baboon loves to play with it.",
  },
  {
    name: "Angeliki Papadopoulos",
    position: "Real Estate Agent",
    review: "this Coca-Cola is standard.",
  },
  {
    name: "Vlassis Michelakos",
    position: "Dancer",
    review: "I tried to hang it but got jelly bean all over it.",
  },
  {
    name: "Aliki Michelakos",
    position: "Janitor",
    review:
      "one of my hobbies is sailing. and when i'm sailing this works great.",
  },
  {
    name: "Zinovia Megalos",
    position: "Registered Nurse",
    review: "I tried to cremate it but got Turkish Delight all over it.",
  },
];
// random button
const random = document
  .querySelector(".random")
  .addEventListener("click", function () {
    var result = Math.floor(Math.random() * arr.length);
    kaam.innerHTML = arr[result].position;
    naam.innerHTML = arr[result].name;
    sameeksha.innerHTML = arr[result].review;
    ranColor();
  });
let count = 0;
//   rightside button
const rightsideBtn = document
  .querySelector(".rightsideBtn")
  .addEventListener("click", function () {
    count++;
    if (count > arr.length) {
      count = 0;
    }
    defaultLoder(count);
    ranColor();
  });
// leftside button
const leftsideBtn = document
  .querySelector(".leftsideBtn")
  .addEventListener("click", function () {
    count--;
    if (count < 0) {
      count = arr.length - 1;
    }
    defaultLoder(count);
    ranColor();
  });
// when page is restart
window.addEventListener("DOMContentLoaded", function () {
  defaultLoder(count);
});
// restart function
function defaultLoder() {
  naam.textContent = arr[count].name;
  kaam.textContent = arr[count].position;
  sameeksha.textContent = arr[count].review;
  photo.style.background = "black";
}
// random color
function ranColor() {
  let hash = "#";
  let number = "0123456789ABCDEF";
  for (let index = 0; index < 6; index++) {
    hash = hash + number[Math.floor(Math.random() * 16)];
  }
  photo.style.background = hash;
}
