const anim = document.querySelector(".container-loading")
const head = document.querySelector(".header")
const map =document.querySelector(".map-1")
const foot = document.querySelector(".footer")

function animation(){
    setTimeout(() => {
    head.classList.remove("hidden")
    map.classList.remove("hidden")
    foot.classList.remove("hidden")
    anim.classList.add("hidden")
    }, 2000);
}
window.addEventListener('load', animation)

//submit
const form = document.querySelector(".form")

const name = document.querySelector("#name")
const mail = document.querySelector("#mail")
const link = document.querySelector("#link")
const text = document.querySelector("#text")
//error alerts
const nameerr=document.querySelector(".name-error")
const mailerr=document.querySelector(".mail-error")
const linkerr=document.querySelector(".text-error")
const msgerr=document.querySelector(".message-error")
//regex
var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
var regEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
var urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
var textregex = /^(?:\s*\S+){1,150}$/;



form.addEventListener("submit",(event)=>{
 event.preventDefault();
//  console.log("isworkk")

if(regName.test(form.name.value)){
    console.log("That is true")
    nameerr.classList.add("hidden")
}
else{
    nameerr.classList.remove("hidden")
}

if(regEmail.test(form.email.value)){
    console.log("That is true function")
    mailerr.classList.add("hidden")
}
else{
    mailerr.classList.remove("hidden")
}
if(urlPattern.test(form.link.value)){
    console.log("true")
    linkerr.classList.add("hidden")
}else{
    linkerr.classList.remove("hidden")
}
if(textregex.test(form.text.value)){
    console.log("working")
    msgerr.classList.add("hidden")
}else{
    console.log("doesnt")
    msgerr.classList.remove("hidden")
}

})


const footermessage = document.querySelector("#footer-message")
const footmsg = document.querySelector("#footmsg")
const dontsend = document.querySelector(".dontsend-message")
const sendmessage = document.querySelector(".send-message")

const footregx  =  /^[a-zA-Z0-9]{2,12}$/;

footermessage.addEventListener("submit",(event)=>{
    event.preventDefault();

    if(footregx.test(footermessage.text.value)){
        console.log("is working")
        
        sendmessage.classList.remove("hidden")
        // dontsend.classList.add("hidden")
        setTimeout(() => {
            sendmessage.classList.add("hidden")
        //     dontsend.classList.add("hidden")
        }, 2000);
    }else{
        console.log("sehv")
        // sendmessage.classList.add("hidden")
        dontsend.classList.remove("hidden")
        setTimeout(() => {
            dontsend.classList.add("hidden")
        }, 2000);
    }
})
