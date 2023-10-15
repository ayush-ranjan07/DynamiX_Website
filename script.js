
// Code for the typing effect in the website

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


















document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("background-video");
    const phrases = document.querySelectorAll('.typing-phrase');
    let currentPhraseIndex = 0;
    let isPlayingForward = true;

    function displayNextPhrase() {
        phrases[currentPhraseIndex].style.opacity = 0; // Hide the current phrase

        if (isPlayingForward) {
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to the next phrase
        } else {
            currentPhraseIndex = (currentPhraseIndex - 1 + phrases.length) % phrases.length; // Move to the previous phrase
        }

        phrases[currentPhraseIndex].style.opacity = 1; // Show the next/previous phrase
    }

    // Initial display of the first phrase
    phrases[currentPhraseIndex].style.opacity = 1;

    // Change the playback direction every 3 seconds
    setInterval(function () {
        isPlayingForward = !isPlayingForward;
    }, 3000);

    // Play the video in a loop
    video.play();
    video.addEventListener("ended", function () {
        video.currentTime = 0; // Reset video to the beginning
        video.play();
    });
});
