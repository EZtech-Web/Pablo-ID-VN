// popup.js - Fancybox 3.5.7

document.addEventListener("DOMContentLoaded", function () {

    setTimeout(function () {

        $.fancybox.open({
            src: `
                <div style="text-align:center;max-width:500px;">
                    <h2>[NOAH SYSTEM] {NETWORK}</h2>

                    <p>
                        <a href="https://pablo.id.vn/NOAH-Network" target="_blank">
                            <img
                                src="assets/images/NOAH_POPUP.png"
                                alt="[NOAH] {SYSTEM}"
                                style="max-width:100%;height:auto;"
                            >
                        </a>
                    </p>

                    <p>
                        <button
                            data-fancybox-close
                            style="
                                padding:10px 20px;
                                cursor:pointer;
                            "
                        >
                            Đóng Thông Báo
                        </button>
                    </p>
                </div>
            `,
            type: "html",
            opts: {
                touch: false,
                smallBtn: true,
                toolbar: false,
                animationEffect: "zoom",
                transitionEffect: "fade"
            }
        });

    }, 15000); // 15 giây

});