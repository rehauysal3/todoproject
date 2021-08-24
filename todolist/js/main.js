const addInput = document.querySelector(".textinput");
const addForm = document.querySelector("form");
const todoList = document.querySelector(".todoList");
const clear = document.getElementById("clear");
// const edit= document.querySelector(".edit");
// todo 4 bir şey katiyen değişmeyecekse const yoksa let(const kullan)
var sec = document.querySelector("#id");
addForm.addEventListener("submit", submitForm);
clear.addEventListener("click", clearList);


function focusInput(id){
  // console.log(id);
  // console.log();
  $(".input-focus-" +id).focus();
  // sec.focus($("input-focus-" +id));
 
}


$(document).on('click','todoList',function(){
  var update_id = $(this).attr('id');
  $ajax({
    url:"/works/muttlu/todolist/db/db.php",
    method:"POST",
    data:{update_id:update_id},
    success: function (response) {
      addTodo(inputText, JSON.parse(response).id);
    },
  })});



$( document ).on( "submit", ".btnyeni",edit);

$( ".todoList" ).on( "click",'.delete',deleteTodo);
window.addEventListener("DOMContentLoaded", renderUI);

// todoList.addEventListener("click", newFunciton);
// todo 5 1. paremetre event 2.si fonksiyon
function submitForm(e) {
  e.preventDefault();
  //   todo 6 preventdefaut submit yaptıgımızda sayfanın otomatık yenılenmemesı ıcın

  //   todo 2 trim boslukları alıyor
  let inputText = addInput.value.trim();
  let options = document.getElementById("options").value;

  //   todo 14 string karsılastırmak ıcın bu fonksıyonu kullandık
  //   todo 7 floor sadece tam sayı kısmını alıyor randomda 0 la 1 arasında rastgele sayı verıyor
  if (inputText === "") {
    clearInput();
  
  } else {
 
    $.ajax({
      url: "/works/muttlu/todolist/db/db.php",
      method: "POST",
      data: {
        text: inputText,
        type: "add",
        options:options,
      },
      success: function (response) {
        addTodo(inputText, JSON.parse(response).id);
      },
    });

    // saveLocalStorage(inputText, todoId, complate);
    // todo 8 add todo fonksiyonuna parametre eklıyoruz
  }
}




function edit(e){
  document.activeElement.blur();

  const input = $('.inputtext', this)
  e.preventDefault();
  const id = input.attr("data-id");
  const text = input.val();
console.log(id);
e.preventDefault();
if(text===""){
  alert("Nope")
}
else{
 
  $.ajax({
    url:"/works/muttlu/todolist/db/db.php",
    method:"POST",
    data:{
      type:"edit",
      id:id,
      text:text,

    }
  })
}
}
  


function renderUI() {
  let a = getDB();

  $.each(JSON.parse(a), (key, value,) => {
    let li = document.createElement("li");
    li.className = "todoList";
 
    li.innerHTML = `
                    <label>
                    <span class="delete" id="${value.id}">
                      <i class="fas fa-times" id="${value.id}"></i>
                    </span>
                      <input type="checkbox" id="${value.isComplated}" class="option-input"/><form class="btnyeni"><button></button><input class="inputtext" data-id="${value.id}"
                      value="${value.text}"/> <p class="yazi">${value.options}</p> </form></label>
                     <span onclick="focusInput(${value.id})"  class="edit" type="click"> <i class="far fa-edit"></i></span>
                    `;
                    todoList.prepend(li);

  })
  
  /*
  $.each(a, (item) => {
    let li = document.createElement("li");
    li.id = item.workid;
    li.className = "todoList";
    li.innerHTML = `<span class="delete"><i class="fas fa-times" id="${item.workid}"></i></span>
    <label class="${item.isCompleted ? "completed" : ""}"><input type="checkbox" ${item.isCompleted ? "checked" : ""} class="option-input">${item.text}</label>`;
    // todo 13 item.work dememızın sebebı objeden cagırıyoz
    todoList.prepend(li);
  }); */
}
function getDB() {
  var a = [];
  $.ajax({
    url: "/works/muttlu/todolist/db/db.php",
    method: "GET",
    result: a,
    async:false,
    data: {
      'type': 'get',
    }, success: function(data){
      a=data;
    }
  });

  return a;
}
//   return a;

