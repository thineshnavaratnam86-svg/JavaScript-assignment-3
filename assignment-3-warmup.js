//assignment-3-warmup
//Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];

const nameToRemove = "Ahmad";

const index = names.indexOf(nameToRemove);
if (index !== -1) {
  names.splice(index, 1);
}

console.log(names);

//When will we be there??
const travelInformation = { speed: 50, destinationDistance: 432 };

function calculateTravelTime(info) {
  const totalHours = info.destinationDistance / info.speed;

  const hours = Math.floor(totalHours);

  const minutes = Math.round((totalHours - hours) * 60);

  return `${hours} hours and ${minutes} minutes`;
}

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime);

//Series duration of my life
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function logOutSeriesText() {
  const totalLifespanMinutes = 80 * 365 * 24 * 60;
  let totalSeriesMinutes = 0;

  for (let i = 0; i < seriesDurations.length; i++) {
    const series = seriesDurations[i];

    const seriesMinutes =
      series.days * 24 * 60 + series.hours * 60 + series.minutes;
    totalSeriesMinutes += seriesMinutes;

    const percentage = (seriesMinutes / totalLifespanMinutes) * 100;

    console.log(`${series.title} took ${percentage.toFixed(3)}% of my life`);
  }

  const totalPercentage = (totalSeriesMinutes / totalLifespanMinutes) * 100;
  console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
}

logOutSeriesText();
