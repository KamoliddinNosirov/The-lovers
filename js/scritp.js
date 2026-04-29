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
const uzLang = document.querySelector(".uzTil")
const ruLang = document.querySelector(".ruTil")
const langRU = document.querySelector(".langRu")
const langUz = document.querySelector(".langUz")


let language = "uz"

uzLang.addEventListener("click", () => {
  uzLang.classList.add("active")
  ruLang.classList.remove("active")
  language = "uz"
  writeData()
})

ruLang.addEventListener("click", () => {
  uzLang.classList.remove("active")
  ruLang.classList.add("active")
  language = "ru"
  writeData()
})

langUz.addEventListener("click", () => {
  langUz.classList.add("active")
  langRU.classList.remove("active")
  language = "uz"
  writeData()
})

langRU.addEventListener("click", () => {
  langRU.classList.add("active")
  langUz.classList.remove("active")
  language = "ru"
  writeData()
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
    modal.classList.add("remove")

    header.classList.add("active")
    main.classList.add("active")
    footer.classList.add("active")

    AOS.refresh(); // 🔥 SHU MUHIM
  }, 1000);
});


audioBtn.addEventListener("click", () => {
  // audio.play()
})

/////////////////////////////////////////////////////

function pad2(n) { return String(n).padStart(2, '0'); }

const target = new Date(2027, 8, 8, 0, 0, 0);

const qKun = document.querySelector('.kun');
const qHours = document.querySelector('.soat');
const qMinut = document.querySelector('.daqiqa');
const qSoniya = document.querySelector('.second');

if (!target) throw new Error('Target sanasi belgilanmagan');
if (!qKun && !qHours && !qMinut && !qSoniya) {
  console.warn('Hech qanday element topilmadi: .kun, .soat, .daqiqa, .second');
}

function splitDHMSS(ms) {
  if (ms <= 0) return { days: '00', h: '00', m: '00', s: '00', totalMs: 0 };
  let sec = Math.floor(ms / 1000);
  const days = Math.floor(sec / 86400); sec %= 86400;
  const h = Math.floor(sec / 3600); sec %= 3600;
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return { days: String(days).padStart(2, '0'), h: pad2(h), m: pad2(m), s: pad2(s), totalMs: ms };
}

function update() {
  const now = new Date();
  const ms = target - now;
  const parts = splitDHMSS(ms);

  if (qKun) qKun.textContent = parts.days;
  if (qHours) qHours.textContent = parts.h;
  if (qMinut) qMinut.textContent = parts.m;
  if (qSoniya) qSoniya.textContent = parts.s;
}

update();
const timerId = setInterval(() => {
  update();
  if (target - new Date() <= 0) clearInterval(timerId);
}, 1000);




