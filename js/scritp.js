const langageAll = document.querySelectorAll(".til")
const like = document.querySelector(".like")
const line = document.querySelector(".line")
const lock = document.querySelector(".lock")
const modal = document.querySelector(".modal")
const hero = document.querySelector(".hero")
const header = document.querySelector("header")
const main = document.querySelector("main")
const footer = document.querySelector("footer")
const audio = document.querySelector("audio")
const audioBtn = document.querySelector(".audio")

langageAll.forEach((langage) => {
    langage.addEventListener("click", () => {
        langageAll.forEach(el => el.classList.remove("active"))
        langage.classList.add("active")
    })
})

like.addEventListener("click", () => {
    like.classList.toggle("active")
    line.classList.toggle("active")
})

lock.addEventListener("click", () => {
    modal.classList.add("active")
    setTimeout(() => {
        hero.classList.add("remove")
    }, 500);
    setTimeout(() => {
        header.classList.add("active")
        main.classList.add("active")
        footer.classList.add("active")
        audio.play()
    }, 800)
    setTimeout(() => {
        modal.classList.add("remove")
    }, 1000);
})


audioBtn.addEventListener("click", ()=>{
    audio.play()
})

/////////////////////////////////////////////////////

function pad2(n){ return String(n).padStart(2,'0'); }

const target = new Date(2027, 8, 8, 0, 0, 0); 

const qKun = document.querySelector('.kun');
const qHours = document.querySelector('.soat');
const qMinut = document.querySelector('.daqiqa');
const qSoniya = document.querySelector('.second');

if (!target) throw new Error('Target sanasi belgilanmagan');
if (!qKun && !qHours && !qMinut && !qSoniya) {
  console.warn('Hech qanday element topilmadi: .kun, .soat, .daqiqa, .second');
}

function splitDHMSS(ms){
  if (ms <= 0) return { days: '00', h: '00', m: '00', s: '00', totalMs: 0 };
  let sec = Math.floor(ms / 1000);  
  const days = Math.floor(sec / 86400); sec %= 86400;
  const h = Math.floor(sec / 3600); sec %= 3600;
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return { days: String(days).padStart(2,'0'), h: pad2(h), m: pad2(m), s: pad2(s), totalMs: ms };
}

function update(){
  const now = new Date();
  const ms = target - now;
  const parts = splitDHMSS(ms);

  if (qKun)    qKun.textContent = parts.days;
  if (qHours)  qHours.textContent = parts.h;
  if (qMinut)  qMinut.textContent = parts.m;
  if (qSoniya) qSoniya.textContent = parts.s;
}

update();
const timerId = setInterval(() => {
  update();
  if (target - new Date() <= 0) clearInterval(timerId);
}, 1000);