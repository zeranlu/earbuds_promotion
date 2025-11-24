(() => {



    gsap.registerPlugin(ScrollToPlugin);

    const navLinks = document.querySelectorAll("#menu nav ul li a");
    
    navLinks.forEach((navLink) => {
        navLink.addEventListener("click", scrollLink);
    })

    function scrollLink(event) {
        // console.log("scrollLink function called");
        event.preventDefault();
        // console.log(event.currentTarget.hash);
        let selected = event.currentTarget.hash;
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: `${selected}`,
                offsetY: 100,
                ease: "power2.out"
            }
        });
    }  



// HAMBURGER MENU ---------------------------------
const menu = document.querySelector("#menu");
const hamburger = document.querySelector("#hamburger");
const closeButton = document.querySelector("#close");
const menuLinks = document.querySelectorAll("#menu nav ul li a");

function toggleMenu() {
  menu.classList.toggle("open");
  console.log("class toggled")
};

closeButton.addEventListener("click", toggleMenu);
hamburger.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
  console.log("link clicked");
});



// Hero Image Gallery JS -------------------------
const galleryImages = [
  "images/hero-images/earbud-promo-photo-1.png",
  "images/hero-images/earbud-promo-photo-2.png",
  "images/hero-images/earbud-promo-photo-3.png",
  "images/hero-images/earbud-promo-photo-4.png",
  "images/hero-images/earbud-promo-photo-5.png"
];

let imageIndex = 0;
const heroImage = document.querySelector(".hero-image");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

heroImage.src = galleryImages[imageIndex];

function animateSlide(newIndex, direction) {
  const offset = direction * 100;

  gsap.to(heroImage, {
    xPercent: -offset,
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      imageIndex = newIndex;
      heroImage.src = galleryImages[imageIndex];
      heroImage.style.transform = `translateX(${offset}%)`;

      gsap.to(heroImage, {
        xPercent: 0,
        opacity: 1,
        duration: 0.5
      });
    }
  });
};

nextButton.addEventListener("click", () => {
  let newIndex = imageIndex + 1;
  if (newIndex >= galleryImages.length) {
    newIndex = 0;
  }
  animateSlide(newIndex, 1);
});

prevButton.addEventListener("click", () => {
  let newIndex = imageIndex - 1;
  if (newIndex < 0) {
    newIndex = galleryImages.length - 1;
  }
  animateSlide(newIndex, -1);
});



// Scrolling Sequence JS ---------------------------------

const canvas = document.querySelector("#scroller-animation");
const context = canvas.getContext("2d");

canvas.width = 1920;
canvas.height = 1080;

const frameCount = 782;
const images = [];

const buds = {
  frame: 0
};

for (let i=0; i<frameCount; i++) {
  const img = new Image();
  img.src = `images/scroller-images/earbud_video_sequence_${(i).toString().padStart(5, '0')}.webp`;

  // console.log(`images/scroller-images/earbud_video_sequence_${(i).toString().padStart(5, '0')}.webp`);

  images.push(img);
};

// console.log(images);

gsap.to(buds, {
  frame: frameCount,
  snap: "frame",
  scrollTrigger: {
    trigger: "#scroller-animation",
    pin: true,
    scrub: 2,
    start: "top top",
    end: "top+=4000 bottom",
    markers: true
  },
  onUpdate: render
});

images[0].addEventListener("load", render);

function render() {
  // console.log(buds.frame);
  context.clearRect(0,0, canvas.width, canvas.height);
  context.drawImage(images[buds.frame], 0, 0);
};



// AR Hotspot JS ---------------------------------

  const hotspots = document.querySelectorAll(".Hotspot");
  const infoBoxes = [
    {
      title: "Customizable Button",
      text: "You can assign custom button functions to earch individual earbud!",
      image: "images/AR-images/hotspot_logos-01.png",
    },

    {
      title: "Lightning Fast Charging",
      text: "Charge your earbuds in 30 minutes or less with our hyper charging technology.",
      image: "images/AR-images/hotspot_logos-02.png",
    },

    {
      title: "Volume Wheel",
      text: "Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience.",
      image: "images/AR-images/hotspot_logos-03.png",
    },

    {
      title: "Stability Tip",
      text: "Three pairs of ultra comfortable silicone tips are included. The tips create an acoustic seal that blocks outside audio and secures the earbuds in place.",
      image: "images/AR-images/hotspot_logos-04.png",
    },

    {
      title: "High Quality Sound",
      text: "360 Audio places sound all around you, while Dolby Head Tracking™ technology delivers an incredible three-dimensional listening experience.",
      image: "images/AR-images/hotspot_logos-05.png",
    }
  ];

// FUNCTIONS

function loadInfo() {
  infoBoxes.forEach((infoBox, index) => {
    // console.log(index+1)
    
    // selected will be the infoBox ono ur page, IE hotspot-1, etc
    let selected = document.querySelector(`#hotspot-${index+1}`);
    // console.log(selected);

    //lets create an h2
    const titleElement = document.createElement('h2');
    // lets populate the h2
    titleElement.textContent = infoBox.title;

    // lets create the p
    const textElement = document.createElement('p');
    // lets populate the p
    textElement.textContent = infoBox.text;

    // lets create an image
    const imageElement = document.createElement('img');
    // lets populate the image
    imageElement.classList.add("hotspot-icon");
    imageElement.src = infoBox.image;
    imageElement.alt = " ";

    selected.appendChild(imageElement);
    selected.appendChild(titleElement);
    selected.appendChild(textElement);
  });
};

loadInfo();

   function showInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 1 });
  }

  function hideInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 0 });
  }
  
 hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });



// X-RAY SLIDER JS ---------------------------------

const divisor = document.querySelector("#divisor");
const slider = document.querySelector("#slider");

function moveDivisor() {
  divisor.style.width = `${slider.value}%`;
};

function resetSlider() {
  slider.value = 50;
};

slider.addEventListener("input", moveDivisor);

// GREENSOCK ANIMATION ---------------------------------

// If there are any initailly visible hotspots on my AR model, I can make it pulse to show interactivity.
if (document.querySelectorAll(".Hotspot")) {
  gsap.from(".Hotspot", {
    duration: 1, scale: 2
  });
};


// Animation for a quick pulsing animation when hover mouse over the hotspot svgs, this promotes interactivity.
const hotspotHover = document.querySelectorAll('.Hotspot');

hotspotHover.forEach(hotspot => {
  
  // Using forEach, I'm making a new timeline for each hotspot (pre-hover) that is paused
  const tl = gsap.timeline({paused: true});
  
  tl.to(hotspot, {
    scale: 1.15, duration: 0.5 
    // onComplete to trigger subsequent bounce animation ASK ??
  });
  
  tl.to(hotspot.querySelectorAll('img'), {
    scale: 1.5, duration: 1.5, ease: "bounce.out"
  });

  hotspot.addEventListener('mouseenter', () => tl.play());
  hotspot.addEventListener('mouseleave', () => tl.reverse());
});

})();

// In this version, the event listeners use regular functions instead of arrow functions, so the "this" keyword inside the event listeners will refer to the DOM element that triggered the event.