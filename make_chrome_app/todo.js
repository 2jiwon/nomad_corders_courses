const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
var count = 1;

const TODOS_LS = "toDos";

// 할일 목록 배열
const toDos = [];

// 로컬스토리지에 할일 목록 저장
function saveToDos(){
    localStorage.setItem(TODOS_LS, toDos);
}
// 목록 출력해주기
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    // 할일 목록 오브젝트의 id
    const newId = toDos.length + 1;

    delBtn.innerText = "❌";
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    count++;

    // 할일 목록 오브젝트
    const toDoObj = {
      text: text,
      id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

// 텍스트입력 했을때 실행
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    if (count > 4) {
      alert("목록이 너무 많아요");
    } else {
      paintToDo(currentValue);
      toDoInput.value = "";
    }
}

// 할일 목록 불러오기
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
    }
}

// 맨 처음 실행되는 함수
function init(){
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
