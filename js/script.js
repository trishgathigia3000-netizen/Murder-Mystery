/* simple password redirect - case-insensitive */
const mapping = {
  "avery lux":"avery.html",
  "rowan vale":"rowan.html",
  "emery vale":"emery.html",
  "samir quinn":"samir.html",
  "jules mercer":"jules.html",
  "taylor cho":"taylor.html",
  "nico park":"nico.html",
  "casey bright":"casey.html",
  "remy lake":"remy.html",
  "alex finch":"alex.html",
  "river sage":"river.html",
  "morgan hale":"morgan.html",
  "sky rowan":"sky.html",
  "dev ortega":"dev.html",
  "kai monroe":"kai.html",
  "quinn delaire":"quinn.html",
  "harper wynn":"harper.html",
  "eden larke":"eden.html",
  "silas dray":"silas.html",
  "liora vance":"liora.html",
  "sasha mirelle":"sasha.html"
};

document.getElementById('enterBtn').addEventListener('click', ()=> {
  const val = document.getElementById('password').value.trim().toLowerCase();
  const err = document.getElementById('error');
  if(!val){ err.textContent = "Enter a character name."; return; }
  if(mapping[val]) { window.location.href = mapping[val]; }
  else { err.textContent = "Name not recognized. The gallery doors remain closed."; }
});

/* Guest preview - opens Avery by default */
document.getElementById('previewBtn').addEventListener('click', ()=> {
  window.location.href = 'avery.html';
});