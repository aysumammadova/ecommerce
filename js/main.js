const dropdown = document.querySelector(".dropdown")
const pages = document.querySelector(".pages")
const login_register = document.querySelector(".login-register")

pages.addEventListener("mouseover",()=>{
    dropdown.classList.remove("hidden")
    login_register.classList.add("hidden")
})
pages.addEventListener("mouseout",()=>{
    dropdown.classList.add("hidden")
    login_register.classList.remove("hidden")
})


/// slide
const leftBtn = document.querySelector(".left")
const rightBtn = document.querySelector(".right")
const slides = document.querySelectorAll(".slick")

let length = slides.length-1
let first = 1


function left() {
    if (first === 0) {
        first = length

        if (first === length) {
            first -= 1
        }
    }
    else {
        first--
    }
    console.log(first)
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - first) * 100}%)`
    })

    rightBtn.addEventListener("click", () => {

    })
}
console.log(left())
leftBtn.addEventListener("click", left)

first = 0
function rightbutton() {

    if (first === length - 1) {
        first = 0
    }
    else {
        first++
    }
    console.log(first)
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - first) * 100}%)`
    })
}
rightBtn.addEventListener("click", rightbutton)





///loading
const header = document.querySelector(".header")
const products = document.querySelector(".products")
const clothes = document.querySelector(".trend-clothes")
const servicespad = document.querySelector(".services-spad")
const single = document.querySelector(".single")
const gallery = document.querySelector(".gallery")
const footer= document.querySelector(".footer")
const popular = document.querySelector(".popular-container")
const latestcoming  = document.querySelector(".latest-coming")
const loading = document.querySelector(".container-loading")


function animation(){
    setTimeout(() => {
    header.classList.remove("hidden")
    products.classList.remove("hidden")
    clothes.classList.remove("hidden")
    servicespad.classList.remove("hidden")
    single.classList.remove("hidden")
    gallery.classList.remove("hidden")
    footer.classList.remove("hidden")
    popular.classList.remove("hidden")
    latestcoming.classList.remove("hidden")
    loading.classList.add("hidden")
    }, 2000);
}

window.addEventListener('load', animation)

///view more

const product2 = document.querySelector(".pop-product-2")
const viewbtn = document.querySelector(".view")

viewbtn.addEventListener("click", () => {
    product2.classList.toggle("hidden2")
})


//popup
function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }
  function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  

 //settime slide 
const latest = document.querySelectorAll(".latest-products")
 let say=1
function rightBtnx (){
    if(say==latest.length-1){
        say=0
    }else{
        say++
    }

    latest.forEach((element,index)=>{
        element.style.transform=`translate(${(index-say)*100}%)`
    })
}
rightBtnx()

let interval=setInterval(() => {
    rightBtnx()
}, 4000);

//datascript
const all = document.querySelector(".all")
const women = document.querySelector(".women")
const men = document.querySelector(".men")

const allsproduct = document.querySelectorAll(".alls")
const girls = document.querySelectorAll(".girl")
const boys = document.querySelectorAll(".boy")
const kids = document.querySelectorAll(".children")

women.addEventListener("click",()=>{

    boys.forEach((element,index)=>{
    element.classList.add("hidden")
        console.log(element)
    })
    girls.forEach((element,index)=>{
        element.classList.remove("hidden")
    })
})

men.addEventListener("click",()=>{
    girls.forEach((element,index)=>{
        element.classList.add("hidden")
    })

    boys.forEach((element,index)=>{
        element.classList.remove("hidden")
            console.log(element)
        })
})

all.addEventListener("click",()=>{
    girls.forEach((element,index)=>{
        element.classList.remove("hidden")
    })
    boys.forEach((element,index)=>{
        element.classList.remove("hidden")
    })
})


//dark-light
const darklight= document.querySelector(".dark-light")
const theme = localStorage.getItem("theme");

if(theme==="dark") document.body.classList.add("dark")

darklight.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
    
    if (theme === "dark") {
        localStorage.setItem("theme", "light")
    } else {
        localStorage.setItem("theme", "dark")
    }
})

darklight.addEventListener("click", () => {
   
});

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
