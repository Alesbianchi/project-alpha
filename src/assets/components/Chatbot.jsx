import { useEffect } from "react";

const Chatbot = () => {
    useEffect(() => {
        // Evita doppio inserimento
        if (document.getElementById("vf-chat-widget")) return;

        (function (d, t) {
            const v = d.createElement(t);
            const s = d.getElementsByTagName(t)[0];

            v.onload = function () {
                window.voiceflow.chat.load({
                    verify: { projectID: '67f90d26695410a77e52e6f7' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production',
                    voice: {
                        url: "https://runtime-api.voiceflow.com"
                    }
                });
            };
            v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
            v.type = "text/javascript";
            s.parentNode.insertBefore(v, s);
        })(document, 'script');

        // Pulizia (opzionale)
        return () => {
            const script = document.getElementById("vf-chat-widget");
            if (script) {
                script.remove();
            }
        };
    }, []);

    // Inserire i CSS inline per personalizzare il widget
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            #vf-chat-widget {
                background-color: #f0f0f0 !important;
            }

            .vf-chat-widget__wrapper {
                background-color: #ffffff !important;
            }

            .vf-chat-widget__message-container {
                background-color: #e0e0e0 !important;
            }

            .vf-chat-widget__launcher {
                background-color: #ff6600 !important;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return null; // niente UI da renderizzare
};

export default Chatbot;