const client = {
  ru: {
    pageTitle: "Камолиддин и Гулсанамхон | Свадебное приглашение",
    metaDescription: "Свадебное приглашение Камолиддин и Гулсанамхон на 5 апреля 2026 года.",
    previewImageAlt: "Свадебное приглашение Камолиддин и Гулсанамхон",
    ariaIntro: "Экран открытия приглашения",
    ariaEnvelope: "Запечатанный бумажный конверт",
    ariaWeddingDate: "Дата свадьбы",
    ariaCalendar: "Календарь апреля 2026 с выделенным 5 апреля",
    ariaWeddingDay: "День свадьбы",
    ariaOrnamentHero: "Фотография пары с именами молодоженов",
    ariaVenueDetails: "Место проведения",
    ariaGiftSection: "Подарок жениху",
    ariaCountdown: "Обратный отсчет",
    introTitle:
      "<span class=\"intro-title__line\">ВАМ <br/> ПРИШЛО</span><br/><span class=\"intro-title__line\">ПРИГЛАШЕНИЕ</span>",
    unlockHint:
      "<span class=\"intro-unlock__line\">Разблокируйте,</span><span class=\"intro-unlock__line\">нажав на замочек</span>",
    unlockInvitationLabel: "Открыть приглашение",
    envelopeTopNote:
      "<span class=\"flap-note-top\">ВЫ</span><span class=\"flap-note-middle\">ПРИГЛАШЕНЫ</span><span class=\"flap-note-script\">на свадьбу</span>",
    withLove: "с любовью,",
    signatureNames: "Камолиддин\u00a0и\u00a0Gulsanamxon",
    ornamentNames:
      "<span class=\"ornament-name-line\">Камолиддин</span><span class=\"ornament-name-amp\">и</span><span class=\"ornament-name-line\">Гулсанамхон</span>",
    ornamentMessage:
      "Аллах объединил их сердца любовью<br />(сура «Аль-Анфаль», аят 63)",
    ornamentDay: "05",
    ornamentMonth: "04",
    ornamentYear: "26",
    heroNames:
      "<span class=\"hero-title__line\">Дорогие наши</span><span class=\"hero-title__line\">родные и близкие!</span>",
    openHere: "нажмите",
    lead: "В этот прекрасный день мы соединяем наши сердца и начинаем новую историю - историю нашей любви.<br /><br />Будем счастливы разделить радость этого особенного момента вместе с вами.<br /><br /><strong>С любовью приглашаем вас на нашу свадьбу.</strong>",
    scrollHint: "Листайте вниз",
    calendarMonth: "ДЕкабыр 2026",
    weekdayMon: "ПН",
    weekdayTue: "ВТ",
    weekdayWed: "СР",
    weekdayThu: "ЧТ",
    weekdayFri: "ПТ",
    weekdaySat: "СБ",
    weekdaySun: "ВС",
    locationTitle: "Место проведения",
    venueName: "Дворец торжеств «Рохат»",
    venueTime: "Время: 18:00",
    venueAddress: "Адрес: Чиланзарский район, улица Арнасай, 7/2.",
    mapLinkYandex: "Яндекс Карты",
    mapLinkGoogle: "Google Maps",
    giftTitle: "Подарок",
    giftLead: "Если вам будет удобно, теплые пожелания можно дополнить подарком на карту жениха.",
    giftRecipientLabel: "Получатель",
    giftRecipientName: "Камолиддин",
    giftCardLabel: "Номер карты",
    giftCardNote: "Нажмите на кнопку ниже, чтобы быстро скопировать номер карты.",
    giftCopyAction: "Скопировать номер",
    giftCopySuccess: "Номер скопирован",
    giftCopyError: "Не удалось скопировать",
    countdownTitle: "Считаем каждое мгновение",
    unitDays: "Дней",
    unitHours: "Часов",
    unitMinutes: "Минут",
    unitSeconds: "Секунд",
    countdownWaiting: "Мы ждем вас.",
    countdownToday: "Этот день настал. Мы ждем вас.",
    languageSwitcher: "Выбор языка",
    languageRuLabel: "Русский",
    languageUzLabel: "O'zbekcha",
    musicPlayLabel: "Включить музыку",
    musicPauseLabel: "Остановить музыку",
  },
  uz: {
    pageTitle: "Kamoliddin va Gulsanamxon | To'y taklifnomasi",
    metaDescription: "Kamoliddin va Gulsanamxon 2026-yil 5-aprel kungi to'y taklifnomasi.",
    previewImageAlt: "Kamoliddin va Gulsanamxon to'y taklifnomasi",
    ariaIntro: "Taklifnomani ochish ekrani",
    ariaEnvelope: "Muhrlangan qog'oz konvert",
    ariaWeddingDate: "To'y sanasi",
    ariaCalendar: "2026-yil aprel kalendari, 5-aprel belgilangan",
    ariaWeddingDay: "To'y kuni",
    ariaOrnamentHero: "Yoshlarning rasmi va ismlari tushirilgan bosh sahifa",
    ariaVenueDetails: "To'y manzili",
    ariaGiftSection: "Kuyov uchun to'yona",
    ariaCountdown: "Orqaga sanoq",
    introTitle:
      "<span class=\"intro-title__line\">SIZGA</span><br/><span class=\"intro-title__line\">TAKLIFNOMA</span><br/><span class=\"intro-title__line\">KELDI</span>",
    unlockHint:
      "<span class=\"intro-unlock__line\">Qulfchani bosib, </span><span class=\"intro-unlock__line\">taklifnomani oching</span>",
    unlockInvitationLabel: "Taklifnomani ochish",
    envelopeTopNote:
      "<span class=\"flap-note-top\">SIZ</span><span class=\"flap-note-middle\">TO'YIMIZGA</span><span class=\"flap-note-script\">taklif etilgansiz</span>",
    withLove: "muhabbat ila,",
    signatureNames: "Kamoliddin\u00a0va\u00a0Gulsanamxon",
    ornamentNames:
      "<span class=\"user_name\">Kamoliddin</span><br/><span class=\"ornament-name-amp\">va</span><br/><span class=\"user_name\">Gulsanamxon</span>",
    ornamentMessage:
      "Alloh ularni qalbini sevgi ila birlashtirdi<br />(Anfol surasi, 63-oyat)",
    ornamentDay: "05",
    ornamentMonth: "04",
    ornamentYear: "26",
    heroNames:
      "<span class=\"hero-title__line\">Aziz va qadrdon </span><span class=\"hero-title__line\">insonimiz!</span>",
    openHere: "ochish",
    lead: "Hayotimizdagi eng baxtli kunlardan biri - nikoh to'yimizni siz bilan birga nishonlashni niyat qildik.<br /><br />Sizni ushbu kechamizga samimiy taklif etamiz.<br /><br /><strong>Quvonchli kunimizda aziz mehmonimiz bo'lishingizni intizorlik bilan kutamiz.</strong>",
    scrollHint: "Pastga suring",
    calendarMonth: "Dekabr 2027",
    weekdayMon: "DU",
    weekdayTue: "SE",
    weekdayWed: "CHOR",
    weekdayThu: "PAY",
    weekdayFri: "JU",
    weekdaySat: "SHA",
    weekdaySun: "YA",
    locationTitle: "To'y manzili",
    venueName: "\"Rohat\" tantanalar saroyi",
    venueTime: "Vaqti: 18:00",
    venueAddress: "Manzil: Chilonzor tumani, Arnasoy ko'chasi 7/2.",
    mapLinkYandex: "Yandex xaritasi",
    mapLinkGoogle: "Google Maps",
    giftTitle: "To'yona",
    giftLead: "Agar istasangiz, to'yonani kuyov kartasiga yuborishingiz mumkin.",
    giftRecipientLabel: "Qabul qiluvchi",
    giftRecipientName: "Kamoliddin",
    giftCardLabel: "Karta raqami",
    giftCardNote: "Quyidagi tugma orqali karta raqamini tezda nusxalashingiz mumkin.",
    giftCopyAction: "Raqamni nusxalash",
    giftCopySuccess: "Raqam nusxalandi",
    giftCopyError: "Nusxalab bo'lmadi",
    countdownTitle: "Har lahzani sanayapmiz",
    unitDays: "Kun",
    unitHours: "Soat",
    unitMinutes: "Daqiqa",
    unitSeconds: "Soniya",
    countdownWaiting: "Sizni intiqlik bilan kutamiz.",
    countdownToday: "Bugun aynan o'sha kun. Sizni kutamiz.",
    languageSwitcher: "Til tanlash",
    languageRuLabel: "Ruscha",
    languageUzLabel: "O'zbekcha",
    musicPlayLabel: "Musiqani yoqish",
    musicPauseLabel: "Musiqani to'xtatish",
  },
};

