import { runWasm } from '/wasmgo.js';
runWasm("db", "/db/main.wasm").then(() => {
    document.getElementById("db").innerHTML = "loaded";
});

