// const translations = {
//     en: {
//         home : 'Home',
//         about : 'About', 
//         menu : 'Menu',
//         gallery : 'Gallery',
//         contact : 'Contact',
//         selectlanguage : 'Welcome to Pizza Infinity∞ Restaurant',
//         arabe : 'Arabe',
//         english : 'English',
        
       
//     },
//     ar : {
//         home : 'مـنـزل',
//         about : 'مـعـلـومـات', 
//         menu : 'قـائـمـة طـعـام',
//         gallery : 'صـالـة عـرض',
//         contact : 'اتـصـل',
//         selectlanguage : 'مـرحـبـا بـكـم فـي Pizza Infinity∞ مـطـعـم',
//         arabe : 'عـربـية',
//         english : 'انـقـلـيـزيـة',
        

//     },
// };
// const languageSelector = document.querySelector('select');
// languageSelector.addEventListener("change", (event) => {
//     setLanguage(event.target.value);
// });
// const setLanguage = (language) => {
//     const elements = document.querySelectorAll("[data-il8n]");
//    elements.forEach((element) => {
// const translationKey = element.getAttribute('data-il8n');
// element.textContent = translations[language][translationKey];

//    })
// };



let buttonClickMe = document.getElementById ("click"); 
let imgt = document.getElementById("img1");
let imgr = document.getElementById("img2");
let p1 = document.getElementById("iLoveYou");
let about = document.getElementById("lovekarma");
let wd = document.getElementById("wdy")
let bt = document.getElementById("btw")


wd.style.display="none"
p1.style.display ="none" ;


about.addEventListener("click", click1)

 buttonClickMe.onclick =  function(){
    
    imgr.style.display ="flex"; 

    imgt.style.display ="flex"; 

}



btw.onclick = function(){

    wdy.style.display="block"
}
function click1() {
    p1.style.display="block"
}


bt.onclick = function(){ 
     wd.style.display="block" };




