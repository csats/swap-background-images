const avatarClassNames = ['avatar', 'avatar-placeholder', 'avatar-image'];
// totalImages has to correspond to the total number of images in '/images'
const totalImages = 7;

console.log('If you see this, we are ready to swap your images. Click the chrome extension to swap them out.');

// Another way of doing this where we wait for the page load and
// auto-replace all the images using the response from the API.
// Let's hope the page load doesn't take more than 10s
function swapBackgroundImages() {
  setTimeout(() => {
    console.log("Now replacing all background-images.");
    const allDivs = document.getElementsByTagName('div');
    for (let i = 0; i < allDivs.length; i++) {
      if (allDivs[i].style.backgroundImage && !avatarClassNames.includes(allDivs[i].className)) {
          const r = 1 + Math.floor(Math.random() * totalImages);
          const file = `images/${r}.jpg`;
          const url = chrome.extension.getURL(file);
          allDivs[i].style.backgroundImage = `url(${url})`;
      }
    }
  }, 10000);
}

swapBackgroundImages();

let url = document.location.toString();
// Everytime the URL changes, rerun swapBackgroundImages()
document.querySelector('html').addEventListener('DOMNodeInserted', function(ev){
  const new_url = document.location.toString();
  if (url == new_url) return; // already checked or processed
  url = new_url;

  swapBackgroundImages(); // run when URL changes
});
