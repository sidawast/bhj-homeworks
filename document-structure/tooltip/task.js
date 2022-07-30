let active = document.getElementsByClassName('has-tooltip');

Array.from(active).forEach((element) => {
    element.addEventListener("click", clicker);
});

function clicker() {

    let a = event.target;
    let tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = a.title;

    let hint = this.insertBefore(tooltip, this.firstElementChild);
    let aParametr = a.getBoundingClientRect();
    hint.style.left = aParametr.left + "px";
    hint.style.top = aParametr.top + 20 + "px";
    tooltip.classList.add('tooltip_active');
    
    event.preventDefault();
}