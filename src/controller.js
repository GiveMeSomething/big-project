var myVideo = document.getElementById("videoPlayer");
var myPhone = document.getElementById("myPhone");
function playAnimation() {
    myPhone.style.top = '1800px';
    myPhone.style.transition = 'transform 2s';
    myPhone.style.transform = 'translateY(-850px)';
    myVideo.play();
}