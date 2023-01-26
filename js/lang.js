
const langArr = {
    "unit" :  {
    },
        
    "logo":{
        "ua": "Джон 2.0",
        "en": "John 2.0"
  
     },

    "innerButton":{
        "ua": "Завантажити резюме",
        "en": "Download Resume"
  
     },
     "innenTitle":{
        "ua": "Привіт, я Джон Креативний технолог",
        "en": "Hi, I am John Creative Technologist"

     },

     "Recent":{
        "ua": "Останні повідомлення",
        "en": "Recent posts"
     },
     "all":{
        "ua": "Подивитись,все",
        "en": "View all"
     },

     "cartMaking":{
        "ua": "Створення системи дизайну з нуля",
        "en": "Making a design system from scratch"
     },

     "cartPixel":{
        "ua": "Створення піксельних піктограм у Figma",
        "en": "Creating pixel perfect icons in Figma"
     },

     "featured":{
         "ua": "Рекомендовані",
         "en": "Featured"
     },

    



     "crtDataOne":{
        "ua": "12 лютого 2020 р",
        "en": "12 Feb 2020"
     },

     "crtDataTwo":{
        "ua": "12 лютого 2020 р",
        "en": "12 Feb 2020"
     },

     "Designing":{
      "ua": "Проектування інформаційних панелей",
      "en": "Designing Dashboards"
   },

   "Vibrant":{
      "ua": "Яскраві портрети 2020 року",
      "en": "Vibrant Portraits of 2020"
   },

   "Days":{
      "ua": "36 днів малаяламського типу",
      "en": "36 Days of Malayalam type"
   },

   




    
   "footer":{
      "ua": "Linkedin Copyright ©2023 Усі права захищено",
      "en": "Linkedin Copyright ©2023 All rights reserved "
    }
 }
 
 
 const select = document.querySelector('select');
 const allLang = ['en', 'ru', 'ua', 'tw'];
 select.addEventListener('change', changeURLLanguage);
 
 
 
 // перенаправить на url с указанием языка
 function changeURLLanguage() {
   let lang = select.value;
   location.href = window.location.pathname + '#' + lang;
   location.reload();
}
 
function changeLanguage() {
   let hash = window.location.hash;
   hash = hash.substr(1);
   console.log(hash);
   if (!allLang.includes(hash)) {
      location.href = window.location.pathname + '#en';
      location.reload();
  }
    select.value = hash;
    document.querySelector('title').innerHTML = langArr['unit'][hash];
    //document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
 
    }
 }
 
 changeLanguage();
    