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
const navItems = document.querySelectorAll('.navitem');

navItems.forEach(item => {
  item.addEventListener('click', scrollToSection);
});

function scrollToSection(event) {
  const section = document.querySelector(event.target.dataset.section);
  section.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
  });
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




     
   
   
   

   const navi=document.querySelector('.navbar')
   const menuvisible = document.querySelector('.menuwrapper')
   navi.addEventListener('click',function(){
    menuvisible.classList.remove("visible")
    menuBtn.classList.remove('open');
    menuOpen = false;
   })


const observerp = new IntersectionObserver(entries => {
 
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
    
      entry.target.classList.add('shown');
    } else {
      
      entry.target.classList.remove('shown');
    }
  });
});


const philosophyElements = document.querySelectorAll('.philosophy');

philosophyElements.forEach(element => {
  observerp.observe(element);
});





const observerdiv1 = new IntersectionObserver(entries => {
 
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
    
      entry.target.classList.add('shownd');
    } else {
      
      entry.target.classList.remove('shownd');
    }
  });
});


const philosophydiv1 = document.querySelectorAll('.philosophydiv1');

philosophydiv1.forEach(element => {
  observerp.observe(element);
});



const observerd = new IntersectionObserver(entries => {
  
  entries.forEach(entry => {
   
    if (entry.isIntersecting) {
     
      entry.target.classList.add('shownf');
    } else {
      
      entry.target.classList.remove('shownf');
    }
  });
});


const philosophyDiv2Elements = document.querySelectorAll('.philosophydiv2');


philosophyDiv2Elements.forEach(element => {
  observerd.observe(element);
});
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault(); 
    var form_data = $(this).serialize(); 
    $.ajax({
      type: 'POST',
      url: 'email.php',
      data: form_data,
      success: function() {
        $('#success-message').fadeIn(1000, function() {
          $(this).fadeOut(1000); 
        });
      },
      error: function() {
        alert('Error sending message'); 
      }
    });
  });
});

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const hacks = document.querySelectorAll('.hack, .headx, .joiner, .Philod, #lets  ');

const observerz = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const hack = entry.target;
    let interval = hack.dataset.interval;
    if(entry.isIntersecting) {
      let iteration = 0;
      
      clearInterval(interval);
        
      interval = setInterval(() => {
        hack.innerText = hack.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return hack.dataset.value[index];
            }
          
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");
        
        if(iteration >= hack.dataset.value.length){ 
          clearInterval(interval);
        }
        
        iteration += 1 ;
      }, 30);
      
      hack.dataset.interval = interval;
      observerz.unobserve(hack);
    } else {
      clearInterval(interval);
      hack.innerText = hack.dataset.value;
      delete hack.dataset.interval;
      observerz.observe(hack);
    }
  });
}, {
  threshold: 0.5
});

hacks.forEach(hack => {
  observerz.observe(hack);
});
const blob = document.getElementById("blob");
const colors = {
  red: '#FF0000',
  blue: '#0000FF',
  yellow: '#FFFF00'
};

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

window.addEventListener('scroll', () => {
  const scroll = window.pageYOffset;
  if (scroll >= 0 && scroll <= 700) {
    blob.style.background = 'linear-gradient(to right, white, red)';
    blob.classList.add('transition');
  } else if (scroll >= 700 && scroll <= 1800) {
    blob.style.background = 'linear-gradient(to right, white, white)';
    blob.classList.remove('transition');
  } else if (scroll >= 1800 && scroll < 2900) {
    blob.style.background = 'linear-gradient(to right, white, red)';
    blob.classList.remove('transition');
  } else if (scroll >= 2900 && scroll < 4000) {
    blob.style.background = 'linear-gradient(to right, aquamarine, mediumpurple)';;
    blob.classList.add('transition');
  } 
});
var body = document.getElementsByTagName('body')[0];

body.style.backgroundColor = 'black';







