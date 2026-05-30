// Pop-Up.js

document.addEventListener("DOMContentLoaded", function () {

setTimeout(function () {

    $.fancybox.open({
        src: '
            <div id="noah-popup" style="max-width:600px; text-align:center; padding:15px;">
                <h2>[NOAH SYSTEM] {NETWORK}</h2>

                <a href="https://pablo.id.vn/NOAH-Network" target="_blank">
                    <img
                        src="assets/images/NOAH_POPUP.png"
                        alt="[NOAH] {SYSTEM}"
                        style="max-width:100%; height:auto;"
                    >
                </a>
            </div>
        ',
        type: "html",

        opts: {
            smallBtn: true,
            toolbar: false,
            touch: false,
            animationEffect: "zoom",
            transitionEffect: "fade"
        }
    });

}, 15000);

});
