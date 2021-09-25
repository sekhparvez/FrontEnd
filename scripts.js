var mapClicker = document.querySelector(".map");
var body = document.querySelector("body");
document.addEventListener("click", show);
// var closer



// closer.addEventListener
mapClicker.addEventListener("click", show );

function show (e){
  e.preventDefault();
  console.log(e.target);

}

document.addEventListener("click", HandleClicks);

function HandleClicks(e){
  console.log(e.target);
  if(e.target.matches(".map")){
    document.querySelector("body").classList.add("showme");
    e.preventDefault();
  }
  if (e.target.matches(".closer")) {
    document.querySelector("body").classList.remove("showme");
    e.preventDefault();
  }
}

