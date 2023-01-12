/*
 * // const go = new Go();
WebAssembly.instantiateStreaming(fetch("/db/main.wasm"), go.importObject).then((result) => {
    // mod = result.module;
    // inst = result.instance;
    go.run(result.instance);
    // document.getElementById("db").innerHTML = hello(); 
}).catch((err) => {
    console.error(err);
});
*/

import { runWasm } from '/wasmgo.js';
runWasm("db", "/db/main.wasm").then(() => {
    // document.getElementById("go").innerHTML = hello();
});

