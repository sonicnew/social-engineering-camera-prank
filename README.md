# Social Engineering Camera Prank (Educational Project)

This is a **social engineering-based prank web application** designed for **educational purposes only**. The site simulates a fun quiz game and requests access to the visitor’s webcam. If access is granted, the webcam captures a single image and sends it directly to a Telegram bot using the Telegram Bot API.

---

## ⚙️ Features

- Requests webcam permission via the browser.
- If permission is granted:
  - Captures a snapshot from the user's webcam.
  - Sends the image to your Telegram bot.
  - Starts a fake game or quiz.
- If permission is denied:
  - Informs the user that webcam access is required to play.
- Disables `F12`, right-click, and common debugging shortcuts to reduce code inspection.

---

## 🔧 Setup Instructions

1. Clone or upload the project to any web host (Glitch, Vercel, Netlify, or a paid host).

2. Go to your server-side script (`server.js` ) and set your Telegram bot credentials:

   ```javascript
   const TOKEN = "YOUR_TELEGRAM_BOT_TOKEN";
   const CHAT_ID = "YOUR_TELEGRAM_CHAT_ID";
   ```
3. Create a Telegram bot using [@BotFather](https://t.me/BotFather) and retrieve your token.

4. Use [https://api.telegram.org/bot<YourToken>/getUpdates](https://api.telegram.org/bot<YourToken>/getUpdates) to get your `chat_id` after sending a message to your bot.

---

## 🔒 Ethical Usage & Disclaimer

This project is created **strictly for cybersecurity awareness and educational demonstrations**.

> ⚠️ **The author does not encourage or support unauthorized use, spying, or any violation of privacy.**

You are solely responsible for how this code is used.  
**Do not deploy this project against individuals without their clear, informed consent.**

Using this application in a malicious context is unethical and may be illegal depending on your country’s laws.

---

## 📦 Technologies Used

- HTML, CSS
- JavaScript 
- Telegram Bot API

---
## 📁 File Notes

- `index.html`: Main prank interface.
- `server.js`

---

## ✅ Educational Goals

This project demonstrates how easily users may grant access to sensitive device features via **social engineering**. It is meant to raise awareness on:

- Browser-based camera permissions.
- API abuse and bot integration.
- Frontend-based attack simulations.
