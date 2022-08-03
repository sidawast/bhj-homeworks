let active = document.getElementsByClassName('has-tooltip');

Array.from(active).forEach((element) => {
    element.addEventListener("click", clicker);
});

function clicker(e) {
    let afterent = document.querySelectorAll('.tooltip');
    let aTag = e.target;
    Array.from(afterent).forEach((item) => {
        item.className.includes('tooltip tooltip_active');
        item.toggle('tooltip tooltip_active'); 
    });
    
    let tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = aTag.title;

    let hint = this.insertAdjacentElement('afterend', tooltip) 
    let aParametr = aTag.getBoundingClientRect();
    hint.style.left = aParametr.left + "px";
    hint.style.top = aParametr.top + 20 + "px";
    tooltip.classList.add('tooltip_active');
    
    event.preventDefault();
}