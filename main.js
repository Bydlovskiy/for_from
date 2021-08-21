'use strict'

let meet = new Date(2021, 2, 7)
console.log(meet);

function query(selector) {
    return document.querySelector(selector);
}

setInterval(function () {
    let now = new Date();
    let month = parseInt((now - meet) / (1000 * 60 * 60 * 24 * 30));
    let days = parseInt((now - meet) / (1000 * 60 * 60 * 24));
    let hours = parseInt((now - meet) / (1000 * 60 * 60)) - (days * 24);
    let minutes = parseInt(((now - meet) / (1000 * 60) - (days * 24 * 60) - (hours * 60)));
    let seconds = parseInt((now - meet) / 1000 - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60));
    let miliSeconds = (now - meet) - (days * 24 * 60 * 60 * 1000) - (hours * 60 * 60 * 1000) - (minutes * 60 * 1000) - (seconds * 1000);
    query('.days').textContent = 'Days  ' + days;
    query('.hours').textContent = 'Hours  ' + hours;
    query('.minutes').textContent = 'Minutes  ' + minutes;
    query('.seconds').textContent = 'Seconds  ' + seconds;
    query('.miliseconds').textContent = 'miliseconds  ' + miliSeconds;
}, 1)

function smallHeart(){
    query('.part1').classList.remove('bigheard');
    query('.part2').classList.remove('bigheard');
    query('.part1').style.left = '36px';
    query('.part2').style.left = '72px';
}

function bigHeart(){
    query('.part1').classList.add('bigheard');
    query('.part2').classList.add('bigheard');
    query('.part2').style.left = '51px';
    query('.part1').style.left = '0';
}

let big =  setInterval(bigHeart,500);
let small = setInterval(smallHeart,1000)




