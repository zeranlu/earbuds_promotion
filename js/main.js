(() => {
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
      title: "Customizable Button",
      text: "You can assign custom button functions to earch individual earbud!",
      image: "images/hotspot_logos-01.png",
    },

    {
      title: "Lightning Fast Charging",
      text: "Charge your earbuds in 30 minutes or less with our hyper charging technology.",
      image: "images/hotspot_logos-02.png",
    },

    {
      title: "Volume Wheel",
      text: "Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience.",
      image: "images/hotspot_logos-03.png",
    },

    {
      title: "Stability Tip",
      text: "Three pairs of ultra comfortable silicone tips are included. The tips create an acoustic seal that blocks outside audio and secures the earbuds in place.",
      image: "images/hotspot_logos-04.png",
    },

    {
      title: "High Quality Sound",
      text: "360 Audio places sound all around you, while Dolby Head Tracking™ technology delivers an incredible three-dimensional listening experience.",
      image: "images/hotspot_logos-05.png",
    }
  ];

// FUNCTIONS

function loadInfo() {
  infoBoxes.forEach((infoBox, index) => {
    // console.log(index+1)
    
    // selected will be the infoBox ono ur page, IE hotspot-1, etc
    let selected = document.querySelector(`#hotspot-${index+1}`);
    console.log(selected);

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



// GREENSOCK ANIMATION

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