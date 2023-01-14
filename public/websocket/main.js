import { runWasm } from '/wasmgo.js';
runWasm("websocket", "/websocket/main.wasm").then(() => {
    document.getElementById("websocket").innerHTML = "loaded";
});

