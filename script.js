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
    const content = document.getElementById('main-content');

    content.innerHTML = `
        <h1 style="font-size: 2.5rem;">🎉 ❤️ 🎉</h1>
        <h2>היידההההה היא אמרה לי כןןןןן</h2>
        <p>אני אבחר בך בכל שנה להיות הוולנטיין שלי!!❤️</p>
        
        <div class="video-container">
            <video id="val-video" width="100%" controls autoplay>
                <source src="images/our-video.mp4" type="video/mp4">
                הדפדפן שלך לא תומך בנגן הווידאו.
            </video>
        </div>
    `;


    setInterval(createHeart, 100);

    const video = document.getElementById('val-video');
    video.play().catch(error => {
        console.log("Auto-play was prevented, waiting for user interaction.");
    });
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}


setInterval(createHeart, 500);
