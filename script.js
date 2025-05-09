let hamburger = document.querySelector("#hamburger");
let cancel = document.querySelector(".cancel");
let dropdown = document.querySelector(".dropdown");

// hamburger.style.display = "block"; 
cancel.style.display = "none";    
dropdown.style.display = "none";   

hamburger.addEventListener("click", () => {
  dropdown.style.display = "block";
  hamburger.style.display = "none";
  cancel.style.display = "block";
});

cancel.addEventListener("click", () => {
  dropdown.style.display = "none";
  hamburger.style.display = "block";
  cancel.style.display = "none";
});


const texts = [
  "DEVELOPPER WEB",
  "DEVELOPPER MOBILE",

]
let speed = 100;
const textElement = document.querySelector(".typewritter-text");
let textIndex = 0;
let characterIndex = 0;

function typewritter(){
  if(characterIndex < texts[textIndex].length){
    textElement.innerHTML += texts[textIndex].charAt(characterIndex);
    characterIndex++;
    setTimeout(typewritter , speed)

  }else{
    setTimeout(eraseText , 1000)
  }
}

function eraseText(){
  if(textElement.innerHTML.length > 0){
    textElement.innerHTML = textElement.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50)
  }else{
    textIndex = (textIndex + 1) % texts.length;
    characterIndex = 0;
    setTimeout(typewritter , speed)
  }
}
window.onload = typewritter;