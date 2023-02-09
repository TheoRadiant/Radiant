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
const newTextDelay = 2000; // Delay between current and next text
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

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
const menuvisible = document.querySelector('.menuwrapper')
const navitem = document.querySelector('.navitem')

navitem.addEventListener('click', function(){
  menuvisible.classList.toggle("visible")
  menuBtn.classList.remove('open');
})

menuBtn.addEventListener('click', function(){
  menuvisible.classList.toggle("visible")
})
function scrollFunction1() {
  let e = document.querySelector(".card");
  e.scrollIntoView({
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


