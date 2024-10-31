"use strict";

const languages = $("#tillar");
const link = $$("ul li a");

// languages.addEventListener('change',(event) => {
//     console.log(event.target.value);
//     console.log(lang[event.target.value]);
    
//     link[0].textContent = lang[event.target.value].home;
//     link[1].textContent = lang[event.target.value].usage;
//     link[2].textContent = lang[event.target.value].install;
//     link[3].textContent = lang[event.target.value].about;
//     link[4].textContent = lang[event.target.value].service;
//     link[5].textContent = lang[event.target.value].contact;

// });

languages.addEventListener('change',(event) => {
    localStorage.setItem('lang', JSON.stringify(lang[event.target.value]));
  
    setLanguage();
});

function setLanguage(){
   const gotLanguages = JSON.parse(localStorage.getItem("lang"));

   link[0].textContent = gotLanguages.home;
   link[1].textContent = gotLanguages.usage;
   link[2].textContent = gotLanguages.install;
   link[3].textContent = gotLanguages.about;
   link[4].textContent = gotLanguages.service;
   link[5].textContent = gotLanguages.contact;
};

setLanguage();

