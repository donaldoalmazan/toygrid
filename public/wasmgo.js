import '/wasm_exec.js';

export function runWasm(elementId, wasmFilename) {
    var go = new globalThis.Go();
    return new Promise((resolve, reject) => {
        WebAssembly.instantiateStreaming(fetch(wasmFilename), go.importObject)
            .then((result) => {
                go.run(result.instance);
                document.getElementById(elementId).innerHTML = 'initializing...';
                resolve();
            })
            .catch(err => {
                console.error(err);
                reject(err);
            });
    });
}

