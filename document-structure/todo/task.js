
let input = document.getElementById('task__input');
let task = document.querySelector('.tasks__list');
let form = document.querySelector('#tasks__form');

form.addEventListener("submit", function(e) {e.preventDefault()});

document.addEventListener('keydown', function(event) {
    let trim = input.value.trim();
    if (event.keyCode == '13' && trim) {
        task.insertAdjacentHTML("afterBegin", `<div class="task">
        <div class="task__title">` + input.value + `</div>
        <a href="#" class="task__remove">&times;</a>
        </div>`); 
      
        input.value = '';
        let remove = document.querySelectorAll('.task__remove');
        Array.from(remove).forEach((element) => {
            element.addEventListener("click", clicker);        
        });
    }
})

function clicker() {

    let close = event.target;
    if(close.className == "task__remove") {
        console.log('+');
        close.parentElement.remove()
    }
}