# CSATS: swap-background-images
* This swaps background-images throughout the webpage as long as their classes are not 'avatar'.
* There are two ways to use this depending on your browser.
* Supported browsers are Mozilla Firefox and Google Chrome

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
9. Inital refresh maybe required.

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
8. Navigate to the desired website - localhost (if running locally), stage, prod, or protoype.
9. Click on this extension icon (it should just have the letter `C`) next to the puzzle-piece-looking icon.
10. Images will be swapped.
11. Step 9 must be repeated for every URL if you want to swap images.
12. Refresh may be required.

