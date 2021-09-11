let clip = document.querySelectorAll('.videoclip');

for(let i = 0; i < clip.length; i++)
{
    clip[i].addEventListener('mouseenter'),
    function(e)
    {
        clip[i].play();
    }
}

var videoclips = document.getElementsByClassName("myvideo");
var videoclipswAudio = document.getElementsByClassName('myvideo myvideowAudio');

function fadeOut(el) {
    el.style.opacity = 1;
    var tick = function () {
        el.style.opacity = +el.style.opacity - 0.01;
        if (+el.style.opacity > 0) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };
    tick();
}

function fadeIn(el) {
    el.style.opacity = 0;
    var tick = function () {
        el.style.opacity = +el.style.opacity + 0.01;
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 20)
        }
    };
    tick();
}

var playvideo = function()
{
    this.play();
}

var pausevideo = function()
{
    this.pause();
}

var items = document.getElementsByClassName("audioclipwithsound");
for(var i = 0; i < items.length; i++)
{
    items[i].style.visibility = 'hidden';
}

var mutevideo = function()
{
    if(!this.muted)
    {
        assignMuteAnimationAndHide(this.previousElementSibling);
        this.muted = true;
    }
    else {
        assignUnmuteAnimationAndShow(this.previousElementSibling);
        this.muted = false;
    }
}

var assignMuteAnimationAndHide = function(animationElement)
{
    animationElement.src='/Media/Icons/InteractiveIcons/muteicon.gif';
    animationElement.style.visibility = 'visible';
    fadeOut(animationElement);
}

var assignUnmuteAnimationAndShow = function(animationElement)
{
    animationElement.src='Media/Icons/InteractiveIcons/unmuteicon.gif';
    fadeIn(animationElement);
    fadeOut(animationElement);
}

Array.from(videoclips).forEach(function(videoclips) 
{
    videoclips.addEventListener('mouseover', playvideo);
    videoclips.addEventListener('mouseleave', pausevideo);
}); 

Array.from(videoclipswAudio).forEach(function(videoclipswAudio) 
{
    videoclipswAudio.addEventListener('click', mutevideo);
}); 

var stickerbuttons = document.getElementsByClassName("stickerbuttons");
var cards = document.getElementsByClassName("polaroid");

function assignMouseoverListenersForButtons(div, button)
{
    div.addEventListener("mouseover", function( _event ) {
        button.style.display = "block";
    });
}

function assignMouseoutListenersForButtons(div, button)
{
    div.addEventListener("mouseout", function(_event) {
    button.style.display = "none";
    });
}

for(var i = 0; i < cards.length; i++)
{
    assignMouseoverListenersForButtons(cards[i] , stickerbuttons[i]);
    assignMouseoutListenersForButtons(cards[i] , stickerbuttons[i]);
}



