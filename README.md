# CSATS: swap-background-images
## Overview
* Surgery images (thumbnails) in csats.com can sometimes not pleasant to look at.
* This extension solves helps solve that issue by replacing all the thumbnail images in videos with copyright-free images of pandas or turtles.
* If you are staring at the these images all day, or doing demos where you'd like to hide the thumbnail image, enabling this extension _(for chrome)_ or running this greasemonkey script _(for firefox)_ will help with aesthetics.

## Notes:
* Supported browsers are Mozilla Firefox and Google Chrome
* Both the browsers have different steps to make this work.
* Both of these have the following features:
  * This swaps background-images throughout the webpage as long as their classes are not 'avatar'.
  * It's confirgured to work on specific websites - localhost, stage, experimental, and prototype.
  * Once the extension/script is enabled, you may need to reload the page if it is already open.
  * After loading/reloading, you have to wait **10s** for the images to swap.
  * Except in `prototype`, if navigated to another webpage in the same site, you have to wait 10s for the images to swap. This is because we need the DOM to load completely before the swap.
  * The assumption here is that our webpages take `< 10s` to load completely. Of course, sometimes, because of poor internet connection/servers being down it may take longer to load the page. At this time, try your luck with _refreshing the page_.

# Mozilla Firefox - greasemonkey script
## Steps
1. Open Mozilla Firefox and paste https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/
2. Click `+ Add to Firefox` => click `Add` => click `Okay, Got It`.
3. Click the 'monkey' icon on the top-right corner of your address bar in Firefox.
4. Click `New User Script`. This will open a new window titles `Unnamed Script ...`
5. Copy the contents from https://github.com/csats/swap-background-images/blob/main/greasemonkey/background-image-swapper.js
6. Delete all the default content in the "Unnamed Script ..." and paste the copied content.
7. Click the save icon next to the name "CSATS background-image swapper" OR press cmd+s (for mac) and ctrl+s (for windows).
8. Navigate to the desired website - localhost (if running locally), stage, prod, or protoype. You'll see the images swap after 10s.
9. Inital refresh maybe required if the webpage was open before starting the script

# Google Chrome - Chrome Extention

## Steps to run locally
1. Open Google Chrome
2. Go to https://github.com/csats/swap-background-images/archive/main.zip => save the zip file. It should download as `swap-background-images-main.zip`.
3. Unzip/extract the zip file.
3. Open a new tab in Chrome and navigate to `chrome://extensions/`
4. Toggle `Developer Mode` **ON**. It's on the top right corner of the webpage.
5. Click `Load Unpacked` and select the extracted folder and click "open/ok". Make sure the toggle for this loaded extension is **on** (it should be on by default).
6. Click the 'puzzle-piece-looking icon' for extensions in the top-right section of the address bar.
7. Find `CSATS: background-image-swapper` and click the 'pin' icon to pin it.
8. Navigate to the desired website - localhost (if running locally), stage, prod, or protoype. If the page is open already, refresh it.
10. Wait 10s and images will be swapped.

# Screenshots
![alt text](https://github.com/csats/swap-background-images/blob/main/screenshots/Chrome-CSATS-background-image-swapper-1.png)

![alt text](https://github.com/csats/swap-background-images/blob/main/screenshots/Firefox-CSATS-background-image-swapper-1.png)
