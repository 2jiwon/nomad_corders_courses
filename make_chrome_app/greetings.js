const form = document.querySelector(".js-nameForm");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function handleSubmit(event){
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}
function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}
function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `안녕하세요, ${text}`;
}
function saveName(text){
  localStorage.setItem(USER_LS, text)
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);

    if (currentUser === null) {
      // 만약 유저가 없다면
      askForName();
    } else {
      // 유저가 있으면
      paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();
