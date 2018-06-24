const videoVoCUc = document.getElementById("videoPlayer");
const phoneVoCuc = document.getElementById("myPhone");

const imageSPen = document.getElementById("imageSPen");

const sPenPart_1 = document.getElementById("sPenPart_1");
const sPenPart_2 = document.getElementById("sPenPart_2");

const imageCamera = document.getElementById("imageCamera");

const cameraPart_1 = document.getElementById("text1_Camera");
const cameraPart_2 = document.getElementById("text2_Camera");

function playAnimation() {
    phoneVoCuc.style.top = '1800px';

    phoneVoCuc.style.transition = 'transform 1.5s';
    videoVoCUc.style.transition = 'transform 2s';

    videoVoCUc.play();
    videoVoCUc.style.transform = 'scale(0.5)';
    phoneVoCuc.style.transform = 'translateY(-850px) scale(0.75)';

}

function changeTextSPen() {
    if (window.pageYOffset > 3550 && window.pageYOffset < 4500) {
        imageSPen.style.transition = 'transform 1s';
        imageSPen.style.transform = 'translateY(-830px)';

        sPenPart_1.style.visibility = 'hidden';

        sPenPart_2.style.visibility = 'visible';
        sPenPart_2.style.transition = 'transform 1s';
        sPenPart_2.style.transform = 'translateY(500px)';
    }
    else {
        imageSPen.style.transform = 'translateY(830px)';

        sPenPart_1.style.visibility = 'visible';

        sPenPart_2.style.visibility = 'hidden';
        sPenPart_2.style.transform = 'translateY(-500px);'
    }
}

function changeTextCamera() {
    if (window.pageYOffset > 5400 && window.pageYOffset < 5800) {
        cameraPart_1.style.visibility = 'hidden';

        cameraPart_2.style.transition = 'transform 1s';
        cameraPart_2.style.visibility = 'visible';
        cameraPart_2.style.transform = 'translateY(300px)';

        imageCamera.style.transition = 'transform 1s';
        imageCamera.style.transform = 'translateY(-700px)';
    }
    else {
        cameraPart_1.style.visibility = 'visible';

        cameraPart_2.style.visibility = 'hidden';
        cameraPart_2.style.transform = 'translateY(-300px)';

        imageCamera.style.transform = 'translateY(700px)';
    }

}

function alertPosition() {
    alert(window.pageYOffset);
}