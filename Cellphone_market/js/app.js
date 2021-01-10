
window.addEventListener("load",()=>{
  document.querySelector(".preloader").classList.add("hidePreloader")
})

const androids = document.querySelectorAll(".android");
const iphons = document.querySelectorAll(".iphone")
const all = document.querySelectorAll(".all")
const btnAll =document.getElementById("all")
const btnIpnone =document.getElementById("iphone")
const btnAbdroid = document.getElementById("android")

btnIpnone.addEventListener("click",()=>{
 for(let android of androids){
   android.classList.add("hidePhone");
   
 }
  for (let iphone of iphons) {
    iphone.classList.remove("hidePhone");
  }
  
});

btnAbdroid.addEventListener("click", () => {
  for (let iphone of iphons) {
    iphone.classList.add("hidePhone");


  }
   for (let android of androids) {
     android.classList.remove("hidePhone");
   }
  
});
btnAll.addEventListener("click",()=>{
  for(let i of all){
    i.classList.remove("hidePhone");
    
  }

})