// }
// function(){
//   let x=getDB();
//   x.?forEach(a)== {
//     addTodo().
//   }
  
// }

//   return getDB.getItem("todos")
//     ? JSON.parse(getDB.getItem("todos"))
//     : [];
//   // todo 11 return kullanmamızın sebebi çağırdıgımız yerde verinin gelmesi
// }

// Add Elemet
function addTodo(text, id) {
  // console.log(id);

  let li = document.createElement("li");
  li.className = "todoList";

  li.innerHTML = `
                  <label>
                  <span class="delete" id="${id}">
                    <i class="fas fa-times" id="${id}"></i>
                  </span>
                    <input type="checkbox" id="${id}" class="option-input"/><form  class="btnyeni"><button></button><input class="inputtext" input-focus-${id}"
                    value="${text}"/> <p class="yazi">${options}</p> </form></label> 
                   <span onclick="focusInput(${id})" class="edit"> <i class="far fa-edit"></i></span>
                  `;

                  
                  $.ajax(
                    {
                      url:"/works/muttlu/todolist/db/db.php",
                      method:"POST",
                      data:{
                        type:"get",
                        
                        success: function(data){
                          $(".todoList").html(data);
                        }
                      }
                    }
                  )
                    
  // todo 3 prepend en başa basıyor
  todoList.prepend(li);
  clearInput();
}

function clearInput() {
  addInput.value = "";
}
function clearList() {
  
  while (todoList.firstElementChild !== null) {
    todoList.removeChild(todoList.firstElementChild);

    $.ajax({
      url: "/works/muttlu/todolist/db/db.php",
      method: "POST",
      data: {
        type: "allclear",
        success: function(){
          innerHTML=""
        }
      }});
  }
}
// todo 9 arastır = bubbling and capturing in javascript
function deleteTodo() {
  const element = $(this);
  const todoId = element.attr("id");
  

    // deleteFromLocalStorage(idName);
    $.ajax({
      url: "/works/muttlu/todolist/db/db.php",
      method: "POST",
      data: {
        type: "delete",
        id: todoId,
        success: function(){
          element.closest('li').remove();
        }
      }});

  
 
  // function saveLocalStorage(text, todoId) {
  //   const todo = {
  //     work: text,
  //     workid: todoId,
  //     isCompleted: false,
  //   };
  //   let localArray = getLocalStorage();
  //   localArray.push(todo);
  //   localStorage.setItem("todos", JSON.stringify(localArray));
  // }
  // function deleteFromLocalStorage(id) {
  //   let todoArray = getLocalStorage();
  //   let index = todoArray.findIndex((item) => {
  //     if (item.workid == id) {
  //       return item;
  //     }
  //   });
  //   todoArray.splice(index, 1);
  //   localStorage.setItem("todos", JSON.stringify(todoArray));
  //   // todo 17 indexleri tespit edip splice ile sildik
  // }
  // todo 16 foreach return etmez
  // function newFunction(e){
  //   const textBox = e.target.className
  //   console.log("complated");
  //   if(textBox==="todoList"){
  //      e.target.classList.add("completed")
  //   }
  // }

  // function newFunciton(e) {
  //   const getLocalTodos = getLocalStorage();
  //   if (e.target.tagName == "LABEL") {
  //     e.target.classList.toggle("completed");
  //     const id = e.target.parentElement.id;
  //     getLocalTodos.forEach((todo, index) => {
  //       if (todo.workid == id) {
  //         todo.isCompleted = !todo.isCompleted;
  //         getLocalTodos.splice(index, 1);
  //         getLocalTodos.splice(index, 0, todo);
  //         localStorage.setItem("todos", JSON.stringify(getLocalTodos));
  //       }
  //     });
  //   }
  // }

  }
function test() {
  var ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function () {};
}