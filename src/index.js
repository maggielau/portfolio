const heroLetter = document.querySelectorAll('.hero-letter');

//remove loading fade up animation and add wobble to hero graphic
window.onload = function(){
    setTimeout(function(){
        heroLetter.forEach(letter => {
            letter.classList.remove('hero-fadeup');   
            letter.classList.add('hvr-wobble-to-bottom-right');   
        });
        for (let i=1; i <= 6; i++) {
            document.getElementById(`hero${i}`).style["animation-delay"] = "0ms";
        }
    }, 1800)
}


//toggle switch for dark/light themes
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

//check if user has default system settings for dark mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleSwitch.checked = true;
}

//save theme settings on local storage
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

let buttons = document.querySelectorAll(".nav-button");

//Toggle between adding and removing the "responsive" class to nav buttons for mobile
function mobileNav() {
    console.log(buttons);
    if (buttons[1].className === "nav-button nav-shutter") {
        buttons[0].className += " responsive";
        buttons[1].className += " responsive";
        buttons[2].className += " responsive";
    } else {
        buttons[0].className = "nav-button nav-shutter";
        buttons[1].className = "nav-button nav-shutter";
        buttons[2].className = "nav-button nav-shutter";
    }
}

//Close mobile nav when clicked
document.addEventListener("click", () => {
    if (buttons[0].classList.contains("responsive")) {
        buttons[0].classList.remove("responsive");
        buttons[1].classList.remove("responsive");
        buttons[2].classList.remove("responsive");
       }
    }, true);



// Random pixel animated background
const heroBg = document.querySelector('.hero-bg');
const colors = ["#FBAD18", "#F0609E", "#F04E32", "#3B74BA", "#CCC"];

const numPixels = 70;
const pixels = [];

for (let i = 0; i < numPixels; i++) {
  let pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.style.background = colors[Math.floor(Math.random() * colors.length)];
  pixel.style.left = `${Math.floor(Math.random() * 90)}vw`;
  pixel.style.top = `${Math.floor(Math.random() * 90)}vh`;
  pixel.style.transform = `scale(${Math.random()})`;
  pixel.style.width = `${Math.random()-.2}em`;
  pixel.style.height = pixel.style.width;
  
  pixels.push(pixel);
  heroBg.append(pixel);
}

// Keyframes
pixels.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };
  console.log(to);

  var computedStyle = window.getComputedStyle(document.documentElement);
  var fontSize = computedStyle.fontSize; 
  var remWidth = document.body.clientWidth / parseInt(fontSize); 
  console.log(remWidth);

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x-1}vw, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 3000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});