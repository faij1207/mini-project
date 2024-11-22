const cube = document.querySelector('.cube');

// Pause animation on mouseover
cube.addEventListener('mouseover', () => {
    cube.style.animationPlayState = 'paused';
});

// Resume animation on mouseout
cube.addEventListener('mouseout', () => {
    cube.style.animationPlayState = 'running';
});

// Change color on click
cube.addEventListener('click', () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    cube.style.backgroundColor = randomColor;
});

// Reset color on double-click
cube.addEventListener('dblclick', () => {
    cube.style.backgroundColor = '';
});
