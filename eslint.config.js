const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
    {
        ignores: ["dist/", "node_modules/"]
    },
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "commonjs",
            globals: {
                ...globals.browser,
                ...globals.node,
                // App Globals (src/globals.js)
                Player: "readonly",
                ns: "readonly",
                is4chan: "readonly",
                isChanX: "readonly",
                isChanXT: "readonly",
                isOneeChan: "readonly",
                Board: "readonly",
                Thread: "readonly",
                Site: "readonly",
                PlayerError: "readonly",
                Feedback: "readonly",
                
                // Webpack Provided
                _: "readonly",
                Icons: "readonly",
                VERSION: "readonly",
                MODE: "readonly",

                // External Libraries
                JSZip: "readonly",
                jsmediatags: "readonly",
                NoSleep: "readonly",

                // GM API
                unsafeWindow: "readonly",
                GM: "readonly",
                GM_getValue: "readonly",
                GM_setValue: "readonly",
                GM_deleteValue: "readonly",
                GM_listValues: "readonly",
                GM_addValueChangeListener: "readonly",
                GM_removeValueChangeListener: "readonly",
                GM_getResourceText: "readonly",
                GM_getResourceURL: "readonly",
                GM_registerMenuCommand: "readonly",
                GM_unregisterMenuCommand: "readonly",
                GM_openInTab: "readonly",
                GM_xmlhttpRequest: "readonly",
                GM_download: "readonly",
                GM_getTab: "readonly",
                GM_saveTab: "readonly",
                GM_getTabs: "readonly",
                GM_notification: "readonly",
                GM_setClipboard: "readonly",
                GM_info: "readonly",
                GM_addStyle: "readonly",

                 // 4chan specific
                Main: "readonly",
                Parser: "readonly" // Seems to be another global used in threads
            }
        },
        rules: {
            "no-unused-vars": ["warn", { "args": "none", "caughtErrors": "none" }],
            "no-undef": "error",
            "no-empty": "warn",
            "no-constant-binary-expression": "off"
        }
    }
];
