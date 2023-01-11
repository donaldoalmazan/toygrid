// ana example javascript program that loads a go WASM module and calls a function in it

// import * as wasm from "/go/bindings/main_bg.wasm";
// const wasm = require("./your-js-bindings-folder/your-wasm-file_bg.wasm")

/*
// load the go WASM module
const go = new Go();
WebAssembly.instantiateStreaming(fetch("/go/main.wasm"), go.importObject).then((result) => {
  go.run(result.instance);
    });

// call the go function
// the go function is defined in the go source code as:
//
// func Hello() string {
//     return "Hello, WebAssembly!"
// }
//
// func main() {
//     js.Global().Set("hello", js.FuncOf(Hello))
// }
document.getElementById("go").innerHTML = wasm.hello();

*/

const go = new Go();
WebAssembly.instantiateStreaming(fetch("go/main.wasm"), {})
  .then((result) => {
    // 'hello' is the exported function name
    // document.getElementById("go").innerHTML = result.instance.exports.hello();
    result.instance.exports.hello();
  });

