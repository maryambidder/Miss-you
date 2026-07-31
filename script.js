function openLetter(){
    burstKisses();
    setTimeout(() => {
        document.getElementById("welcome").style.display = "none";
        document.getElementById("letterPage").style.display = "flex";
    }, 1200);
}

function openGallery(){
    document.getElementById("letterPage").style.display = "none";
    document.getElementById("galleryPage").style.display = "block";
}

function openFinal(){
    document.getElementById("galleryPage").style.display = "none";
    document.getElementById("finalPage").style.display = "flex";
}

function burstKisses(){
    const kissEmojis = ["😘","💋","💕","💗","💜"];
    const container = document.getElementById("floatingHearts");

    for(let i = 0; i < 25; i++){
        const kiss = document.createElement("span");
        kiss.textContent = kissEmojis[Math.floor(Math.random() * kissEmojis.length)];
        kiss.className = "kiss-burst";

        const startX = Math.random() * 100;
        const drift = (Math.random() * 200 - 100);
        const delay = Math.random() * 0.6;
        const duration = 1.6 + Math.random() * 0.8;
        const size = 24 + Math.random() * 20;

        kiss.style.left = startX + "vw";
        kiss.style.fontSize = size + "px";
        kiss.style.setProperty("--drift", drift + "px");
        kiss.style.animationDelay = delay + "s";
        kiss.style.animationDuration = duration + "s";

        container.appendChild(kiss);
        setTimeout(() => kiss.remove(), (delay + duration) * 1000 + 100);
    }
}

const welcomeScreen = document.getElementById("welcome");
const cursorGlow = document.createElement("div");
cursorGlow.className = "cursor-glow";
welcomeScreen.appendChild(cursorGlow);

let sparkleTimer = 0;

welcomeScreen.addEventListener("mousemove", function(e){
    const rect = welcomeScreen.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cursorGlow.style.left = x + "px";
    cursorGlow.style.top = y + "px";

    sparkleTimer++;
    if(sparkleTimer % 6 === 0){
        createSparkle(x, y);
    }
});

function createSparkle(x, y){
    const emojis = ["✨","💜","🌸","💫"];
    const sparkle = document.createElement("span");
    sparkle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    sparkle.className = "sparkle";
    sparkle.style.left = x + "px";
    sparkle.style.top = y + "px";
    welcomeScreen.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
}

document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", function(){
        this.classList.add("pop");
        setTimeout(() => this.classList.remove("pop"), 400);
    });
});