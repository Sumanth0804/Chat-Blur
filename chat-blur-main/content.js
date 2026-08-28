var id = 0;

function blurWhatsApp() {

    let chatList = document.getElementById("side");

    if (chatList) {
        chatList.classList.add("chatblur-class", "blur-10");
    }

    let header = document.getElementsByTagName("header")[1];

    if (header) {
        header.classList.add("chatblur-class", "blur-4");
    }

    for (let i = 0; i < 256; ++i) {

        let userNames =
            document.getElementsByClassName(`color-${i + 1}`);

        let userBackgrounds =
            document.getElementsByClassName(`bg-color-${i + 1}`);

        for (let item of userNames) {
            item.classList.add("chatblur-class", "blur-4");
        }

        for (let item of userBackgrounds) {
            item.classList.add("chatblur-class", "blur-4");
        }
    }
}


function blurTelegram() {

    /*
     * Telegram Web
     * Blur the chat list and visible user/chat information.
     */

    const selectors = [

        // Chat list
        ".chatlist",

        // Chat list items
        ".chatlist-chat",

        // Chat titles
        ".chatlist-chat .title",

        // User names / chat names
        ".user-title",

        // Message sender names
        ".message-title",

        // Telegram message headers
        ".message .message-title"
    ];

    selectors.forEach(selector => {

        document.querySelectorAll(selector).forEach(element => {

            element.classList.add(
                "chatblur-class",
                "blur-4"
            );

        });

    });
}


function chatblur() {

    clearTimeout(id);

    const hostname = window.location.hostname;

    if (hostname.includes("whatsapp.com")) {

        blurWhatsApp();

    }

    else if (hostname.includes("telegram.org")) {

        blurTelegram();

    }

    id = setTimeout(blurIt, 1000);
}


blurIt();