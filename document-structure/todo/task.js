
let input = document.getElementById('task__input');
let task = document.querySelector('.tasks__list');
let form = document.querySelector('#tasks__form');
let button = document.querySelector('.tasks__add');

form.addEventListener("submit", function(e) {
    let trim = input.value.trim();
    if (e.submitter.className == 'tasks__add' && trim) {
        task.insertAdjacentHTML("beforeEnd", `<div class="task">
        <div class="task__title">` + input.value + `</div>
        <a href="#" class="task__remove">&times;</a>
        </div>`); 
      
        input.value = '';
        let remove = document.querySelectorAll('.task__remove');
        Array.from(remove).forEach((element) => {
            element.addEventListener("click", clicker);        
        });
    }
    e.preventDefault()});

function clicker() {

    let close = event.target;
    if(close.className == "task__remove") {
        close.parentElement.remove()
    }
}