let toggle = false;

chrome.action.onClicked.addListener((tab) => {

    if (!tab.url) return;

    const isWhatsApp = tab.url.includes("web.whatsapp.com");
    const isTelegram = tab.url.includes("web.telegram.org");

    if (!isWhatsApp && !isTelegram) return;

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
    });

    toggle = !toggle;

    const blurCSS = `
        .chatblur-class {
            transition: all 0.3s ease;
        }

        .blur-10 {
            filter: blur(10px);
        }

        .blur-4 {
            filter: blur(4px);
        }

        .chatblur-class:hover {
            filter: none;
        }
    `;

    const removeBlurCSS = `
        .chatblur-class {
            transition: none;
        }

        .blur-10 {
            filter: none;
        }

        .blur-4 {
            filter: none;
        }
    `;

    chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        css: toggle ? blurCSS : removeBlurCSS
    });
});