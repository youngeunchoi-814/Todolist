const toDoForm = document.getElementById("todo-form");//주어진 문자열과 일치하는 id속성을 가진 요소를 찾는다. 
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY="todos"
let toDos = [];


function saveToDos(){//리스트 저장
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));//스트링으로 값을 저장하고 싶을 때 stringfy
}

function deleteTodo(event){//삭제 
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){//리스트 추가 
    const li = document.createElement("li");
    li.id=newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click",deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();

}
toDoForm.addEventListener("submit",handToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);//array로 바꿔준다.
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);//foreach는 array의 각 item에 대해 function을 실행하게 해준다.
}
