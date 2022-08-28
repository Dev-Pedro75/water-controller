const cupWater = document.querySelector("#cup-water");
let waterLiter = 0;
let dayLiter = 2000;
let glassSize = 250;
let glassNumber = dayLiter / glassSize;
let pixelNumber = 0;
const selectDayLiter = document.querySelector("#selectDayLiter");
const selectGlassSize = document.querySelector("#selectGlassSize");

selectDayLiter.addEventListener("change", () => {
  pixelNumber = 0;
  waterLiter = 0;
  dayLiter = selectDayLiter.value;
  changeMl();
  glassNumber = dayLiter / glassSize;
});

selectGlassSize.addEventListener("change", () => {
  pixelNumber = 0;
  waterLiter = 0;
  glassSize = Math.abs(selectGlassSize.value);
  changeMl();
  glassNumber = dayLiter / glassSize;
});

function addWater() {
  if (pixelNumber >= 450) {
    pixelNumber = 450;
    changeMl();
    return;
  }
  waterLiter += glassSize;
  pixelNumber += 450 / glassNumber;
  changeMl();
}

function removeWater() {
  if (pixelNumber <= 0) {
    pixelNumber = 0;
    changeMl();
    return;
  }

  waterLiter -= glassSize;
  pixelNumber -= 450 / glassNumber;
  changeMl();
}

function changeMl() {
  cupWater.style.height = `${pixelNumber}px`;
  cupWater.innerHTML = `${waterLiter}ml`;
}
