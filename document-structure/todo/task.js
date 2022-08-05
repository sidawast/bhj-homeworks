
let input = document.getElementById('task__input');
let task = document.querySelector('.tasks__list');
let form = document.querySelector('#tasks__form');
let button = document.querySelector('.tasks__add');

form.addEventListener("submit", function(event) {
    let trim = input.value.trim();
    if (event.submitter.className == 'tasks__add' && trim) {
        task.insertAdjacentHTML("beforeEnd", `<div class="task">
        <div class="task__title">` + input.value + `</div>
        <a href="#" class="task__remove">&times;</a>
        </div>`); 
      
        input.value = '';    
    }

    document.querySelectorAll('.task__remove').forEach((element) => {
        element.addEventListener("click", function (event) {
            let close = event.target;
            if(close.className == "task__remove") {
                close.parentElement.remove()
            }
        });        
    });
    event.preventDefault()});