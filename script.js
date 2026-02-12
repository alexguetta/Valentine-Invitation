let yesSize = 1;

function moveNo() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';

    yesSize += 0.2;
    yesBtn.style.transform = `scale(${yesSize})`;
}

function celebrate() {
    document.getElementById('main-content').innerHTML = `
        <h1 style="font-size: 3rem;">🎉 ❤️ 🎉</h1>
        <h2>ידעתי!</h2>
        <p>אני אוהב אותך ואבחר בך בכל שנה להיות הוולנטיין שלי ❤️</p>
        <img src="images/celebrate.gif" style="width:100%; border-radius:15px; margin-top:10px;">
    `;
    setInterval(createHeart, 50);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}

setInterval(createHeart, 300);