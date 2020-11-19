# CSATS: swap-background-images
* This swaps background-images throughout the webpage as long as their classes are not 'avatar'.
* Supported browsers are Mozilla Firefox and Google Chrome
* There are two ways to use this in Google Chrome and one way in Mozilla Firefox.
* Both of these have the following features:
  * It's confirgured to work on specific websites - localhost, stage, experimental, and prototype.
  * Once the extension/script is enabled, you may need to reload the page if it is already open.
  * After loading/reloading, you have to wait 10s for the images to swap.
  * Except in `prototype`, if navigated to another webpage in the same site, you have to wait 10s for the images to swap. This is because we need the DOM to load completely before the swap.
  * The assumption here is that our webpages take < 10s to load completely. Of course, sometimes, because of poor internet connection/servers being down it may take longer to load the page. At this time, try your luck with refreshing the page.

# Mozilla Firefox - greasemonkey script
## Steps
1. Open Mozilla Firefox and paste https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/
2. Click '+ Add to Firefox' => 'Add' => 'Okay, Got It'.
3. Click on the 'monkey' icon on the top-right corner of your address bar in Firefox.
4. Click 'New User Script'. This will open a new window titles "Unnamed Script ..."
5. Copy the contents from https://github.com/csats/swap-background-images/blob/main/greasemonkey/background-image-swapper.js
6. Delete all the default content in the "Unnamed Script ..." and paste the copied content.
7. Click the save icon next to the name "CSATS background-image swapper" OR press cmd+s (for mac) and ctrl+s (for windows).
8. Navigate to the desired website - localhost (if running locally), stage, prod, or protoype. You'll see the images swap after 10s.
9. Inital refresh maybe required if the webpage was open before starting the script

# Google Chrome - tampermonkey
1. Open Google Chrome and paste https://chrome.google.com/webstore/search/greasemonkey?hl=en
2. Click `Tampermonkey` => click `Add to Chrome` => click `Add Extension`
3. If it open a new tab with a URL like https://www.tampermonkey.net/index.php?version=4.11&ext=dhdg&updated=true , you can close this new tab.
4. Click the puzzle-piece-looking icon for extensions in the top-right section of the address bar.
5. Find `Tampermonkey` and click the 'pin' icon to pin it.
6. Click the newly-pinned `Tampermoney` icon => Ensure it's enabled (or click `Enabled` to enable it) => click `Create a new script...`. This will open a new tab with an editor.
7. Delete all the contents of this new editor, and copy all the contents of the file https://github.com/csats/swap-background-images/blob/main/greasemonkey/background-image-swapper.js and paste it.
8. Cmd+s (if mac)/Ctrl+s (if windows)/ click File => click Save to save this newly created script.
9. In the same tab, after saving it, you will see a table with this UserScript named `CSATS background-image swapper`. Verify that this script in enabled/enable it.
10. Navigate to the desired website - localhost (if running locally), stage, prod, or protoype. You'll see the images swap after 10s.
11. Inital refresh maybe required if the webpage was open before starting the script.

# Google Chrome - Chrome Extention

# IMPORTANT: The extension is currently pending review. I will update the docs once it's published. Meanwhile, the steps below will help you run it locally.

# Steps to run locally
1. Open Google Chrome
2. Go to https://github.com/csats/swap-background-images => "Code" => "Download Zip". It should download as `swap-background-images-main.zip`.
3. Unzip/extract the zip file.
3. Open a new tab and navigate to chrome://extensions/
4. Toggle "Developer Mode" ON. It's on the top right corner of the webpage.
5. Click "Load Unpacked" and select the extracted folder and click open/ok. Make sure the toggle for this loaded extension is on (it should be on by default).
6. Click the puzzle-piece-looking icon for extensions in the top-right section of the address bar.
7. Find `CSATS: background-image-swapper` and click the 'pin' icon to pin it.
8. Navigate to the desired website - localhost (if running locally), stage, prod, or protoype. If the page is open already, refresh it.
10. Wait 10s and images will be swapped.
