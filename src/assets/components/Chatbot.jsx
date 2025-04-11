import { useEffect } from "react";

const Chatbot = () => {
    useEffect(() => {
        // Evita doppio inserimento
        if (document.getElementById("vf-chat-widget")) return;

        // Crea lo script per caricare il chatbot
        const script = document.createElement('script');
        script.id = "vf-chat-widget";
        script.type = 'text/javascript';
        script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";

        script.onload = function () {
            window.voiceflow.chat.load({
                verify: { projectID: '67f90d26695410a77e52e6f7' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production',
                voice: {
                    url: "https://runtime-api.voiceflow.com"
                }
            });
        };

        // Aggiungi lo script al DOM
        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);

        // Pulizia (opzionale)
        return () => {
            const existingScript = document.getElementById("vf-chat-widget");
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, []);

    return null; // Non c'è bisogno di renderizzare nulla
};

export default Chatbot;