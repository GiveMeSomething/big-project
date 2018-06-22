const videoVoCUc = document.getElementById("videoPlayer");
const phoneVoCuc = document.getElementById("myPhone");

const imageSPen = document.getElementById("imageSPen");
const butSPen = document.getElementById("butSPen");

const sPenPart_1 = document.getElementById("sPenPart_1");
const sPenPart_2 = document.getElementById("sPenPart_2");

function playAnimation() {
    phoneVoCuc.style.top = '1800px';

    phoneVoCuc.style.transition = 'transform 1.5s';
    videoVoCUc.style.transition = 'transform 2s';

    videoVoCUc.play();
    videoVoCUc.style.transform = 'scale(0.5)';
    phoneVoCuc.style.transform = 'translateY(-850px) scale(0.75)';

}

function changeText() {
    if (window.pageYOffset > 3400 && window.pageYOffset < 4000) {
        imageSPen.style.transition = 'transform 1s';
        imageSPen.style.transform = 'translateY(-830px)';

        sPenPart_1.style.visibility = 'hidden';

        sPenPart_2.style.visibility = 'visible';
        sPenPart_2.style.transition = 'transform 1s';
        sPenPart_2.style.transform = 'translateY(500px)';
    }
    else {
        sPenPart_1.style.visibility = 'visible';

        sPenPart_2.style.visibility = 'hidden';
        sPenPart_2.style.transform = 'translateY(-500px);'
    }
}

function alertPosition() {
    alert(window.pageYOffset);
}