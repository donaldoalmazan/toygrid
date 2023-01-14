package main

import (
	"syscall/js"

	. "github.com/stevegt/goadapt"
)

func main() {
	// register callbacks
	js.Global().Set("hello", js.FuncOf(Hello))

	Pl("WASM Go Initialized")

	// wait forever
	// select {}
	<-make(chan bool)
}

// Hello is a WASM function that returns a greeting.  The this parameter is
// the global object, and the args parameter is an array of arguments passed
// to the function.  The return value is an interface{} that is converted to
// a JavaScript value.
func Hello(this js.Value, args []js.Value) interface{} {
	Pl("Hello called")
	return "Hello, WebAssembly!"
}
