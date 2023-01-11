const stop = document.querySelector('.stop');
const start = document.querySelector('.start');
const clear = document.querySelector('.clear');

const deg = 6;
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc')
const msc = document.querySelector('#msc');

let m = 0;
let s = 0;
let ms = 0;

let min = m * 30;
let sec = s * deg;
let msec = ms * 3.6;

function go() {
        if ( ms <= 99){
        ms += 1;
        msec = ms * 3.6;
        msc.style.transform = `rotateZ(${msec}deg)`;
        } else if (ms = 99 && s <= 59) {
           s+=1;
           ms=1;
           sec = s * deg;
           msec = ms * 3.6;
           sc.style.transform = `rotateZ(${sec}deg)`;
           msc.style.transform = `rotateZ(${msec}deg)`;
        } else {
            m+=1;
            s=1;
            ms=0;
            min = m * deg;
            sec = s * deg;
            sc.style.transform = `rotateZ(${sec}deg)`;
            mn.style.transform = `rotateZ(${min}deg)`;            
        };
    };

start.addEventListener('click', () => {
 const set = setInterval(go, 10);
stop.addEventListener('click', () => { 
    clearInterval(set);
});
});

clear.addEventListener('click', () => {
    m = 0,
    s = 0,
    ms= 0;
     min = m * 30;
     sec = s * deg;
     msec = ms * 3.6;
     msc.style.transform = `rotateZ(${msec}deg)`;
     sc.style.transform = `rotateZ(${sec}deg)`;
     mn.style.transform = `rotateZ(${min}deg)`;
});