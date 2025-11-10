(() => {
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
      title: "Noise-cancelling microphones",
      text: "Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience.",
      image: "images/nameofimage1.jpg",
      imagealt: "alternate text"
    },

    {
      title: "Comfortable fit",
      text: "Three pairs of ultra comfortable silicone tips are included. The tips create an acoustic seal that blocks outside audio and secures the earbuds in place.",
      image: "images/nameofimage2.jpg",
      imagealt: "alternate text"
    },

    {
      title: "360 AUDIO",
      text: "360 Audio places sound all around you, while Dolby Head Tracking™ technology delivers an incredible three-dimensional listening experience.",
      image: "images/nameofimage3.jpg",
      imagealt: "alternate text"
    },

    {
      title: "Ultra Fast Charging",
      text: "Charge your earbuds in 30 minutes or less with our hyper charging technology.",
      image: "images/nameofimage4.jpg",
      imagealt: "alternate text"
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
    imageElement.src = infoBox.image;
    imageElement.alt = infoBox.imagealt;

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

})();

// In this version, the event listeners use regular functions instead of arrow functions, so the "this" keyword inside the event listeners will refer to the DOM element that triggered the event.