const h1_tag = document.querySelector(".h1-tag")
const pTag = document.querySelector(".ptag")
const box = document.querySelector(".box")
const scrol = document.querySelector(".scrol")
const sarlavha = document.querySelector(".sarlavha")
const leadBtn = document.querySelector(".lead")
const kalendar = document.querySelector(".kalendar")
const week_days = document.querySelector(".week-days")
const info_section = document.querySelector(".info-section3")
const section_info1 = document.querySelector(".section-info1")
const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const Kun = document.querySelector('.kunName');
const Hours = document.querySelector('.soatName');
const Minut = document.querySelector('.daqiqaName');
const Soniya = document.querySelector('.soniyaName');
const lahza = document.querySelector('.lahza');
const songi = document.querySelector('.songisi');


const writeData = () => {
  if (language === "uz") {
    uzLang.classList.add("active")
    langUz.classList.add("active")
    h1_tag.innerHTML = client.uz.introTitle
    pTag.innerHTML = client.uz.unlockHint
    box.innerHTML = `
                   <h1 style="line-height: 50px;"  class="user_name">${client.uz.ornamentNames}</h1>
    `
    scrol.innerHTML = client.uz.scrollHint
    sarlavha.innerHTML = client.uz.heroNames
    leadBtn.innerHTML = client.uz.lead
    kalendar.innerHTML = client.uz.calendarMonth
    week_days.innerHTML = `
                        <span>${client.uz.weekdayMon}</span>
                        <span>${client.uz.weekdayTue}</span>
                        <span>${client.uz.weekdayWed}</span>
                        <span>${client.uz.weekdayThu}</span>
                        <span>${client.uz.weekdayFri}</span>
                        <span>${client.uz.weekdaySat}</span>
                        <span>${client.uz.weekdaySun}</span>
    `
    info_section.innerHTML = `
                        <h1>${client.uz.locationTitle}</h1>
                        <h3>${client.uz.venueName}</h3>
                        <p>${client.uz.venueTime}</p>
                        <p class="manzil">${client.uz.venueAddress}</p>
    `
    button1.innerHTML = client.uz.mapLinkYandex
    button2.innerHTML = client.uz.mapLinkGoogle
    section_info1.innerHTML = `
                        <h1>${client.uz.giftTitle}</h1>
                        <p>${client.uz.giftLead}</p>
                        <div class="card">
                            <div class="user">
                                <p class="ptag">${client.uz.giftRecipientLabel}</p>
                                <h1>${client.uz.giftRecipientName}</h1>
                            </div>
                            <div class="card-number">
                                <p>${client.uz.giftCardLabel}</p>
                                <h2><span>8600</span><span>0000</span><span> 0000</span><span> 0000</span></h2>
                                <h4>${client.uz.giftCardNote}</h4>
                            </div>
                            <button>${client.uz.giftCopyAction}</button>
    `
    lahza.innerHTML = client.uz.countdownTitle
    Kun.innerHTML = client.uz.unitDays
    Hours.innerHTML = client.uz.unitHours
    Minut.innerHTML = client.uz.unitMinutes
    Soniya.innerHTML = client.uz.unitSeconds
    songi.innerHTML = client.uz.countdownWaiting


  } else {
    ruLang.classList.add("active")
    langUz.classList.remove("active")
    langRU.classList.add("active")
    h1_tag.innerHTML = client.ru.introTitle
    pTag.innerHTML = client.ru.unlockHint
    box.innerHTML = `
                   <h1 style="line-height: 90px;"  class="user_name">${client.ru.ornamentNames}</h1>
    `
    scrol.innerHTML = client.ru.scrollHint
    sarlavha.innerHTML = client.ru.heroNames
    leadBtn.innerHTML = client.ru.lead
    kalendar.innerHTML = client.ru.calendarMonth
    week_days.innerHTML = `
                        <span>${client.ru.weekdayMon}</span>
                        <span>${client.ru.weekdayTue}</span>
                        <span>${client.ru.weekdayWed}</span>
                        <span>${client.ru.weekdayThu}</span>
                        <span>${client.ru.weekdayFri}</span>
                        <span>${client.ru.weekdaySat}</span>
                        <span>${client.ru.weekdaySun}</span>
    `
    info_section.innerHTML = `
                        <h1>${client.ru.locationTitle}</h1>
                        <h3>${client.ru.venueName}</h3>
                        <p>${client.ru.venueTime}</p>
                        <p class="manzil">${client.ru.venueAddress}</p>
    `
    button1.innerHTML = client.ru.mapLinkYandex
    button2.innerHTML = client.ru.mapLinkGoogle
    section_info1.innerHTML = `
                        <h1>${client.ru.giftTitle}</h1>
                        <p>${client.ru.giftLead}</p>
                        <div class="card">
                            <div class="user">
                                <p class="ptag">${client.ru.giftRecipientLabel}</p>
                                <h1>${client.ru.giftRecipientName}</h1>
                            </div>
                            <div class="card-number">
                                <p>${client.ru.giftCardLabel}</p>
                                <h2><span>8600</span><span>0000</span><span> 0000</span><span> 0000</span></h2>
                                <h4>${client.ru.giftCardNote}</h4>
                            </div>
                            <button>${client.ru.giftCopyAction}</button>
    `
    lahza.innerHTML = client.ru.countdownTitle
    Kun.innerHTML = client.ru.unitDays
    Hours.innerHTML = client.ru.unitHours
    Minut.innerHTML = client.ru.unitMinutes
    Soniya.innerHTML = client.ru.unitSeconds
    songi.innerHTML = client.ru.countdownWaiting

  }
}

writeData()



const bgheader = ()=>{
  const btn_top = document.querySelector(".btn-top")
  if(window.scrollY / 3 > 100){
    btn_top.classList.add("scroll-show")
  }else{
    btn_top.classList.remove("scroll-show")
  }
}

window.addEventListener("scroll", bgheader)