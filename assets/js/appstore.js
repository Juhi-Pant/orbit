document.querySelectorAll('.store-toggle-btn').forEach(element =>{ element.addEventListener('click', function () {
    this.classList.toggle('active');
  
});
});
document.querySelectorAll('.chat-toggle-btn').forEach(element => {
    element.addEventListener('click', function () {
        const mainButton = document.querySelector('.toolbar-chat-btn');
        mainButton.classList.toggle('active');
        const mainSec = document.querySelector('.main');
        if (mainSec.style.marginRight === "385px") {
            mainSec.style.marginRight = "65px";
        } else {
            mainSec.style.marginRight = "385px";
        }
        const chatElement = document.querySelector('#chat');
        if (chatElement.style.display === "none" || chatElement.style.display === "") {
            chatElement.style.display = "flex";
        } else {
            chatElement.style.display = "none";
        }
    });
});