let todoList = [];



//create new todo item
const todoItem = document.querySelector('.todo .todo-header input');
document.querySelector('.todo .todo-header div button').onclick =  (e) => {
    const todo = document.querySelector('.todo .todo-header input').value;
    completeTodo();
    if (todo) {
        todoList.unshift(`
        <div class="todo-item">
            <div>
              <input type="checkbox" />
              <label>${todo}</label>
            </div>
            <span>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="white"
              >
                <title>delete todo item</title>
                <path
                  d="M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"
                ></path>
                <path
                  d="M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"
                ></path>
              </svg>
            </span>
        </div>`)
    
        document.querySelector('.todo .todo-body').innerHTML = todoList.join('');
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Empty Input",
            text: "Please write todo",
        });
    }
    
    todoItem.value = '';
    todoItem.focus();

    completeTodo();
    deleteTodo();
}


// un/complete todo item
const completeTodo = () => {
    document.querySelectorAll('.todo .todo-body input').forEach((checkButton) => {
        checkButton.onclick = (e) => {
            if (checkButton.checked) {
                e.target.setAttribute('checked', '');
                e.target.parentElement.parentElement.classList.add('complete');
            }
            else {
                e.target.removeAttribute('checked');
                e.target.parentElement.parentElement.classList.remove('complete');
            }
        }
    });
}

//delete todo item
const deleteTodo = () => {
    document.querySelectorAll('.todo .todo-body span').forEach((deleteIcon) => {
        deleteIcon.onclick = (e) => {
            e.target.closest('.todo-item').remove();
        }
    });
}
