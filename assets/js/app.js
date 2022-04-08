var data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

/*
 * *************
 *  Variables *
 * *************
 */

const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

const work = document.querySelector("#work .card-body");
const play = document.querySelector("#play .card-body");
const study = document.querySelector("#study .card-body");
const exercise = document.querySelector("#exercise .card-body");
const social = document.querySelector("#social .card-body");
const selfCare = document.querySelector("#self-care .card-body");

const cardList = [];
cardList.push({ title: "Work", element: work });
cardList.push({ title: "Play", element: play });
cardList.push({ title: "Study", element: study });
cardList.push({ title: "Exercise", element: exercise });
cardList.push({ title: "Social", element: social });
cardList.push({ title: "Self Care", element: selfCare });

daily.addEventListener("click", (e) => {
  e.target.classList.add("active");
  weekly.classList.remove("active");
  monthly.classList.remove("active");

  cardList.forEach((card) => {
    let curCardTitle = card.title;
    let cardData = data.find((data) => data.title === curCardTitle);

    let dailyCurTime = cardData.timeframes.daily.current;
    let dailyPrevTime = cardData.timeframes.daily.previous;

    card.element.innerHTML = `<h3>${dailyCurTime} hrs</h3><p class="previous-time-text">Last Day - ${dailyPrevTime}</p>`;
  });
});

weekly.addEventListener("click", (e) => {
  e.target.classList.add("active");
  daily.classList.remove("active");
  monthly.classList.remove("active");

  cardList.forEach((card) => {
    let curCardTitle = card.title;
    let cardData = data.find((data) => data.title === curCardTitle);

    let weeklyCurTime = cardData.timeframes.weekly.current;
    let weeklyPrevTime = cardData.timeframes.weekly.previous;

    card.element.innerHTML = `<h3>${weeklyCurTime} hrs</h3><p class="previous-time-text">Last Week - ${weeklyPrevTime}</p>`;
  });
});

monthly.addEventListener("click", (e) => {
  e.target.classList.add("active");
  daily.classList.remove("active");
  weekly.classList.remove("active");

  cardList.forEach((card) => {
    let curCardTitle = card.title;
    let cardData = data.find((data) => data.title === curCardTitle);

    let monthlyCurTime = cardData.timeframes.monthly.current;
    let monthlyPrevTime = cardData.timeframes.monthly.previous;

    card.element.innerHTML = `<h3>${monthlyCurTime} hrs</h3><p class="previous-time-text">Last Month - ${monthlyPrevTime}</p>`;
  });
});
