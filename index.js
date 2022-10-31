let p=document.getElementById("text")
let select=document.getElementById("slect")

if(window.localStorage.getItem("text")){
    p.innerHTML=window.localStorage.getItem("text")
    
    select.value=window.localStorage.getItem("text")
}

 select.onchange =function (){
    p.innerHTML=this.value
    p.style.color="#b75569 ;"
    window.localStorage.setItem("text",this.value)

    sum=0
    circle.innerHTML=0
    
    window.localStorage.setItem("counter",sum)
    

 }


 
let circle=document.getElementById("circ")
let reset=document.getElementById("reset")

let div=document.getElementById("cil")




let sum=0
circle.innerHTML= sum

if(window.localStorage.getItem("counter")){
    sum=window.localStorage.getItem("counter")
  circle.innerHTML=window.localStorage.getItem("counter")
}





   circle.onclick=function (){

    sum++
    window.localStorage.setItem("counter",sum)


    circle.innerHTML= sum

circle.style.border="none"
circle.style.outline="none"
   }



   reset.onclick=function(){
    circle.innerHTML= 0
    sum=0

    window.localStorage.removeItem("counter")

    reset.style.border="none"
    reset.style.outline="none"
   }

let ptext=document.getElementsByClassName("span")[0]
let black=document.getElementById("black")
let pe=document.getElementById("pe")
let text=document.getElementById("text")
let blue=document.getElementById("blue")
let green=document.getElementById("green")
let de=document.getElementsByClassName("de")[0]




if(localStorage.data!=null){
  document.body.classList.add(localStorage.getItem("data"))
}else{
  document.body.classList.add("black")

}


let allSmall=document.querySelectorAll(".de small")
let smallArr=[]
for(let i=0;i<allSmall.length;i++){

smallArr.push(allSmall[i].getAttribute("data-color"))


allSmall[i].addEventListener("click",function(){
  document.body.classList.remove(...smallArr)

document.body.classList.add(this.getAttribute("data-color"))
localStorage.setItem("data",this.getAttribute("data-color"))

})


}



