function wrongAnswer() {
    alert("Loading...");
    setTimeout(() => {
        alert("Incorrect Answer ❌");
    }, 2000);
}

function celebrate() {
    for (let i = 0; i < 100; i++) { // More confetti = more fun
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDuration = (Math.random() * 2 + 1) + "s";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}

function getRandomColor() {
    const colors = ["red", "blue", "yellow", "green", "purple", "orange", "pink"];
    return colors[Math.floor(Math.random() * colors.length)];
}
