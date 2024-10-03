document.addEventListener("mousemove", (e) => {
    const smiley = document.querySelector('.smiley');
    const eyes = document.querySelectorAll('.eye');
    const mouth = document.querySelector('.mouth');

    const smileyRect = smiley.getBoundingClientRect();
    const smileyCenterX = smileyRect.left + smileyRect.width / 2;
    const smileyCenterY = smileyRect.top + smileyRect.height / 2;

    const maxEyeMovement = 15;

    const angleX = (e.clientX - smileyCenterX) / smileyRect.width;
    const angleY = (e.clientY - smileyCenterY) / smileyRect.height;

    eyes.forEach((eye) => {
        const moveX = Math.min(Math.max(angleX * 30, -maxEyeMovement), maxEyeMovement);
        const moveY = Math.min(Math.max(angleY * 30, -maxEyeMovement), maxEyeMovement);
        eye.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    // Change mouth shape based on mouse position
    if (angleY < 0) {
        mouth.classList.remove('curve');
        mouth.classList.add('straight');
    } else {
        mouth.classList.remove('straight');
        mouth.classList.add('curve');
    }
});
