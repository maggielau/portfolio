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
    }, 2800)
}


// Random pixel animated background
const heroBg = document.querySelector('.hero-bg');
const colors = ["#FBAD18", "#F0609E", "#F04E32", "#3B74BA", "#000000"];

const numPixels = 70;
const pixels = [];

for (let i = 0; i < numPixels; i++) {
  let pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.style.background = colors[Math.floor(Math.random() * colors.length)];
  pixel.style.left = `${Math.floor(Math.random() * 90)}vw`;
  pixel.style.top = `${Math.floor(Math.random() * 90)}vh`;
  pixel.style.transform = `scale(${Math.random()})`;
  pixel.style.width = `${Math.random()}em`;
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

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
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