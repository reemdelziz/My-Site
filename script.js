const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn")
let count = 0

yesBtn.addEventListener("click", () => {
    count = 0
    question.innerHTML = "Yay! I'll see you soon!";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    noBtn.style.display = "none";
    yesBtn.style.margin = "0 auto";
    yesBtn.innerHTML = ":)";
});

noBtn.addEventListener("mouseover", () => {
    count++
    if (count >= 9) {
        gif.src = "https://media.giphy.com/media/ZeqyC4tf4WQu6aemEb/giphy.gif";
    }
    else if (count >= 4) {
        gif.src = "https://media.giphy.com/media/yS2AMt4LX13Mc/giphy-downsized-large.gif";
    }
    
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});