
// for(let i = 0; i<document.querySelectorAll(".drum").length;i++){

//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     alert("I got clicked");
//     });




// }

// for (value of itterable)
for (let element of document.querySelectorAll(".drum")){
       element.addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML)
        
   
    });

}

// for keyboord
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    
    
    
})


 // alert("I got clicked");
    // let audio =new Audio("/sounds/tom-1.mp3");
    // audio.play()


    // factoring objects)))

// function HousKepper(name,age,permiton,education){
//     this.name=name;
//     this.age=age;
//     this.permiton=permiton;
//     this.education=education;
// }

// const hoesKeeper1= new HousKepper("Anna",23,true,false);
// const hoesKeeper2= new HousKepper("Bob",43,true,true);
// console.log(hoesKeeper1); 
// console.log(hoesKeeper2); 



// function for all events
function makeSound(key){
      switch (key) {
        case "w":
          let crash = new Audio("../sounds/crash.mp3");
          crash.play();
          break;
        case "a":
          let kick = new Audio("../sounds/kick-bass.mp3");
          kick.play();
          break;
        case "s":
          let snare = new Audio("../sounds/snare.mp3");
          snare.play();
          break;
        case "d":
          let tom1 = new Audio("../sounds/tom-1.mp3");
          tom1.play();
          break;
        case "j":
          let tom2 = new Audio("../sounds/tom-2.mp3");
          tom2.play();
          break;
        case "k":
          let tom3 = new Audio("../sounds/tom-3.mp3");
          tom3.play();
          break;
        case "l":
          let tom4 = new Audio("../sounds/tom-4.mp3");
          tom4.play();k
          break;
      }
}
function buttonAnimation(curent){
  let activ = document.querySelector("."+curent)
  activ.classList.add("pressed");
  setTimeout(function(){
    activ.classList.remove("pressed")

  },200);
}
