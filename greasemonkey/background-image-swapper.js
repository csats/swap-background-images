// ==UserScript==
// @name     CSATS background-image swapper
// @version  1
// @grant    none
// @match http://localhost:3200/*
// @match http://localhost:4000/*
// @match https://stage-user.csats.com/*
// @match https://stage-admin.csats.com/*
// @match https://experimental-user.csats.pizza/*
// @match https://experimental-admin.csats.pizza/*
// @match https://prototype.ux.csats.pizza/*
// ==/UserScript==

// Notes:
// 1. The assumption is that it does NOT take > 10s to load the webpage
// 2. It swaps background-images 10s after the url is changed 
// 3. It works on specific websites - localhost, stage, experimental, prototype


// Don't replace avatars
const avatarClassNames = ['avatar', 'avatar-placeholder', 'avatar-image'];
const totalImages = 10;
const imageUrls = [];

// Fetch 10 copyright-free images of panda from some-random-api.ml
for(let i = 0; i < totalImages; i++) {
  fetch('https://some-random-api.ml/img/panda')
    .then(response => response.text())
    .then(data => {
	    let dataObj = JSON.parse(data);
  	  imageUrls.push(dataObj.link);
  	})
    .catch(error => console.log("error", error))
}

// This function finds all the divs with a background-image that are
// not avatars and replaces them with the image urls in imageUrls
function swapBackgroundImages() {
  // We want to give the webpage 10s to load completely before the swap
  setTimeout(() => {
    let allDivs = document.getElementsByTagName('div');
    for (divElem of allDivs) {
      if (divElem.style.backgroundImage && !avatarClassNames.includes(divElem.className)) {
        let r = Math.floor(Math.random() * totalImages);
        divElem.style.backgroundImage = `url("${imageUrls[r]}")`;
      }
    }
  }, 10000);
}

swapBackgroundImages(); // run on initial page load

let url = document.location.toString();
// Everytime the URL changes, rerun swapBackgroundImages()
document.querySelector('html').addEventListener('DOMNodeInserted', function(ev){
  const new_url = document.location.toString();
  if (url == new_url) return; // already checked or processed
  url = new_url;

  swapBackgroundImages(); // run when URL changes
});
