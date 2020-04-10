var navbar = document.querySelector("nav.navBar");

var sticky = navbar.offsetTop;
var sendOn = false;


window.onscroll = function(){scrollFunct()};


function scrollFunct(){
    if (window.pageYOffset>sticky){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
};
var writers = 1;


function addWriter(){
    writers += 1;
    var writer1 = document.querySelector(".writer1");
    var wrtClone = writer1.cloneNode(true);
    document.querySelector(".writers").appendChild(wrtClone);

    var last = document.querySelector(".writers").lastChild;
    var lastFirst = last.firstElementChild;
    lastFirst.textContent = "Writer#" + writers.toString(10);
    last.classList.remove("writer1");
    last.classList.add("writer" + writers.toString(10));
};

function dropShow(){
    if (sendOn == false){
        var sender = document.querySelector(".dropShow");
        sender.classList.remove("dropShow");
        sender.classList.add("emailSend");
        sendOn = true;
    }else{
        var sender = document.querySelector(".emailSend");
        sender.classList.remove("emailSend");
        sender.classList.add("dropShow");
        sendOn = false;
    }
};