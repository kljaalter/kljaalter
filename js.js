Year = [2008,2012,2013,2014,2015,2016,2017,2018,2019];
Count = 0;

setInterval(function() {
Count++
if (Count == 9) {
  Count = 0;
};

document.getElementById("fotomaand").src = "images/Foto_Van_De_Maand/" + Year[Count] + ".png";
}, 1500);
