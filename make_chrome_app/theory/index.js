// const title = document.getElementById('title');
// title.innerHTML = "This is from JS";
// // title.style.color = "red";
// // console.log(title);
// // console.dir(title);
//
// function handleResize(event){
//   console.log("I have been resized");
//   console.log(event);
// }
//
// const baseColor = "black";
// const otherColor = "green";
//
// function handleClick(event){
//   const currentColor = title.style.color;
//   if (currentColor == baseColor) {
//     title.style.color = otherColor;
//   } else {
//     title.style.color = baseColor;
//   }
// }
//
// function init(){
//   title.style.color = baseColor;
//   window.addEventListener("click", handleClick);
// }
// init();

//--------------------------------------------------

const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
  // const hasClass = title.classList.contains(CLICKED_CLASS);
  //
  // if (!hasClass) {
  //   title.classList.add(CLICKED_CLASS);
  // } else {
  //   title.classList.remove(CLICKED_CLASS);
  // }
  
  // 위의 내용을 하나로 나타내는 것이 toggle임
  title.classList.toggle(CLICKED_CLASS);
}

function init(){
  title.addEventListener("click", handleClick);
}
init();
