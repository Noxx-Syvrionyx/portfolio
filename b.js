document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".buttons button");
    const content = document.querySelector(".content");
    const initialContent = content.innerHTML; // save original content

    // Content for each button
    const buttonContents = {
        "Vouches": [
            "https://cdn.discordapp.com/attachments/1418292603383709836/1420110533910331462/image.png?ex=68e35dbf&is=68e20c3f&hm=e73e47cd4cd59f68d8ed2ee1e48a563309118e8e4b1802ca7b250039c4456dae&",
            "https://cdn.discordapp.com/attachments/1418292603383709836/1419282841006772244/image.png?ex=68e3a6a6&is=68e25526&hm=3f017e2f973e9b9eb415f1d31ff20e0a3d00ffcbd3db17c296d40d1516a00add&",
            "https://cdn.discordapp.com/attachments/1418292603383709836/1419271675827978292/image.png?ex=68e39c40&is=68e24ac0&hm=11832883443cda5ee7696a92f4f3cbb2986708a2a4bf1c40a3bddca7b8ccfb73&",
            "https://cdn.discordapp.com/attachments/1418292603383709836/1419259871907545188/image.png?ex=68e39142&is=68e23fc2&hm=76d854c0ee590aa3a2d5ce5eda0a95e263a3d6717c2c8edc0d72655627bd357a&",
            "https://cdn.discordapp.com/attachments/1418292603383709836/1419259810045755477/image.png?ex=68e39133&is=68e23fb3&hm=9c58e91cf66bec6caa61abc9bac5693c21ee60dc915a38f9ee023ff6e6504b2b&"
        ],
        "Services": [
            
        ],
        "Things I'm good at": [
            
        ],
        "My Story": [
            
        ]
    };

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            content.innerHTML = ""; // clear content

            const btnText = btn.textContent;

            // Create content container
            const container = document.createElement("div");
            container.className = "gallery";

            buttonContents[btnText].forEach(item => {
                if (item.startsWith("http")) {
                    const img = document.createElement("img");
                    img.src = item;
                    img.className = "thumb";
                    img.addEventListener("click", () => openFullscreen(item));
                    container.appendChild(img);
                } else {
                    const p = document.createElement("p");
                    p.textContent = item;
                    container.appendChild(p);
                }
            });

            // Create remove button
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.className = "remove-btn";
            removeBtn.addEventListener("click", () => {
                content.innerHTML = initialContent;
            });

            // Add to content
            content.appendChild(container);
            content.appendChild(removeBtn);
        });
    });

    function openFullscreen(src) {
        const overlay = document.createElement("div");
        overlay.className = "overlay";

        const fullImg = document.createElement("img");
        fullImg.src = src;
        fullImg.className = "full-img";

        const closeBtn = document.createElement("span");
        closeBtn.className = "close-btn";
        closeBtn.innerHTML = "&times;";
        closeBtn.addEventListener("click", () => overlay.remove());

        overlay.appendChild(fullImg);
        overlay.appendChild(closeBtn);
        document.body.appendChild(overlay);
    }
});
