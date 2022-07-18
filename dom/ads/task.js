
let interval;
setInterval(() => {
    let elementOne = document.querySelector('.rotator__case')
    let elementSpan = document.querySelector('.rotator__case_active');   
    if (elementSpan) {
        elementSpan.classList.remove('rotator__case_active');
        if (elementSpan.nextElementSibling) {
            elementSpan.nextElementSibling.classList.add('rotator__case_active');
            elementSpan.nextElementSibling.style.color = elementSpan.attributes['data-color'].value;
            //interval = elementSpan.attributes['data-speed'].value;
        } else {
            elementOne.classList.add('rotator__case_active');
        }
    }
},1000)