buttonClicked = (tab) => {
  chrome.tabs.sendMessage(tab.id, {text: 'hi'});
}
chrome.browserAction.onClicked.addListener(buttonClicked);

// The commented code below is another way of doing this.
// It helps pull images from an API when a message is triggered from content.js

// chrome.runtime.onMessage.addListener(function(message, sender, senderResponse) {
//   console.log(message);
//   if(message.msg === "image"){
//     fetch('https://some-random-api.ml/img/red_panda')
//           .then(response => response.text())
//           .then(data => {
//             let dataObj = JSON.parse(data);
//             senderResponse({data: dataObj, index: message.index});
//           })
//           .catch(error => console.log("error", error))
//       return true;  // Will respond asynchronously.
//   }
// });
