const wsUri = "wss://echo-ws-service.herokuapp.com";


function pageLoaded() {
    const infoOutput = document.querySelector('.info_output');
    const chatOutput = document.querySelector('.chat_output');
    const input = document.querySelector('input');
    const sendBtn = document.querySelector('.btn_send');
    const geoBtn = document.querySelector('.btn_geo');


    let socket = new WebSocket(wsUri);

    socket.onopen = function() {
        infoOutput.innerText = 'Соединение установленно';
    }

    socket.onmessage = function(event) {
        writeToChat(event.data, true)
    }
    socket.onerror = function() {
        infoOutput.innerText = 'При передаче данных произошла ошибка';
    }

    function sendMessage() {
        if(!input.value){
            return;
        }
        socket.send(input.value);
        writeToChat(input.value, false);
        input.value = "";
    }

    function writeToChat(message, isRecieved) {
        href = '';
        let messageHTML = `<div class="${isRecieved ? "recieved" : "sent"}">${message}</div>`;
        chatOutput.innerHTML += messageHTML;
    }

    function getGeo() {
        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
        }

        function locationSuccess(data) { //Если включена вызывается функция с местоположением
            let link = `https://www.openstreetmap.org/#map=18${data.coords.longitude}/${data.coords.latitude}`;
            console.log(data)
            writeToChat(`<a href="${link}" target="_blank">Вы находитесь здесь</a>`);
        }
    
        function locationError() { //Если нет, вызывается функция с ошибкой
            writeToChat('При определении местопложения произошла ошибка')
        }
    
    }
    sendBtn.addEventListener('click', sendMessage);
    geoBtn.addEventListener('click', getGeo);
}


document.addEventListener('DOMContentLoaded', pageLoaded);