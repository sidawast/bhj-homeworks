
let input = document.getElementById('task__input');
let task = document.querySelector('.tasks__list');


//chatWidget.addEventListener('click', chat);

document.addEventListener('keydown', function(event) {
    
    if (event.keyCode == '13' && input.value) {       
        task.innerHTML += ` 
        <div class="task">
        <div class="task__title">` + input.value + `</div>
        <a href="#" class="task__remove">&times;</a>
        </div>
        `;
        input.value = '';
        let remove = document.querySelectorAll('.task__remove');
        Array.from(remove).forEach((element) => {
            element.addEventListener("click", clicker);
        });
    }
});


function clicker() {

    let close = event.target;
    if(close.className == "task__remove") {
        console.log('+');
        close.parentElement.remove()
    }
}