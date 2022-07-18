let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}` // DIGITAL

    let sDeg = ((360 / 60) * second) - 90; // SEGUNDOS ANALOGICO
    sElement.style.transform = `rotate(${sDeg}deg)`

    let mDeg = ((360 / 60) * minute) - 90; // MINUTOS ANALOGICO
    mElement.style.transform = `rotate(${mDeg}deg)`

    let hDeg = ((360/12) * hour) + ((30/60) * minute) - 90; /*Entre uma hora e outra temos um ângulo de 30 graus, o ponteiro percorrerá esse ângulo dentro dos 60 mins, logo a cada minuto o ponteiro percorrerá 0,5 grau. O minuto vai somente até 59 quando vai entrar no '60' ele vai pra próxima hora sendo o minuto 00, sendo assim não da nenhum bug.*/
    hElement.style.transform = `rotate(${hDeg}deg)`
}

function fixZero(time) {
    if(time < 10) {
        return '0'+time;
    } else {
        return time
    }
}

setInterval(updateClock, 1000); //1 segundo atualizar
updateClock(); //Não ter delay