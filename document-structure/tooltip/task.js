let active = document.getElementsByClassName('has-tooltip');

Array.from(active).forEach((element) => {
    element.addEventListener("click", clicker);
});

function clicker() {
    
    let a = event.target;
    let tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = a.title;

    tooltip.classList.add('tooltip_active');
    this.insertBefore(tooltip, this.firstElementChild)
    
    event.preventDefault();
}