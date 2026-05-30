// popup.js

document.addEventListener("DOMContentLoaded", function () {

    setTimeout(function () {

        // Tạo nền mờ
        const overlay = document.createElement("div");
        overlay.id = "popup-overlay";
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        `;

        // Tạo popup
        const popup = document.createElement("div");
        popup.style.cssText = `
            background: #fff;
            padding: 25px;
            border-radius: 10px;
            max-width: 500px;
            text-align: center;
            box-shadow: 0 0 20px rgba(0,0,0,0.3);
        `;

        popup.innerHTML = `
            <h2>[NOAH SYSTEM] {NETWORK}</h2>
				<p>
				<a href="https://pablo.id.vn/NOAH-Network" target="_blank">
					<img src="assets/images/NOAH_POPUP.png" alt="[NOAH] {SYSTEM}">
				</a>
				</p>
            <button id="close-popup">Đóng Thông Báo</button>
        `;

        overlay.appendChild(popup);
        document.body.appendChild(overlay);

        // Nút đóng popup
        document
            .getElementById("close-popup")
            .addEventListener("click", function () {
                overlay.remove();
            });

    }, 15000); // 15000 ms = 15 giây

});