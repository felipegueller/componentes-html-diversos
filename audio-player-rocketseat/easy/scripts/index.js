const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h5");
const artist = document.querySelector(".artist");
const audio = document.querySelector(".card-content audio");

const data = [
  {
    title:
      "Como começei a programar / Por que criamos a Rocketseat / Nossa Stack",
    artist: "Diego Fernandes",
    cover: "files/como-comecei.jpg",
    file: "files/como-comecei.mp3",
  },
];

cover.style.background = `url('${data[0].cover}') no-repeat center center / cover`;
title.innerText = data[0].title
artist.innerText = data[0].artist
audio.src = data[0].file