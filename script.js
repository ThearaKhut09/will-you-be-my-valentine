"use strict";

const tontonGifs = [
  "https://media.tenor.com/TUVAE2M_wz4AAAAi/chubby-tonton.gif",
  "https://media.tenor.com/pZk_U5JVWzUAAAAi/tonton-friends-tonton.gif",
  "https://media.tenor.com/Jkha__Yjf0oAAAAi/sad-depression.gif",
  "https://media.tenor.com/U0OPHZokzkUAAAAi/what-seriously.gif",
  "https://media.tenor.com/WKXMmSk3JJsAAAAi/chubby-tonton.gif",
  "https://media.tenor.com/ZHWV13jliTAAAAAi/chubby-tonton.gif",
];

const title = document.querySelector(".title");
const btnContainer = document.querySelector(".buttons");
const yesBtn = document.querySelector(".btn-yes");
const noBtn = document.querySelector(".btn-no");
const img = document.querySelector(".img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;
let noButtonSize = 1;
let yesButtonSize = 1;

yesBtn.addEventListener("click", () => {
  title.innerHTML = "I miss you Dany! 💗";
  btnContainer.classList.add("hidden");
  changeImage("yes");
  displayReadButton("បងពិតជានឹកដល់អូនខ្លាំងណាស់។ សង្ឃឹមថាអូននិងបានអានសារមួយនេះ ទោះបីជាពួកយើងមិនមែនជាអ្វីនិងគ្នា តែបងចង់និយាយពាក្យថានឹកទៅអូន ហើយក៏សង្ឃឹមថាអូននិងសុខសប្បាយ។ ជូនពរឲ្យអូនមានសុខភាពល្អ និងជោគជ័យគ្រប់ភារកិច្ច គ្រប់បំណងរបស់អូន....។ ❤️");
});

noBtn.addEventListener("click", () => {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    shrinkNoButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) play = false;
  }
});

function resizeYesButton() {
  yesButtonSize *= 1.2;
  yesBtn.style.transform = `scale(${yesButtonSize})`;
}

function shrinkNoButton() {
  noButtonSize *= 0.9;
  noBtn.style.transform = `scale(${noButtonSize})`;
}

function generateMessage(noCount) {
  const messages = [
    "No 😔",
    "Are you sure? 🥺",
    "Pookie please 🥹",
    "Don't do this to me 😭",
    "You're breaking my heart 💔",
    "I'm gonna cry... 😭💔",
  ];
  return messages[Math.min(noCount, messages.length - 1)];
}

function changeImage(image) {
  img.src =
    image === "yes"
      ? "https://media.tenor.com/aPFYmCN1OqsAAAAj/wrapped-gifts-birthday-presents.gif"
      : tontonGifs[image];
}

function updateNoButtonText() {
  noBtn.innerHTML = generateMessage(noCount);
}

function displayReadButton(message) {
  const readButtonContainer = document.createElement("div");
  readButtonContainer.classList.add("read-button-container");
  readButtonContainer.innerHTML = `<button class="btn btn-read">Read Message</button>`;
  document.querySelector(".container").appendChild(readButtonContainer);

  const readBtn = document.querySelector(".btn-read");
  readBtn.addEventListener("click", () => {
    if (!readBtn.disabled) {
      const messageContainer = document.createElement("div");
      messageContainer.classList.add("message-container");
      messageContainer.innerHTML = `<p>${message}</p>`;
      document.body.appendChild(messageContainer);
      readBtn.disabled = true;
    }
  });
}
