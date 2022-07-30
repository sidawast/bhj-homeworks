let chatWidget = document.querySelector('.chat-widget');
let input = document.getElementById('chat-widget__input');
let messages = document.querySelector('.chat-widget__messages');

let date = new Date();
let time = (date.getHours() + ":" + date.getMinutes());
let textArr = [
    'Опа',
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
    'Не совсем понял ваш вопрос',
    'Уже очень поздно, приходите завтра',
    'Ваш вопрос ушел на обработку',
    'Мы с вами обязательно свяжемся'
];

let timeСounter = 30000;

chatWidget.addEventListener('click', chat);

document.addEventListener('keydown', function(event) {
    
    if (event.keyCode == '13' && input.value) {       
        
        messages.innerHTML += ` 
        <div class="message message_client">
        <div class="message__time">` + time + `</div>
        <div class="message__text">` + input.value + `</div>
        </div>
        `;
        input.value = '';
        setTimeout(botLog, 500);
        timeСounter = 30000;
    }
});

function chat() {
    chatWidget.classList.add('chat-widget_active');
    setTimeout(botLog, timeСounter)
}
    
    function botLog() {
        let text = textArr[Math.floor(Math.random() * textArr.length)];
        messages.innerHTML += `
        <div class="message">
        <div class="message__time">`+ time + `</div>
    <div class="message__text">` + text + `</div>
    </div>
    `;
}