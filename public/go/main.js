/*
 * // const go = new Go();
WebAssembly.instantiateStreaming(fetch("/go/main.wasm"), go.importObject).then((result) => {
    // mod = result.module;
    // inst = result.instance;
    go.run(result.instance);
    document.getElementById("go").innerHTML = hello(); 
}).catch((err) => {
    console.error(err);
});
*/

import { runWasm } from '/wasmgo.js';
runWasm("go", "/go/main.wasm").then(() => {
    document.getElementById("go").innerHTML = hello();
});

