const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});


const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["RADIANT", "CREATIVE", "INSPIRED BY YOU", "YOUR BEST CHOICE"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000; 
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { 
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});



menuBtn.addEventListener('click', function(){
  menuvisible.classList.toggle("visible")
})
function scrollFunction1() {
  let e = document.querySelector(".joiner");
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
  }
  );
  
}
function scrollFunction2() {
  let f = document.querySelector(".team");
  f.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
  }
  );
  
}
const observer = new IntersectionObserver ((entries)=> {
  entries.forEach((entry) =>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  })
});
const observers = new IntersectionObserver ((entries)=> {
  entries.forEach((entry) =>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('shows');
    }else{
      entry.target.classList.remove('shows');
    }
  })
});
const observerss = new IntersectionObserver ((entries)=> {
  entries.forEach((entry) =>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('showss');
    }else{
      entry.target.classList.remove('showss');
    }
  })
});

const hiddencard = document.querySelectorAll('.scrollhidden');
hiddencard.forEach((el) => observer.observe(el));

const hiddenjoin = document.querySelectorAll('.joiner');
hiddenjoin.forEach((el) => observers.observe(el));

const hiddenjoins = document.querySelectorAll('.oursrvc');
hiddenjoins.forEach((el) => observerss.observe(el));


var body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = 'black';


    
    window.onscroll = function (event) {
        var scroll = window.pageYOffset;
        if (scroll < 300) {
           
           
            body.style.backgroundColor = 'black';
         } else if (scroll >= 500 && scroll < 1900) {
            
            body.style.backgroundColor = 'white';
        } 
        else if (scroll >= 1900 && scroll < 3000) {
           
            body.style.backgroundColor = 'black';
        }
        else if (scroll >= 3360 && scroll < 4440) {
           
           body.style.backgroundColor = 'yellow';
       }
      }

     
   
   
   
   const buttonshow = document.querySelector('.learnmoreteam')
   const overlayR = document.querySelector('.rightoverlay')
   const overlayL = document.querySelector('.leftoverlay')
   const closeR = document.querySelector('.closeright')
   const closeL = document.querySelector('.closeleft')

   buttonshow.addEventListener('click' , function(){
    overlayR.classList.add('showover')
    overlayL.classList.add('showoverl')
   })
   closeL.addEventListener('click', function(){
    overlayL.classList.remove('showoverl')
   })

   closeR.addEventListener('click', function(){
    overlayR.classList.remove('showover')
   })

   const navi=document.querySelector('.navbar')
   const menuvisible = document.querySelector('.menuwrapper')
   navi.addEventListener('click',function(){
    menuvisible.classList.remove("visible")
    menuBtn.classList.remove('open');
   })