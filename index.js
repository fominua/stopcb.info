const youtubeButton = document.querySelector('.player__youtube');
const videoImage = document.querySelector('.player__video')
const iframe = document.querySelector('.player__iframe');
const iframeWidth = iframe.style.width;

youtubeButton.addEventListener('click', () => {
    youtubeButton.classList.add('hidden');
    videoImage.classList.add('hidden');
    iframe.classList.add('visible');
});

window.addEventListener('resize', () => {
    if (screen.width < 770) {
        iframe.classList.add('iframe-mobile-size');
    } else {
        iframe.classList.remove('iframe-mobile-size');
    }
});