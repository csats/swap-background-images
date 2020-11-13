const avatarClassNames = ['avatar', 'avatar-placeholder', 'avatar-image'];
// totalImages has to correspond to the total number of images in '/images'
const totalImages = 7;

console.log('If you see this, we are ready to swap your images. Click the chrome extension to swap them out.');
const replace = () => {
  let allDivs = document.getElementsByTagName('div');
  for (divElem of allDivs) {
    if (divElem.style.backgroundImage && !avatarClassNames.includes(divElem.className)) {
      let r = 1 + Math.floor(Math.random() * totalImages);
      let file = `images/${r}.jpg`;
      let url = chrome.extension.getURL(file);
      divElem.style.backgroundImage = `url("${url}")`;
    }
  }
}
chrome.runtime.onMessage.addListener(replace);

// Another way of doing this where we wait for the page load and
// auto-replace all the images using the response from the API.
// // Let's hope the page load doesn't take more than 10s
// setTimeout(() => {
//   console.log("Now replacing all background-images.");
//   const allDivs = document.getElementsByTagName('div');
//   for (let i = 0; i < allDivs.length; i++) {
//     if (allDivs[i].style.backgroundImage && !avatarClassNames.includes(allDivs[i].className)) {
//       chrome.runtime.sendMessage({msg: 'image', index: i}, function({data, index}){
//         allDivs[index].style.backgroundImage = `url(${data.link})`;
//       });
//     }
//   }
// }, 10000);
