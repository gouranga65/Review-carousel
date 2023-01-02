const naam = document.querySelector(".name");
const kaam = document.querySelector(".position");
const sameeksha = document.querySelector(".review");
const leftsideBtn=document.querySelector(".leftsideBtn").addEventListener('click',function(){
    for (let index = 0; index < arr.length; index++) {
        if (index<index+1) {
            kaam.innerHTML=arr[index].position;
            index=index+1;
            break;
        }
        
    }
})
let arr = [
  {
    name: "gouranga",
    position: "one",
    review: "one",
  },
  {
    name: "gouranga",
    position: "two",
    review: "two",
  },
  {
    name: "gouranga",
    position: "three",
    review: "three",
  },
  {
    name: "gouranga",
    position: "four",
    review: "four",
  },
  {
    name: "gouranga",
    position: "five",
    review: "five",
  },
  {
    name: "gouranga",
    position: "six",
    review: "six",
  },
];
const random=document.querySelector(".random").addEventListener("click",function(){
    var result=Math.floor(Math.random()*arr.length)
    kaam.innerHTML=arr[result].position;
});