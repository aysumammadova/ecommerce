

///loading
const header = document.querySelector(".header")
const footer= document.querySelector(".footer")
const loading = document.querySelector(".container-loading")


function animation(){
    setTimeout(() => {
    header.classList.remove("hidden")
    footer.classList.remove("hidden")
    loading.classList.add("hidden")
    }, 2000);
}

window.addEventListener('load', animation)
//dark light
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

//video
const video =document.querySelector("video")
const toggleBtn = document.querySelector(".toggleButton");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const sliders = document.querySelectorAll(".controls__slider");
const skipBtns = document.querySelectorAll("[data-skip]");

function togglePlay() {
    if (video.paused || video.ended) {
      video.play();
      toggleBtn.innerHTML = "❚ ❚";
    } else {
      video.pause();
      toggleBtn.innerHTML = "►";
    }
  }

  toggleBtn.addEventListener("click", togglePlay);
  function handleProgress() {
    const { currentTime, duration } = video;
    let progressPercantage = (currentTime / duration) * 100;
    progressBar.style.flexBasis = `${progressPercantage}%`;
  }
  
  video.addEventListener("timeupdate", handleProgress);
  
  //TODO:: keydown, keyup
  //TODO:: mousemove, mousedown, mouseup
  
  document.addEventListener("keydown", (event) => {
    event.code === "Space" && togglePlay();
  });
  
  skipBtns.forEach((btn) => {
    btn.addEventListener("click", handleSkip);
  });
  
  function handleSkip() {
    video.currentTime += Number(this.dataset.skip);
  }
  
  let isMousedown = false;
  progress.addEventListener("click", scrub);
  progress.addEventListener("mousedown", () => handleMouseEvent(true));
  progress.addEventListener("mousemove", (event) => isMousedown && scrub(event));
  progress.addEventListener("mouseup", () => handleMouseEvent(false));
  
  function handleMouseEvent(handleProps) {
    isMousedown = handleProps;
  }
  
  function scrub(event) {
    const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }

  

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
  