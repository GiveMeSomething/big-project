const myVideo = document.getElementById("videoPlayer");
const myPhone = document.getElementById("myPhone");

function playAnimation() {
    myPhone.style.top = '1800px';

    myPhone.style.transition = 'transform 2s';
    myVideo.style.transition = 'transform 2s';

    myVideo.play();
    myVideo.style.transform = 'scale(0.75)';
    myPhone.style.transform = 'translateY(-850px) scale(0.75)';

}